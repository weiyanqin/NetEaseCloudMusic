{
    let view = {
        el: '.song-list ul',
        template: `
            <li class="" id="{{id}}">
                <p class="name" title="{{name}}">
                    <a href="">{{name}}</a>
                </p>
                <p class="singer">
                    <span class="iconfont icon-geshou"></span>
                    {{singer}}
                </p>
                <p class="lyric"></p>
                <p class="cover"></p>
            </li>
        `,
        templateName: '<p class="name" title="{{name}}"> <a href="">{{name}}</a> </p>',
        templateSinger: '<p class="singer"> <span class="iconfont icon-geshou"></span> {{singer}} </p>',
        templateId: '<li class="" id="{{id}}"></li>',
        render(data) {
            let $el = $(this.el)
            let { songs } = data
            let temporaryTemplate = this.template
            let newTemplate = []
            for (let i = 0; i < songs.length; i++) {
                for (let key in songs[i]) {
                    switch (key) {
                        case ('name'):
                            this.template = this.template.replace(/\{\{name\}\}/g, songs[i][key]);
                            break;
                        case ('singer'):
                            this.template = this.template.replace(/\{\{singer\}\}/g, songs[i][key]);
                            break;
                        case ('id'):
                            this.template = this.template.replace(/\{\{id\}\}/g, songs[i][key]);
                            break;
                    }
                }
               newTemplate.push(this.template)
               this.template = temporaryTemplate
            }
            console.log(newTemplate)
            $el.html(newTemplate)
        },
        clearActive() {
            $(this.el).find('.active').removeClass('.active')
        },
        activeItem(li) {
            let $li = $(li)
            $li.addClass('active').siblings('.active').removeClass('active')
        }
    }
    let model = {
        data: {
            songs: []
        },
        find() {
            var query = new AV.Query('Song')
            return query.find().then((songs) => {
                this.data.songs = songs.map((song) => {
                    return { id: song.id, ...song.attributes }
                })
                return songs
            })
        }
    }
    let controller = {
        init(view, model) {
            this.view = view
            this.model = model
            // this.view.render(this.model.data)
            this.bindEvents()
        },
        bindEvents() {
            this.model.find().then(() => {
                console.log('----------')
                console.log(this.model.data)
                this.view.render(this.model.data)
            })
            window.eventHub.on('create', (songData) => {
                console.log(songData)
                this.model.data.songs.push(songData)
                this.view.render(this.model.data)
            })

            $(this.view.el).on('click', 'li', (e) => {
                this.view.activeItem(e.currentTarget)
                let songId = e.currentTarget.getAttribute('id')
                let songs = this.model.data.songs
                for (let i = 0; i < songs.length; i++) {
                    if (songs[i].id === songId) {
                        data = songs[i]
                        break
                    }
                }
                window.eventHub.emit('select', JSON.parse(JSON.stringify(data)))
            })
            
            window.eventHub.on('update', (song)=>{
                console.log(song)
                let songs = this.model.data.songs
                console.log(songs)
                for(let i=0; i<songs.length; i++){
                    if(songs[i].id === song.id){
                        Object.assign(songs[i], song)
                    }
                }
                this.view.render(this.model.data)
            })
        }
    }
    controller.init(view, model)
}
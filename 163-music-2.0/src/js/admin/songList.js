{
    let view = {
        el: '.song-list ul',
        template: `
            <li class="">
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
        temporaryTemplate: '',
        render(data, temporaryTemplate) {
            let $el = $(this.el)
            let { songs } = data
            let newTemplate = songs.map((song) => {
                for (let key in song) {
                    switch (key) {
                        case 'name':
                            temporaryTemplate = this.template.replace(/\{\{name\}\}/g, song[key]);
                            break;
                        case 'singer':
                            temporaryTemplate = temporaryTemplate.replace(/\{\{singer\}\}/g, song[key]);
                            break;
                    }
                }
                return temporaryTemplate
            })
            $el.html(newTemplate)
        },
        clearActive() {
            $(this.el).find('.active').removeClass('.active')
        },
        activeItem(li){
            let $li = $(li)
            console.log('1')
            $li.addClass('active').siblings('.active').removeClass('active')
            console.log('2')
        }
    }
    let model = {
        data: {
            songs: []
        },
        find(){
            var query = new AV.Query('Song')
            return query.find().then((songs)=>{
                this.data.songs = songs.map((song)=>{
                    return {id: song.id, ...song.attributes}
                })
                return songs
            })
        }
    }
    let controller = {
        init(view, model) {
            this.view = view
            this.model = model
            this.view.render(this.model.data)
            this.bindEvents()
        },
        bindEvents() {
            window.eventHub.on('create', (songData) => {
                this.model.data.songs.push(songData)
                this.view.render(this.model.data)
            })
            this.model.find().then(()=>{
                this.view.render(this.model.data)
            })
            $(this.view.el).on('click','li',(e)=>{
                console.log(e.currentTarget)
                this.view.activeItem(e.currentTarget)
            })
        }
    }
    controller.init(view, model)
}
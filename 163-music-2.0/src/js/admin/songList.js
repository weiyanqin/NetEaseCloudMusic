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
        }
    }
    controller.init(view, model)
}
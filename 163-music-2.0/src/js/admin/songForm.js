{
    let view = {
        el: '.edit-page',
        template: `
            <form class="show-area">
                <label>歌曲名称</label>
                <input type="text" class="song" name="name" value="__name__">
                <label>歌手</label>
                <input type="text" class="singer" name="singer" value="__singer__">
                <label>歌词</label>
                <textarea class="lyric" name="lyric" cols="30" rows="5">{{lyric}}</textarea>
                <label>歌曲封面链接</label>
                <input type=" text" class="cover" name="cover" value="{{cover}}">
                <label>歌曲外链</label>
                <input type="text" class="url" name="url" value="__url__">
                <v class="button-wrapper">
                    <button class="confirm" type="submit">保&nbsp;&nbsp;存</button>
                </v>
            </form>      
        `,
        render(data = {}) {
            let placeholders = ['name', 'url']
            let html = this.template
            placeholders.map((string) => {
                html = html.replace(`__${string}__`, data[string] || '')
            })
            $(this.el).html(html)
        },
        reset() {
            this.render({})
        }
    }
    let model = {
        data: {
            name: '',
            singer: '',
            url: '',
            id: ''
        },
        create(data) {
            var Song = AV.Object.extend('Song')
            var song = new Song()
            song.set('name', data.name)
            song.set('singer', data.singer)
            song.set('url', data.url)
            return song.save().then((newSong) => {
                let { id, attributes } = newSong
                Object.assign(this.data, {
                    id: id,
                    name: attributes.name,
                    singer: attributes.singer,
                    url: attributes.url
                })
            }, (error) => {
                console.log(error)
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
            window.eventHub.on('upload', (data) => {
                this.model.data = data
                this.view.render(this.model.data)
                $(this.view.el).removeClass('hide')
                window.eventHub.emit('edit', '用户需要编辑歌曲')
            })
            $(this.view.el).on('submit', 'form', (e) => {
                e.preventDefault()
                let needs = 'name singer url'.split(' ')
                let data = {}
                needs.map((string) => {
                    data[string] = $(this.view.el).find(`[name = "${string}"]`).val()
                })
                this.model.create(data)
                    .then(() => {
                        this.view.reset()
                        let string = JSON.stringify(this.model.data)
                        let object = JSON.parse(string)
                        console.log(object)
                        window.eventHub.emit('create', object)
                    })
            })
            window.eventHub.on('select',(data)=>{
                $(this.view.el).removeClass('hide')
                this.model.data = data
                this.view.render(this.model.data)
            })
            window.eventHub.on('new',()=>{
                $(this.view.el).addClass('hide')
            })
        }
    }
    controller.init(view, model)
}
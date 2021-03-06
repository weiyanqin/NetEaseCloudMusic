{
    let view = {
        el: '.info-page',
        template: `
            <form class="show-area">
                <label>歌曲名称</label>
                <input type="text" class="song" name="name" value="__name__">
                <label>歌手</label>
                <input type="text" class="singer" name="singer" value="__singer__">
                <label>歌词</label>
                <textarea class="lyrics" name="lyrics" cols="30" rows="8">__lyrics__</textarea>
                <label>封面链接</label>
                <input type="text" class="cover" name="cover" value="__cover__">
                <div class="button-wrapper">
                    <button class="delete">
                        删&nbsp;&nbsp;除
                    </button>
                    <button class="confirm" type="submit">
                        确&nbsp;&nbsp;定
                    </button>
                </div>
            </form>       
        `,
        render(data = {}) {
            let placeholders = ['name', 'singer', 'cover', 'lyrics']
            let html = this.template
            placeholders.map((string) => {
                html = html.replace(`__${string}__`, data[string] || '')
            })
            $(this.el).html(html)
        }
    }
    let model = {
        data: {
            name: '',
            singer: '',
            lyrics:'',
            url: '',
            id: '',
            cover: '',
        },
        update(data) {
            var song = AV.Object.createWithoutData('Song', model.data.id)
            song.set('name', data.name)
            song.set('singer', data.singer)
            song.set('lyrics', data.lyrics)
            song.set('cover', data.cover)
            // song.set('url', data.url)
            return song.save().then((response)=>{
                Object.assign(this.data, data)
                return response
            })
        }
    }
    let controller = {
        init(view, model) {
            this.view = view
            this.model = model
            this.bindEvents()
            this.view.render(this.model.data)
        },
        update() {
            let needs = 'name singer lyrics cover'.split(' ')
            let data = {}
            needs.map((string) => {
                data[string] = $(this.view.el).find(`[name = "${string}"]`).val()
            })
            this.model.update(data).then(() => {
                alert('更新成功')
                console.log(this.model.data)
                window.eventHub.emit('update', JSON.parse(JSON.stringify(this.model.data)))
            })
        },
        bindEvents() {
            window.eventHub.on('select', (data) => {
                console.log(data)
                $(this.view.el).removeClass('hide')
                this.model.data = data
                this.view.render(this.model.data)
            })

            $(this.view.el).on('submit', 'form', (e) => {
                e.preventDefault()
                if (this.model.data.id) {
                    this.update()
                }
            })

            window.eventHub.on('new', () => {
                $(this.view.el).addClass('hide')
            })
        }
    }
    controller.init(view, model)
}
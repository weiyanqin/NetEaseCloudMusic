{
    let view = {
        el: '.info-page',
        template: `
            <div class="show-area">
                <label>歌曲名称</label>
                <input type="text" class="song" name="song" value="__name___">
                <label>歌手</label>
                <input type="text" class="singer" name="singer" value="__singer__">
                <label>歌词</label>
                <textarea class="lyric" name="lyric" cols="30" rows="8"></textarea>
                <label>封面链接</label>
                <input type="text" class="cover" name="cover" value="http://p1.music.126.net/ZnFe6Uj1Lmr_HrAjDbe02Q==/1394180751920871.jpg?param=130y130">
                <div class="button-wrapper">
                    <div class="delete">
                        删&nbsp;&nbsp;除
                    </div>
                    <div class="confirm">
                        确&nbsp;&nbsp;定
                    </div>
                </div>
            </div>       
        `,
        render(data = {}) {
            let placeholders = ['name', 'url']
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
            url: '',
            id: '',
        }
    }
    let controller = {
        init(view, model) {
            this.view = view
            this.model = model
            this.bindEvents()
            this.view.render(this.model.data)
        },
        bindEvents() {
            window.eventHub.on('select', (data) => {
                console.log(data)
                $(this.view.el).removeClass('hide')
                this.model.data = data
                this.view.render(this.model.data)
            })
            window.eventHub.on('new', () => {
                $(this.view.el).addClass('hide')
            })
        }
    }
    controller.init(view, model)
}
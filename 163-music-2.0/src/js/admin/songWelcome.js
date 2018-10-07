{
    let view = {
        el: '.welcome-page',
        template: `
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"></div>
                    <div class="swiper-slide"></div>
                    <div class="swiper-slide"></div>
                </div>
            </div>
            <p class="welcome-info">
                <span class="iconfont icon-neteasecloudmusic"></span>
                欢迎使用网易云音乐后台管理系统!
            </p>       
        `,
        render(){
            $(this.el).html(this.template)
        },
        show(){
            $(this.el).removeClass('hide')
        },
        hide(){
            $(this.el).addClass('hide')
        }
    }
    let model = {}
    let controller = {
        init(view, model){
            this.view = view
            this.model = model
            this.view.render(this.model.data)
            this.bindEvents()
        },
        bindEvents(){
            eventHub.on('new', ()=>{
                this.view.hide()
            })
        }
    }
    controller.init(view, model)
}
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
        }
    }
    let model = {}
    let controller = {
        init(view, model){
            this.view = view
            this.model = model
            this.view.render(this.model.data)
        }
    }
    controller.init(view, model)
}
{
    let view = {
        el: '.uploadArea',
        template: `
            <div id="uploadContainer" class="draggable">
                <div id="uploadButton" class="clickable">
                    <span class="iconfont icon-add"></span>
                    新增歌曲
                </div>
            </div>       
        `,
        render(data){
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
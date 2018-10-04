{
    let view = {
        el: '.upload-page',
        template: `
            <div id="upload-area">
                <div id="upload-button">
                    选择文件
                </div>
                <div id="">
                    <!-- <input type="text"> -->
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
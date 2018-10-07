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
            this.bindEvents()
            // window.eventHub.on('upload',(data)=>{
            //     console.log('new song 模块得到了"data"')
            //     console.log(data)
            // }) 
        },
        bindEvents(){
            $(this.view.el).find('#uploadButton').on('click',()=>{
                window.eventHub.emit('new', '用户需要新增歌曲')
            })
        }
    }
    controller.init(view, model)
}
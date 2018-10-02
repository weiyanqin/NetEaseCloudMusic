{
    let view = {
        el: '.song-list',
        template: `
            <ul>
                <li class="active">111</li>
                <li>222</li>
                <li>333</li>
                <li>444</li>
                <li>555</li>
                <li>666</li>
            </ul>
        `,
        render(data){
            $(this.el).html(this.template)
        },
    }
    let model = {}
    let controller = {
        init(view,model){
            this.view = view
            this.model= model
            this.view.render(this.model.data)
        }
    }
    controller.init(view, model)
    
}
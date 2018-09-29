{
    let view = {
        el: 'section.playlists',
        init(){}
    }
    let model = {}
    let controller = {
        init(view, model){
            this.view = view 
            this.view.init()
            this.model = model
        }
    }
}
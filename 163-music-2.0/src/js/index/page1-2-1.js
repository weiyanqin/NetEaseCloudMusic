{
    let view = {
        el: 'section.playlists', //推荐歌单
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
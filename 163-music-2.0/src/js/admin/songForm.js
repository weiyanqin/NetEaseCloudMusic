{
    let view = {
        el: '.edit-page',
        template: `
            <div class="show-area">
                <label>歌曲名称</label>
                <input type="text" class="song" name="song" value="{{song}}">
                <label>歌手</label>
                <input type="text" class="singer" name="singer" value="{{singer}}">
                <label>歌词</label>
                <textarea class="lyric" name="lyric" cols="30" rows="5">{{lyric}}</textarea>
                <label>歌曲封面链接</label>
                <input type=" text" class="cover" name="cover" value="{{cover}}">
                <label>歌曲外链</label>
                <input type="text" class="url" name="url" value="{{url}}" disabled>
                <div class="button-wrapper">
                    <div class="confirm">保&nbsp;&nbsp;存</div>
                </div>
            </div>      
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
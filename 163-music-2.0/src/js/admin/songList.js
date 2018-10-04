{
    let view = {
        el: '.song-list',
        template: `
        <ul>
            <li class="active">
                <p class="song" title="少林英雄">
                    <a href="">少林英雄</a>
                </p>
                <p class="singer">
                    <span class="iconfont icon-geshou"></span>
                    于荣光
                </p>
                <p class="lyric"></p>
                <p class="cover"></p>
            </li>
            <li>
                <p class="song" title="少林英雄">
                    <a href="">少林英雄</a>
                </p>
                <p class="singer">
                    <span class="iconfont icon-geshou"></span>
                    于荣光
                </p>
                <p class="lyric"></p>
                <p class="cover"></p>
            </li>
            <li>
                <p class="song" title="少林英雄">
                    <a href="">少林英雄</a>
                </p>
                <p class="singer">
                    <span class="iconfont icon-geshou"></span>
                    于荣光
                </p>
                <p class="lyric"></p>
                <p class="cover"></p>
            </li>
            <li>
                <p class="song" title="少林英雄">
                    <a href="">少林英雄</a>
                </p>
                <p class="singer">
                    <span class="iconfont icon-geshou"></span>
                    于荣光
                </p>
                <p class="lyric"></p>
                <p class="cover"></p>
            </li>
            <li>
                <p class="song" title="少林英雄">
                    <a href="">少林英雄</a>
                </p>
                <p class="singer">
                    <span class="iconfont icon-geshou"></span>
                    于荣光
                </p>
                <p class="lyric"></p>
                <p class="cover"></p>
            </li>
            <li>
                <p class="song" title="少林英雄">
                    <a href="">少林英雄</a>
                </p>
                <p class="singer">
                    <span class="iconfont icon-geshou"></span>
                    于荣光
                </p>
                <p class="lyric"></p>
                <p class="cover"></p>
            </li>
            <li>
                <p class="song" title="少林英雄">
                    <a href="">少林英雄</a>
                </p>
                <p class="singer">
                    <span class="iconfont icon-geshou"></span>
                    于荣光
                </p>
                <p class="lyric"></p>
                <p class="cover"></p>
            </li>
            <li>
                <p class="song" title="少林英雄">
                    <a href="">少林英雄</a>
                </p>
                <p class="singer">
                    <span class="iconfont icon-geshou"></span>
                    于荣光
                </p>
                <p class="lyric"></p>
                <p class="cover"></p>
            </li>
            <li>
                <p class="song" title="少林英雄">
                    <a href="">少林英雄</a>
                </p>
                <p class="singer">
                    <span class="iconfont icon-geshou"></span>
                    于荣光
                </p>
                <p class="lyric"></p>
                <p class="cover"></p>
            </li>
            <li>
                <p class="song" title="少林英雄">
                    <a href="">少林英雄</a>
                </p>
                <p class="singer">
                    <span class="iconfont icon-geshou"></span>
                    于荣光
                </p>
                <p class="lyric"></p>
                <p class="cover"></p>
            </li>
            <li>
                <p class="song" title="少林英雄">
                    <a href="">少林英雄</a>
                </p>
                <p class="singer">
                    <span class="iconfont icon-geshou"></span>
                    于荣光
                </p>
                <p class="lyric"></p>
                <p class="cover"></p>
            </li>
            <li>
                <p class="song" title="少林英雄">
                    <a href="">少林英雄</a>
                </p>
                <p class="singer">
                    <span class="iconfont icon-geshou"></span>
                    于荣光
                </p>
                <p class="lyric"></p>
                <p class="cover"></p>
            </li>
            <li>
                <p class="song" title="少林英雄">
                    <a href="">少林英雄</a>
                </p>
                <p class="singer">
                    <span class="iconfont icon-geshou"></span>
                    于荣光
                </p>
                <p class="lyric"></p>
                <p class="cover"></p>
            </li>
            <li>
                <p class="song" title="少林英雄">
                    <a href="">少林英雄</a>
                </p>
                <p class="singer">
                    <span class="iconfont icon-geshou"></span>
                    于荣光
                </p>
                <p class="lyric"></p>
                <p class="cover"></p>
            </li>
        </ul>
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
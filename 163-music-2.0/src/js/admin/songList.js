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
        </ul>
        `,
        render(data){
            let $el = $(this.el)
            $el.html(this.template)
            let {songs} = data
            let liList = songs.map((song)=>{
                return $('<li></li>').text(song.name)
            })
            $el.find('ul').empty()
            liList.map((domLi)=>{
                $el.find('ul').append(domLi)
            })
        },
        clearActive(){
            $(this.el).find('.active').removeClass('.active')
        }
    }
    let model = {
        data: {
            songs: [ ]
        },
        find(){
            console.log('2')
            var query = new AV.Query('Song')
            console.log('3')
            return query.find().then((songs)=>{
                console.log('4')
                this.data.songs = songs.map((song)=>{
                    console.log('5')
                    return {id: song.id, ...song.attributes}
                })
                return songs
            })
        }
    }
    let controller = {
        init(view, model){
            this.view = view
            this.model = model 
            this.view.render(this.model.data)
            this.bindEvents()
        },
        bindEvents(){
            window.eventHub.on('create', (songData)=>{
                this.model.data.songs.push(songData)
                this.view.render(this.model.data)
            })
            console.log('1')
            this.model.find().then(()=>{
                console.log('-----')
                console.log(this.model.data)
                this.view.render(this.model.data)
            })
        }
    }
    controller.init(view, model)
}
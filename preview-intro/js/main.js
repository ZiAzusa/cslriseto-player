const ap = new APlayer({
    container: document.querySelector('.player'),
    fixed: true,
    order: 'random',
    listMaxHeight: 100,
    audio: [
        {
            name: '雨之城',
            artist: '阿城',
            url: '/asset/music/雨之城.flac',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R500x500M000002p2nJ53G74kV.jpg'
        },
        {
            name: '孤独',
            artist: '阿城',
            url: '/asset/music/孤独.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R500x500M000002p2nJ53G74kV.jpg'
        },
        {
            name: '你给予我的晴天',
            artist: '阿城',
            url: '/asset/music/你给予我的晴天.flac',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R500x500M000002p2nJ53G74kV.jpg'
        },
        {
            name: '孤岛城市的传说',
            artist: '阿城',
            url: '/asset/music/孤岛城市的传说.flac',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R500x500M000002p2nJ53G74kV.jpg'
        },
        {
            name: '入侵者',
            artist: '阿城',
            url: '/asset/music/入侵者.flac',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R500x500M000002p2nJ53G74kV.jpg'
        },
        {
            name: '黎明，太阳雨',
            artist: '阿城',
            url: '/asset/music/黎明，太阳雨.flac',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R500x500M000002p2nJ53G74kV.jpg'
        },
        {
            name: '领主',
            artist: '阿城',
            url: '/asset/music/领主.flac',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R500x500M000002p2nJ53G74kV.jpg'
        },
        {
            name: '水没',
            artist: '阿城',
            url: '/asset/music/水没.flac',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R500x500M000002p2nJ53G74kV.jpg'
        },
        {
            name: '异世界海岸',
            artist: '阿城',
            url: '/asset/music/异世界海岸.flac',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R500x500M000002p2nJ53G74kV.jpg'
        },
        
    ]
});

ap.on('loadstart', () => {
    let audioSrc = ap.audio.src;
    try {
        document.getElementById('randBg').remove();
    } catch (error) {
        console.log("Hello, Castle!");
    }
    songName = audioSrc.substring(audioSrc.lastIndexOf('/'), audioSrc.lastIndexOf('.'));
    var randBg = document.createElement('style');
    randBg.id = 'randBg';
    randBg.innerText = '.background{background:url(/asset/image/background' + songName + '.jpg) no-repeat;background-size:cover;background-position:center 0;content:"";width:100%;height:100%;top:0;left:0;z-index:-1;position:fixed;opacity:0;}';
    document.body.appendChild(randBg);
});

window.onload = () => {
    var playerFixed = document.querySelector(".aplayer.aplayer-fixed");
    var playerBody = document.querySelector(".aplayer-body");
    playerFixed.style.background = "#ffffff00";
    playerFixed.style.top = 0;
    playerFixed.style.left = "initial";
    playerFixed.style.bottom = "initial";
    playerBody.style.top = 0;
    playerBody.style.left = "initial";
    playerBody.style.bottom = "initial";
    document.querySelector(".player").style.visibility = "initial";
}

var backgrounds = ['雨之城', '孤独', '你给予我的晴天', '孤岛城市的传说', '入侵者', '黎明，太阳雨', '领主', '水没', '异世界海岸'];
var bgImgs = new Array();
for (i=0; i<backgrounds.length; i++) {  
    bgImgs[i] = new Image()  
    bgImgs[i].src = '/asset/image/background/' + backgrounds[i] + '.jpg';
}

function viewChild(linkNode) {
    if (linkNode.className == "child-link click") {
        linkNode.className = "child-link";
        document.getElementById(linkNode.getAttribute("lid")).className = "child-page part";
        document.getElementById("hello").className = "child-page view";
        return;
    }
    document.querySelectorAll(".child-link").forEach((item, index) => {
        item.className = "child-link";
    });
    linkNode.className = "child-link click";
    document.getElementById("hello").className = "child-page";
    document.querySelectorAll(".child-page.part").forEach((item, index) => {
        item.className = "child-page part";
    });
    document.getElementById(linkNode.getAttribute("lid")).className = "child-page part view";
}

function viewOption(linkNode) {
    if (linkNode.className == "viewopt unfolder") {
        linkNode.className = "viewopt folder";
        linkNode.title = "收起";
        document.querySelector("footer").className = "unfold";
        document.querySelector(".container").className = "container unfold";
        return;
    }
    linkNode.className = "viewopt unfolder";
    linkNode.title = "展开";
    document.querySelector("footer").className = null;
    document.querySelector(".container").className = "container";
}
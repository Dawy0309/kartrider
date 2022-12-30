$(window).load(function () {
    var vList = ['./assets/img/2022_KR_Solo.mp4', './assets/img/2022_KR_SP.mp4', './assets/img/2022_KR_Team.mp4'];
    var vLen = vList.length;
    var curr = 0;
    var myVideo = document.getElementById("kr_video");
    myVideo.onended = function () {
        myVideo.src = vList[curr];
        myVideo.load();
        myVideo.play();
        curr++;
        if (curr >= vList.length) {
            curr = 0;
        }
    };
})
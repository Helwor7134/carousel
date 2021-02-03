var images = new Array();
images[0] = "https://p.pstatp.com/origin/1379f000097e30ed5e52e";
images[1] = "https://img.imgdb.cn/item/5f379d9514195aa594f853f2.jpg";
images[2] = "https://p.pstatp.com/origin/1379f000097e30ed5e52e";
images[3] = "https://img.imgdb.cn/item/5f379d9514195aa594f853f2.jpg";

function setImg(n){
    
    setOP(false);
    setTimeout("set("+n+")","300");
    setTimeout("setOP(true)","300");
}

function set(n){
    var img = document.getElementById('img');
    img.src = images[n];
}

function setOP(b){
    var box = document.getElementsByClassName('box');
    if(b){
        box[0].style.opacity = "1";
        box[0].style.transform = "translateX(0%)";
        
    } else {
        box[0].style.opacity = "0";
        box[0].style.transform = "translateX(20%)";
    }
}
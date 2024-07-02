var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
var square = document.getElementById("square");
var circle = document.getElementById("circle");
var triangle =document.getElementById("triangle");
var star = document.getElementById("star");
var text = document.getElementById("text");
var eraser = document.getElementById("eraser");
var fill = document.getElementById("fill");
var pencil = document.getElementById("pencil");
var pen = document.getElementById("pen");
var slash = document.getElementById("slash");
var lastevent; 
var isMouseDown = false;
var btncolor=document.getElementById("selected");
var create=document.getElementById("color");
var color=window.getComputedStyle(document.querySelector(".selected")).backgroundColor;

canvas.addEventListener("mousedown", function (e) {
    lastevent = e;
    isMouseDown = true;
    ChangeColor();
});


canvas.addEventListener("mousemove", function (e) {
    if (isMouseDown) {
        context.beginPath();
        context.moveTo(lastevent.offsetX, lastevent.offsetY);
        context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = color;
        context.fillStyle=color;
        context.stroke();
        lastevent = e;
    }
});

canvas.addEventListener("mouseup", function () {
    isMouseDown = false;
});


function ChangeColor() {
    btncolor.style.backgroundColor=create.value;
     color=window.getComputedStyle(document.querySelector(".selected")).backgroundColor;
}




document.getElementById("delete__button").addEventListener("click", function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
});


document.getElementById("download__button").addEventListener("click", function () {
    var downloadLink = document.createElement("a");
    downloadLink.href = canvas.toDataURL();
    downloadLink.download = "canvasas.png";
    downloadLink.target = "_blank";
    downloadLink.click();
});
(function newFact() {
    var facts = ['Deniz', 'Armut', 'Elma','Kalp', 'Kedi', 'Araba','Deniz Feneri', 'Futbol Topu', 'Çikolata','Su Şisesi', 'Çatal', 'Kaşık','Dondurma', 'Soda Şisesi', 'İnternet Modem','Bilgisayar', 'Telefon', 'Yastık','Dambıl', 'Sandalye', 'Kapı','Klavye', 'Monitör', 'Uydu','Gitar',
         'Köpek', 'Kulaklık','Çanta', 'Anahtar', 'Dolap','Yatak', 'Sigara',
          'Tişört','Cips', 'Ağaç', 'Trambolin','Ay', 'Güneş', 'Çakmak','Buzdolabı',
           'Çamaşır Makinesi', 'Para','Kuş', 'Şapka', 'Ayakkabı','Havlu', 'Motor', 'Kitap','Masa', 'Göz', 'Kulak'];
    var randomFact = Math.floor(Math.random() * facts.length);
    document.getElementById('random__text').innerHTML = facts[randomFact];
    
    yaziyi__degistir.onclick=function(){
        var randomFact = Math.floor(Math.random() * facts.length);
        random__text.innerHTML=facts[randomFact];
    }
    })();

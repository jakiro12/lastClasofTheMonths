const carrusel=document.querySelector('.container')
const allImg=document.querySelectorAll('img')
let firstPosition=0

const nextImage=()=>{
    firstPosition++
    if(firstPosition > allImg.length -1 ){
        firstPosition = 0
    }
carrusel.style.transform=`translateX(${-firstPosition * 400}px)`

}
setInterval(nextImage,3000)
var sliderimg1=document.querySelector('.slider-images');
var images=['IMG2.jpg','img1.jpg','IMG3.jpg'];
var i=0;
function prev(){
   if(i<=0)i=images.length;
   i--;
  return setImg();
   } 
    
function next(){
    if(i>=images.length-1)
      i=1; 
        i++;
        return setImg();
}

function setImg(){
    return sliderimg1.setAttribute('src','images/' + images[i]);
}
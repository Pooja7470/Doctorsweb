
var a=document.querySelector("#a")
var gallery =document.querySelector(".gallery")
a.addEventListener("click",function(){
    
})


gsap.from(".bg h1",{
    y:100,
    color:"red",
    opacity:0.5,
    duration:2,
    scrollTrigger:{
        trigger:".bg",
        scroll: ".main",
        // markers:true,
        start: "top 90%",
        end:"top 10%",
        // scrub:true
    }

})
gsap.from(".container",{
    opacity:0,
    y:100,
    duration:2,
    scale:0,
    stagger:1,
    scrollTrigger:{
        trigger:".container",
        scroll: ".main",
        // markers:true,
        start: "top 100%",
        end:"top 80%",
        scrub:true
    }

})

// gsap.from(".gallery h1",{
//     x:-100,
//     color:"red",
//     opacity:1,
//     duration:0.5,
//     stagger:1,
//     scrollTrigger:{
//         trigger:".gallery h1",
//         scroll: ".main",
//         // markers:true,
//         start: "top 40%",
//         end:"top 10%",
//         scrub:true
//     }

// })

gsap.from(".gallery img",{
    y:100,
    scale:0,
    delay:2,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:".gallery",
        scroll: ".main",
        // markers:true,    
        start: "top 40%",
        end:"top 10%",
        scrub:true
    }
});



var bg = document.querySelector('.bg')
var gotoOur = document.querySelector("#gotoOur")
gotoOur.addEventListener("click",(event)=>{
    bg.scrollIntoView()
})


function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    if (menuItems.style.display === "block") {
      menuItems.style.display = "none";
    } else {
      menuItems.style.display = "block";
    }
  }


//   const images = [
//     "galle6.jpg",
//     "galle2.jpg",
//     "galle3.jpg",
//     // Add more image filenames here
//   ];
  
//   let currentImageIndex = 0;
//   const clickableImage = document.getElementById("clickable-image");
  
//   function changeImage() {
//     currentImageIndex = (currentImageIndex + 1) % images.length;
//     const newImage = images[currentImageIndex];
//     clickableImage.src = newImage;
//   }
  


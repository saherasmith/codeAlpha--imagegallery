const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

        currentIndex = index;

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.style.display = "none";

});

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= galleryImages.length){
        currentIndex = 0;
    }

    lightboxImg.src = galleryImages[currentIndex].src;

});

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = galleryImages.length - 1;
    }

    lightboxImg.src = galleryImages[currentIndex].src;

});

function filterImages(category){

    const images = document.querySelectorAll(".image");

    images.forEach(image=>{

        if(category === "all"){

            image.style.display = "block";

        }

        else if(image.classList.contains(category)){

            image.style.display = "block";

        }

        else{

            image.style.display = "none";

        }

    });

}
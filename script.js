const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevbtn = document.querySelector('.prev');
const nextbtn = document.querySelector('.next');

let currentIndex = 0;

function showImage(index){
    lightbox.style.display = 'flex';
    lightboxImg.src = galleryImages[index].src;
    currentIndex=index;
}
// open in box when img clicked
galleryImages.forEach((img,index) =>{
    img.addEventListener('click',()=>{
        showImage(index);
    });
});
//close btn
closeBtn.addEventListener('click',()=>{
    lightbox.style.display = 'none';
});
// close when clicking outside
lightbox.addEventListener('click',(e)=>{
    if(e.target==lightboxImg){
        lightbox.style.display = 'none'
    }
});
// arrows
prevbtn.addEventListener('click',()=>{
    currentIndex = (currentIndex -1 + galleryImages.length)% galleryImages.length;
    showImage(currentIndex);
})
nextbtn.addEventListener('click',()=>{
    currentIndex = (currentIndex +1)% galleryImages.length;
    showImage(currentIndex);
})
// Keyboard navigation
document.addEventListener('keydown', (e) => {
  const isOpen = lightbox.style.display === 'flex';
  if (!isOpen) return; // only works when lightbox is open

  if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentIndex);
  } else if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    showImage(currentIndex);
  } else if (e.key === 'Escape') {
    lightbox.style.display = 'none';
  }
});
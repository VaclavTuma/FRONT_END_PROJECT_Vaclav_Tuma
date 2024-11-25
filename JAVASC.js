let pom,pom2,pom3,pom4 = 0;

document.addEventListener('DOMContentLoaded',function(){
    const faqContainer = document.querySelector('.faq-content');

    pom  = 1;
    pom2 = 1;
    pom3 = 1;
    pom4 = 1;
    faqContainer.addEventListener('click',function(e){
        const groupHeader = e.target.closest('.faq-group-header');
        if(!groupHeader){
            return;
        }
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // ICON 
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');


        // visibility of text under 
        groupBody.classList.toggle('open');

        // close others 
        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => {
            if(otherGroup !== group){
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });  
    });
});


// fetch geojson data
const fetch_data = async() =>{
    const url = "republic.geojson"
    const response = await fetch(url)
    const data = await response.json()

    init_map(data)
};

const init_map = (data) =>{
    let map2 = L.map('map2',{
        minZoom: -3,
        zoomSnap: 0.1
    }); 
    
    let geojson = L.geoJSON(data,{

    }).addTo(map2);
    // coordinates and zoom level
    let osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom: 19,
        attribution:"© OpenStreetMap"
    }).addTo(map2);

    L.marker([50.082865,14.435198]).addTo(map2)
    .bindPopup('Railway station Praha hl.n.')
    .openPopup();

    map2.fitBounds(geojson.getBounds())
    map2.setZoom(6.74);
}
fetch_data();



// MOBILE MENU
document.addEventListener('DOMContentLoaded',() =>{
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click',() =>{
        mobileMenu.classList.toggle('active')
    });
});




// SLIDESHOW
let slideIndex = 1;

// NEXT AND PREVIOUS BUTTONS
function plusSlides(n, slideShowID) {
  slideIndex +=n;
  showSlides(slideIndex,slideShowID);
}

// CONTROLS
function currentSlide(n,slideShowID) {
    slideIndex = n;
    showSlides(slideIndex,slideShowID);
}

function showSlides(n, slideShowID) {
    let i;
    let slides = document.getElementById(slideShowID).getElementsByClassName("mySlides");
    let dots = document.getElementById(slideShowID).getElementsByClassName("dot");

    if(slideShowID == "slideshow1" && pom == 1){
        document.getElementById("coverImage1").classList.add("hidden");
        pom = 0;
    }
    if(slideShowID == "slideshow2" && pom2 == 1){
        document.getElementById("coverImage2").classList.add("hidden");
        pom2 = 0;
    }
    if(slideShowID == "slideshow3" && pom3 == 1){
        document.getElementById("coverImage3").classList.add("hidden");
        pom3 = 0;
    }
    if(slideShowID == "slideshow4" && pom4 == 1){
        document.getElementById("coverImage4").classList.add("hidden");
        pom4 = 0;
    }
    
    

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


function openModal(image) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = image.src; // getting path of the clicked image
}
  
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
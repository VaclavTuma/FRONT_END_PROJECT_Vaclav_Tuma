document.addEventListener('DOMContentLoaded',function(){
    const faqContainer = document.querySelector('.faq-content');

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
        }); //
    });
});

// MOBILE MENU
document.addEventListener('DOMContentLoaded',() =>{
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click',() =>{
        mobileMenu.classList.toggle('active')
    });
});
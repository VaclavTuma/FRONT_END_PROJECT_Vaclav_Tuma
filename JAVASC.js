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

        otherGroups.forEach((otherGroups), function() {
            if(otherGroups != group){

            }
        });
    });
});
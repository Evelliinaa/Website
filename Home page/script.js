document.addEventListener('DOMContentLoaded', function() {
   
    const productLink = document.querySelector('a[href="#products"]');

    const productSection = document.getElementById('products');

    productLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        productSection.scrollIntoView({ behavior: 'smooth' });
    });
});

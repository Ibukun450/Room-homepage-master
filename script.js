const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const firstSection = document.getElementById('first-section');

const imgArray = [
    'images/desktop-image-hero-1.jpg',
    'images/desktop-image-hero-2.jpg',
    'images/desktop-image-hero-3.jpg'
];
let currentImageIndex = 0;

function updateBackgroundImage() {
    firstSection.style.backgroundImage = `url("${imgArray[currentImageIndex]}")`;
}

img1.addEventListener('click', function () {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = imgArray.length - 1; // Loop back to the last image
    }
    updateBackgroundImage();

   
});

img2.addEventListener('click', function () {
    if (currentImageIndex < imgArray.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0; // Loop back to the first image
    }
    updateBackgroundImage();
    
    if (firstSection.style.backgroundImage.includes('desktop-image-hero-2.jpg')) {
        document.getElementById('change').innerHTML = 'We are available all across the globe';

        document.getElementById('changeP').innerHTML = 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business.        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our         store locator. Any questions? Don\'t hesitate to contact us today.';
    } else if (firstSection.style.backgroundImage.includes('desktop-image-hero-3.jpg')) {
        document.getElementById('change').innerHTML = 'Manufactured with the best materials';

        document.getElementById('changeP').innerHTML = 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology         to ensure that every product is made as perfect and as consistent as possible. With three decades of       experience in this industry, we understand what customers want for their home and office.';
    } else {
        document.getElementById('change').innerHTML = 'Discover innovative ways to decorate';

        document.getElementById('changeP').innerHTML = 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.';
    }
});
  
updateBackgroundImage();

if (firstSection.style.backgroundImage.includes('desktop-image-hero-2.jpg')) {
    document.getElementById('change').innerHTML = 'Testing';
}

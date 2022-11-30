const mobileMenuHamIcon = document.querySelector('.container__menuMobile');
const mobileMenu = document.querySelector('.mobile-menu');
const carIcon = document.querySelector('.nav__car');
const productDetailCart = document.querySelector('.product-detail');

mobileMenuHamIcon.addEventListener('click', toggleMobileMenu);
carIcon.addEventListener('click', toggleCartDetail);

function toggleMobileMenu() {
    const isCartDetailClosed = productDetailCart.classList.contains('inactive')

    if(!isCartDetailClosed) {
        productDetailCart.classList.add('inactive');
    } 

    mobileMenu.classList.toggle('inactive');
    console.log('se puede');
}

function toggleCartDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } 

    productDetailCart.classList.toggle('inactive');
    console.log('se puede');
}
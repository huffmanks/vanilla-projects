// Mobile Menu
const menuIcon = document.querySelector('.menu-icon')
const navMenu = document.querySelector('.nav-menu')
const navMenuBackdrop = document.querySelector('.nav-menu-backdrop')
const closeIcon = document.querySelector('.close-icon')

// Navcart
const navCart = document.querySelector('.nav-cart .cart-icon')
const basketModal = document.querySelector('.basket-modal')
const cartEmpty = document.querySelector('#cart-empty')
const checkoutButton = document.querySelector('#btn-checkout')

// Slider Modal
const sliderModal = document.querySelector('#slider-modal')
const sliderModalClose = document.querySelector('.slider-modal .close')
const sliderModalBackdrop = document.querySelector('.slider-modal-backdrop')

// Slider images
const sliderMainImage = document.querySelector('#slider-main-image')
const sliderMainThumbs = document.querySelectorAll('#slider-main .slider-thumb img')
const mainThumb1 = document.querySelector('#main-thumb-1')
const mainThumb2 = document.querySelector('#main-thumb-2')
const mainThumb3 = document.querySelector('#main-thumb-3')
const mainThumb4 = document.querySelector('#main-thumb-4')

// Modal images
const modalMainImage = document.querySelector('#modal-main-image')
const sliderModalThumbs = document.querySelectorAll('#slider-modal .slider-thumb img')
const modalThumb1 = document.querySelector('#modal-thumb-1')
const modalThumb2 = document.querySelector('#modal-thumb-2')
const modalThumb3 = document.querySelector('#modal-thumb-3')
const modalThumb4 = document.querySelector('#modal-thumb-4')

// Prev Next
const prevButton = document.querySelector('.prev-icon')
const nextButton = document.querySelector('.next-icon')

// Add to cart
const minusButton = document.querySelector('.btn-minus')
const quantityButton = document.querySelector('.btn-quantity')
const plusButton = document.querySelector('.btn-plus')
const addToCartButton = document.querySelector('#btn-add-to-cart')

// Menu
menuIcon.addEventListener('click', () => {
    navMenu.style.display = 'block'
    navMenuBackdrop.style.display = 'block'
    closeIcon.style.display = 'block'
    basketModal.style.display = 'none'
})

closeIcon.addEventListener('click', () => {
    navMenu.style.display = 'none'
    navMenuBackdrop.style.display = 'none'
    closeIcon.style.display = 'none'
})

navMenuBackdrop.addEventListener('click', () => {
    navMenu.style.display = 'none'
    navMenuBackdrop.style.display = 'none'
    closeIcon.style.display = 'none'
})

// Cart
navCart.addEventListener('click', () => {
    if (basketModal.style.display === 'block') {
        basketModal.style.display = 'none'
    } else {
        basketModal.style.display = 'block'
    }
})

// Slider main
sliderMainThumbs.forEach((sliderMainThumb) => {
    sliderMainThumb.addEventListener('click', (e) => {
        if (e.target === mainThumb1) {
            sliderMainImage.src = './images/image-product-1.jpg'
            mainThumb1.classList.add('active')
            mainThumb2.classList.remove('active')
            mainThumb3.classList.remove('active')
            mainThumb4.classList.remove('active')
        }
        if (e.target === mainThumb2) {
            sliderMainImage.src = './images/image-product-2.jpg'
            mainThumb1.classList.remove('active')
            mainThumb2.classList.add('active')
            mainThumb3.classList.remove('active')
            mainThumb4.classList.remove('active')
        }
        if (e.target === mainThumb3) {
            sliderMainImage.src = './images/image-product-3.jpg'
            mainThumb1.classList.remove('active')
            mainThumb2.classList.remove('active')
            mainThumb3.classList.add('active')
            mainThumb4.classList.remove('active')
        }
        if (e.target === mainThumb4) {
            sliderMainImage.src = './images/image-product-4.jpg'
            mainThumb1.classList.remove('active')
            mainThumb2.classList.remove('active')
            mainThumb3.classList.remove('active')
            mainThumb4.classList.add('active')
        }
    })
})

// Slider modal
sliderMainImage.addEventListener('click', () => {
    if (sliderModal.style.display !== 'block') {
        sliderModal.style.display = 'block'
        sliderModalBackdrop.style.display = 'block'
        modalMainImage.src = sliderMainImage.src
    }
    if (sliderMainImage.src.includes('images/image-product-1.jpg')) {
        modalThumb1.classList.add('active')
        modalThumb2.classList.remove('active')
        modalThumb3.classList.remove('active')
        modalThumb4.classList.remove('active')
    }
    if (sliderMainImage.src.includes('images/image-product-2.jpg')) {
        modalThumb1.classList.remove('active')
        modalThumb2.classList.add('active')
        modalThumb3.classList.remove('active')
        modalThumb4.classList.remove('active')
    }
    if (sliderMainImage.src.includes('images/image-product-3.jpg')) {
        modalThumb1.classList.remove('active')
        modalThumb2.classList.remove('active')
        modalThumb3.classList.add('active')
        modalThumb4.classList.remove('active')
    }
    if (sliderMainImage.src.includes('images/image-product-4.jpg')) {
        modalThumb1.classList.remove('active')
        modalThumb2.classList.remove('active')
        modalThumb3.classList.remove('active')
        modalThumb4.classList.add('active')
    }
})

sliderModalThumbs.forEach((sliderModalThumb) => {
    sliderModalThumb.addEventListener('click', (e) => {
        if (e.target === modalThumb1) {
            modalMainImage.src = './images/image-product-1.jpg'
            modalThumb1.classList.add('active')
            modalThumb2.classList.remove('active')
            modalThumb3.classList.remove('active')
            modalThumb4.classList.remove('active')
        }
        if (e.target === modalThumb2) {
            modalMainImage.src = './images/image-product-2.jpg'
            modalThumb1.classList.remove('active')
            modalThumb2.classList.add('active')
            modalThumb3.classList.remove('active')
            modalThumb4.classList.remove('active')
        }
        if (e.target === modalThumb3) {
            modalMainImage.src = './images/image-product-3.jpg'
            modalThumb1.classList.remove('active')
            modalThumb2.classList.remove('active')
            modalThumb3.classList.add('active')
            modalThumb4.classList.remove('active')
        }
        if (e.target === modalThumb4) {
            modalMainImage.src = './images/image-product-4.jpg'
            modalThumb1.classList.remove('active')
            modalThumb2.classList.remove('active')
            modalThumb3.classList.remove('active')
            modalThumb4.classList.add('active')
        }
    })
})

sliderModalBackdrop.addEventListener('click', () => {
    sliderModal.style.display = 'none'
    sliderModalBackdrop.style.display = 'none'
})

sliderModalClose.addEventListener('click', () => {
    sliderModal.style.display = 'none'
    sliderModalBackdrop.style.display = 'none'
})

prevButton.addEventListener('click', () => {
    console.log(modalMainImage.src)
    if (modalMainImage.src.includes('images/image-product-1.jpg')) {
        modalMainImage.src = './images/image-product-4.jpg'
        modalThumb1.classList.remove('active')
        modalThumb4.classList.add('active')
    } else if (modalMainImage.src.includes('images/image-product-2.jpg')) {
        modalMainImage.src = './images/image-product-1.jpg'
        modalThumb2.classList.remove('active')
        modalThumb1.classList.add('active')
    } else if (modalMainImage.src.includes('images/image-product-3.jpg')) {
        modalMainImage.src = './images/image-product-2.jpg'
        modalThumb3.classList.remove('active')
        modalThumb2.classList.add('active')
    } else {
        modalMainImage.src = './images/image-product-3.jpg'
        modalThumb4.classList.remove('active')
        modalThumb3.classList.add('active')
    }
})

nextButton.addEventListener('click', () => {
    console.log(modalMainImage.src)
    if (modalMainImage.src.includes('images/image-product-1.jpg')) {
        modalMainImage.src = './images/image-product-2.jpg'
        modalThumb1.classList.remove('active')
        modalThumb2.classList.add('active')
    } else if (modalMainImage.src.includes('images/image-product-2.jpg')) {
        modalMainImage.src = './images/image-product-3.jpg'
        modalThumb2.classList.remove('active')
        modalThumb3.classList.add('active')
    } else if (modalMainImage.src.includes('images/image-product-3.jpg')) {
        modalMainImage.src = './images/image-product-4.jpg'
        modalThumb3.classList.remove('active')
        modalThumb4.classList.add('active')
    } else {
        modalMainImage.src = './images/image-product-1.jpg'
        modalThumb4.classList.remove('active')
        modalThumb1.classList.add('active')
    }
})

minusButton.addEventListener('click', () => {
    if (parseInt(quantityButton.innerHTML) === 0) {
        return
    } else {
        quantityButton.innerHTML = parseInt(quantityButton.innerHTML) - 1
    }
})

plusButton.addEventListener('click', () => {
    quantityButton.innerHTML = parseInt(quantityButton.innerHTML) + 1
})

addToCartButton.addEventListener('click', () => {
    const quantity = parseInt(quantityButton.innerHTML)
    if (quantity === 0) {
        return
    }
    const newItem = document.createElement('div')
    newItem.classList.add('basket-item')
    newItem.innerHTML = `
        <img class="basket-thumb" src="./images/image-product-1-thumbnail.jpg" alt="Product 1 thumb">
        <div class="item-description">
        <div>Fall Limited Edition Sneakers</div>
        <div>
            <span>$125.00</span>
            <span>x${quantity}</span>
            <span>$${quantity * 125}.00</span>
        </div>
        </div>
        <img class="delete-icon" src="./images/icon-delete.svg" alt="Delete icon">
    `
    checkoutButton.parentNode.insertBefore(newItem, checkoutButton)
    cartEmpty.style.display = 'none'
    checkoutButton.style.display = 'block'
    basketModal.style.display = 'block'
})

window.addEventListener('click', (e) => {
    console.log(e.target)
})

window.addEventListener('resize', () => {
    if (document.body.clientWidth > 875) {
        navMenu.style.display = 'flex'
    }
    if (document.body.clientWidth <= 875) {
        navMenu.style.display = 'none'
    }
})

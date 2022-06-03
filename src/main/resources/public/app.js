const variants = document.querySelectorAll(".product__variants > *");
const product = document.querySelector(".product");
let currentVariant = document.querySelector(".product__variants > .active");

variants.forEach((variant) => {
    variant.addEventListener('click', (e) => {
        let oldClass = null;
        if (currentVariant) {
            currentVariant.classList.remove('active');
            oldClass = currentVariant.className;
        }
        const newClass = e.target.className;

        if (oldClass) {
            product.classList.replace(oldClass, newClass);
        } else {
            product.classList.add(newClass);
        }

        currentVariant = document.querySelector(`.product__variants > .${e.target.className}`);
        currentVariant.classList.add('active')
    });
})

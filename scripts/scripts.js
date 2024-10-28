// scroll down to a section by button click//
function showTicketSection() {
    showTicketSectionByClick('main-section');
}
// success screen
function successConfirmation() {

    hideElementById('header-section');
    hideElementById('main-section');
    hideElementById('footer-section');
    showElementById('success-section');

}
// again home section from success section
function homeSection() {
    showElementById('header-section');
    showElementById('main-section');
    showElementById('footer-section');
    showTicketSectionByClick('main-section');
    hideElementById('success-section');
}
// set bg tickets

const myNodelist = document.querySelectorAll("#seat");
for (let i = 0; i < myNodelist.length; i++) {
    const nodeItems = myNodelist[i];
    nodeItems.addEventListener('click', function () {
        // background button by click.....
        nodeItems.classList.toggle('bg-green-400');

        // calculate total price......
        const currentSeat = document.getElementById('current-seat');
        const valueText = currentSeat.innerText;
        const value = parseInt(valueText);
        if (nodeItems) {
            const updateSeat = value + 1;
            currentSeat.innerText = updateSeat;
            const totalPrice = updateSeat * 550;
            const currentPrice = document.getElementById('current-price');
            currentPrice.innerText = totalPrice;

            // Apply coupon code......
            const applyCoupon = document.getElementById('apply-coupon');
            applyCoupon.addEventListener('click', function () {
                const getCoupon = document.getElementById('coupon').value;
                const couponCode = 'NEW15';
                const coupleCouponCode = 'Couple20';
                if (getCoupon === couponCode && value >= 3) {

                    const discount = totalPrice * 15 / 100;
                    const discountedPrice = totalPrice - discount;
                    const grandValue = document.getElementById('grand-value');
                    grandValue.innerText = discountedPrice;
                }

                if (getCoupon === coupleCouponCode && value >= 3) {
                    const discount = totalPrice * 20 / 100;
                    const discountedPrice = totalPrice - discount;
                    const grandValue = document.getElementById('grand-value');
                    grandValue.innerText = discountedPrice;
                }
            })
        }
    })
}

// Tickets left.......

for (let i = 0; i < myNodelist.length; i++) {
    const nodeItems = myNodelist[i];

    nodeItems.addEventListener('click', function () {
        const currentSeatLeft = document.getElementById('seat-left');
        const valueText = currentSeatLeft.innerText;
        const value = parseInt(valueText);
        if (nodeItems) {
            const updateSeat = value - 1;
            currentSeatLeft.innerText = updateSeat;
        }
    })
};





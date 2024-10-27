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
}
// set bg tickets
const seats = document.querySelectorAll('#seat');
seats.forEach(seat => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('bg-green-400');

        const currentSeat = document.getElementById('current-seat');
        const valueText = currentSeat.innerText;
        const value = parseInt(valueText);
        if (seat) {
            const updateSeat = value + 1;
            currentSeat.innerText = updateSeat;
            const totalPrice = updateSeat * 550;
            const currentPrice = document.getElementById('current-price');
            currentPrice.innerText = totalPrice;

            // Apply coupon code
            const applyCoupon = document.getElementById('apply-coupon');
            applyCoupon.addEventListener('click', function () {
                const getCoupon = document.getElementById('coupon').value;
                const couponCode = 'NEW15';
                const coupleCouponCode = 'Couple20';
                if (getCoupon === couponCode) {
                    const discount = totalPrice * 15 / 100;
                    const discountedPrice = totalPrice - discount;
                    const grandValue = document.getElementById('grand-value');
                    grandValue.innerText = discountedPrice;
                }
                if (getCoupon === coupleCouponCode) {
                    const discount = totalPrice * 20 / 100;
                    const discountedPrice = totalPrice - discount;
                    const grandValue = document.getElementById('grand-value');
                    grandValue.innerText = discountedPrice;
                }

            })

        }

    });
});


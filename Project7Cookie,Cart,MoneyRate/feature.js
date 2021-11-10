export function exchange(rate, productPrice) {
    if (rate == '฿') {
        return productPrice + '฿';
    }
    else if (rate == '$') {
        let price = productPrice / 30;
        return '$' + price;
    }
}
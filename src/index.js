module.exports = function toReadable(number) {
    let result_ones
    let result_tens
    let result_hundred
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let hundred = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',];
    if (number < 20) {
        return ones[number];
    }
    if (number % 10 === 0 && number >= 20 && number < 100) {
        return tens[(number / 10) - 2]
    }

    if (number % 10 !== 0 && number >= 20 && number < 100) {
        result_tens = Math.floor(number / 10)
        result_ones = number % 10;
        return tens[result_tens - 2] + ' ' + ones[result_ones];
    }

    if (number >= 100 && number % 100 === 0) {
        result_ones = number / 100;
        return ones[result_ones] + ' ' + 'hundred';
    }

    if (number >= 100 && (number % 100) <= 19) {
        result_hundred = Math.floor(number / 100);
        result_ones = number % 100
        return hundred[result_hundred - 1] + ' ' + 'hundred' + ' ' + ones[result_ones];
    }

    if (number >= 100 && number % 100 > 19 && number % 10 !== 0) {
        result_hundred = Math.floor(number / 100);
        result_tens = Math.floor((number % 100) / 10)
        result_ones = number % 10
        return hundred[result_hundred - 1] + ' ' + 'hundred' + ' ' + tens[result_tens - 2] + ' ' + ones[result_ones];
    }

    if (number >= 100 && number % 100 > 19 && number % 10 === 0) {
        result_hundred = Math.floor(number / 100);
        result_tens = Math.floor((number % 100) / 10)
        result_ones = number % 10
        return hundred[result_hundred - 1] + ' ' + 'hundred' + ' ' + tens[result_tens - 2];
    }

}

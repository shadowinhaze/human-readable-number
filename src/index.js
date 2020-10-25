module.exports = function toReadable(number) { 
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tys = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number === 0) return 'zero';
    n = ('000' + number).substr(-3).match(/^(\d{1})(\d{2})$/);
    if (!n) return;
	let str = '';
    str += (n[1] != 0) ? (ones[Number(n[1])] || tys[n[1][0]] + ' ' + ones[n[1][1]]) + ' hundred ' : '';
    str += (n[2] != 0) ? (ones[Number(n[2])] || tys[n[2][0]] + ' ' + ones[n[2][1]]) : '';
    return str.replace(/\s?$/,'');
}

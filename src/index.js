module.exports = function toReadable(number) {
    if (!number) return 'zero';
    let result, n = String(number), s = +(n[1] + n[2]);
    let num = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven',
        'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let ten = ['','hundred','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    if (n < 20) {
        return num[n];
    } else if (n < 100) {
        return (ten[n[0]] + ' ' + num[n[1]]).trim();
    } else if (n > 99 && s <= 19) {
        return (num[n[0]] + ' ' + ten[1] + ' ' + num[s]).trim();
    } else if (n > 99 && s > 19) {
        return (num[n[0]] + ' ' + ten[1] + ' ' + ten[n[1]] + ' ' + num[n[2]]).trim();
    }    
}

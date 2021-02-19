module.exports = function toReadable(number) {
    if (!number) return 'zero';
    let result, n = String(number), s = +(n[1] + n[2]);
    let num = ['','one','two','three','four','five','six','seven','eight','nine','ten',
            'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen',
            'eighteen','nineteen'];
    let num10 = ['','hundred','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
		if (number < 20) {
			result = num[number];
		} else if (number < 100) {
			result = num10[n[0]] + ' ' + num[n[1]];
		} else if (number > 99 && s <= 19) {
			result = num[n[0]] + ' ' + num10[1] + ' ' + num[s];
		} else if (number > 99 && s > 19) {
			result = num[n[0]] + ' ' + num10[1] + ' ' + num10[n[1]] + ' ' + num[n[2]];
		}	
    return result.trim();    
}

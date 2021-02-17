module.exports = function toReadable (number) {
    let result;
    if (number == 0) return ('zero');
    let ArrNum = String(number).split('');
    let num = ['','one','two','three','four','five','six','seven','eight','nine',
               'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen',
               'eighteen','nineteen'];
    let num10 = ['','hundred','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    let i0 = ArrNum[0];
    let i1 = ArrNum[1];
    let i2 = ArrNum[2];
    let i3 = +(ArrNum[1] + ArrNum[2]);

    if (number < 20) {
        result = num[number];
    } else if (number < 100) {
        result = num10[i0] + ' ' + num[i1];
    } else if (number > 99 && i3 <= 19) {
        result = num[i0] + ' ' + num10[1] + ' ' + num[i3];
    } else if (number > 99 && i3 > 19) {
        result = num[i0] + ' ' + num10[1] + ' ' + num10[i1] + ' ' + num[i2];
    }


    let x = result.length - 1;
    if (result[x] == ' ') {
        result = result.split('');
        result.splice(x, 1);
        result = result.join('');
    }

return result;
}

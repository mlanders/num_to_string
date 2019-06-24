import { oneNum, twoNum, threeNum, fourNum, fiveNum, sixNum } from './util';

export const checkNum = num => {
    const length = num.length;
    const single = num.slice(-1);
    const tens = num.slice(-2);
    const hundreds = num.slice(-3, -2);
    const thousand = num.slice(-4, -3);
    const tenThousand = num.slice(-5, -3);
    const hundredThousand = num.slice(-6, -3);

    switch (length) {
        case 1: // Single
            return oneNum(single);
        case 2: // Ten
            return twoNum(tens);
        case 3: // Hundred
            return threeNum(tens, hundreds);
        case 4: // Thousaand
            return fourNum(tens, hundreds, thousand);
        case 5: // Ten Thousand
            return fiveNum(tens, hundreds, tenThousand);
        case 6: // Hundred Thousand
            return sixNum(tens, hundreds, hundredThousand);
        default:
            return 'No input';
    }
};

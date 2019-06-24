import { single, double, tens } from './nums';

/**
 *
 * @param {number} num
 */
export const oneNum = num => {
    return single[num];
};

/**
 *
 * @param {number} num
 */
export const twoNum = num => {
    if (Number(num[0]) !== 1) {
        return `${tens[num[0]]} ${single[num[1]]}`;
    } else {
        return double[num];
    }
};

/**
 *
 * @param {number} tens
 * @param {number} hundreds
 */
export const threeNum = (tens, hundreds) => {
    return `${oneNum(hundreds)} Hundred ${twoNum(tens)}`;
};

/**
 *
 * @param {number} tens
 * @param {number} hundreds
 * @param {number} thousand
 */
export const fourNum = (tens, hundreds, thousand) => {
    return `${oneNum(thousand[0])} Thousand ${threeNum(tens, hundreds)}`;
};

/**
 *
 * @param {number} tens
 * @param {number} hundreds
 * @param {number} tenThousand
 */
export const fiveNum = (tens, hundreds, tenThousand) => {
    return `${twoNum(tenThousand)} Thousand ${threeNum(tens, hundreds)}`;
};

/**
 *
 * @param {number} tens
 * @param {number} hundreds
 * @param {number} hundredThousand
 */
export const sixNum = (tens, hundreds, hundredThousand) => {
    const tens2 = hundredThousand.slice(-2);
    const hundreds2 = hundredThousand.slice(-3, -2);
    return `${threeNum(tens2, hundreds2)} Thousand ${threeNum(tens, hundreds)}`;
};

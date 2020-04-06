// import { single, double, tens } from './nums';
const single = {
	0: "Zero",
	1: "One",
	2: "Two",
	3: "Three",
	4: "Four",
	5: "Five",
	6: "Six",
	7: "Seven",
	8: "Eight",
	9: "Nine",
};

const double = {
	10: "Ten",
	11: "Eleven",
	12: "Twelve",
	13: "Thirteen",
	14: "Fourteen",
	15: "Fifteen",
	16: "Sixteen",
	17: "Seventeen",
	18: "Eighteen",
	19: "Nineteen",
};

const tens = {
	2: "Twenty",
	3: "Thirty",
	4: "Fourty",
	5: "Fifty",
	6: "Sixty",
	7: "Seventy",
	8: "Eighty",
	9: "Ninety",
};

/**
 *
 * @param {number} num
 */
const oneNum = (num) => {
	return single[num];
};

/**
 *
 * @param {number} num
 */
const twoNum = (num) => {
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
const threeNum = (tens, hundreds) => {
	return `${oneNum(hundreds)} Hundred ${twoNum(tens)}`;
};

/**
 *
 * @param {number} tens
 * @param {number} hundreds
 * @param {number} thousand
 */
const fourNum = (tens, hundreds, thousand) => {
	return `${oneNum(thousand[0])} Thousand ${threeNum(tens, hundreds)}`;
};

/**
 *
 * @param {number} tens
 * @param {number} hundreds
 * @param {number} tenThousand
 */
const fiveNum = (tens, hundreds, tenThousand) => {
	return `${twoNum(tenThousand)} Thousand ${threeNum(tens, hundreds)}`;
};

/**
 *
 * @param {number} tens
 * @param {number} hundreds
 * @param {number} hundredThousand
 */
const sixNum = (tens, hundreds, hundredThousand) => {
	const tens2 = hundredThousand.slice(-2);
	const hundreds2 = hundredThousand.slice(-3, -2);
	return `${threeNum(tens2, hundreds2)} Thousand ${threeNum(tens, hundreds)}`;
};

/**
 *
 * @param {number} num
 * @returns String version of the number
 */
export const checkNum = (num) => {
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
			return "";
	}
};

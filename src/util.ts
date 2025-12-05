const single: Record<number, string> = {
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

const double: Record<number, string> = {
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

const tens: Record<number, string> = {
	2: "Twenty",
	3: "Thirty",
	4: "Forty",
	5: "Fifty",
	6: "Sixty",
	7: "Seventy",
	8: "Eighty",
	9: "Ninety",
};

const oneNum = (num: string): string => {
	return single[Number(num)];
};

const twoNum = (num: string): string => {
	if (Number(num[0]) !== 1) {
		const tensDigit = Number(num[0]);
		const onesDigit = Number(num[1]);
		if (onesDigit === 0) {
			return tens[tensDigit];
		}
		return `${tens[tensDigit]} ${single[onesDigit]}`;
	} else {
		return double[Number(num)];
	}
};

const threeNum = (tens: string, hundreds: string): string => {
	const hundredsDigit = Number(hundreds);
	const tensNum = Number(tens);

	if (hundredsDigit === 0) {
		return twoNum(tens);
	}

	if (tensNum === 0) {
		return `${oneNum(hundreds)} Hundred`;
	}

	return `${oneNum(hundreds)} Hundred ${twoNum(tens)}`;
};

const fourNum = (tens: string, hundreds: string, thousand: string): string => {
	const thousandDigit = Number(thousand);
	const tensNum = Number(tens);
	const hundredsDigit = Number(hundreds);

	if (thousandDigit === 0) {
		return threeNum(tens, hundreds);
	}

	if (hundredsDigit === 0 && tensNum === 0) {
		return `${oneNum(thousand)} Thousand`;
	}

	return `${oneNum(thousand)} Thousand ${threeNum(tens, hundreds)}`;
};

const fiveNum = (tens: string, hundreds: string, tenThousand: string): string => {
	const tensNum = Number(tens);
	const hundredsDigit = Number(hundreds);
	const tenThousandNum = Number(tenThousand);

	if (tenThousandNum === 0) {
		return threeNum(tens, hundreds);
	}

	if (hundredsDigit === 0 && tensNum === 0) {
		return `${twoNum(tenThousand)} Thousand`;
	}

	return `${twoNum(tenThousand)} Thousand ${threeNum(tens, hundreds)}`;
};

const sixNum = (tens: string, hundreds: string, hundredThousand: string): string => {
	const tens2 = hundredThousand.slice(-2);
	const hundreds2 = hundredThousand.slice(-3, -2);
	const tensNum = Number(tens);
	const hundredsDigit = Number(hundreds);

	if (hundredsDigit === 0 && tensNum === 0) {
		return `${threeNum(tens2, hundreds2)} Thousand`;
	}

	return `${threeNum(tens2, hundreds2)} Thousand ${threeNum(tens, hundreds)}`;
};

export const checkNum = (num: string): string => {
	if (!num || num === "") {
		return "";
	}

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
		case 4: // Thousand
			return fourNum(tens, hundreds, thousand);
		case 5: // Ten Thousand
			return fiveNum(tens, hundreds, tenThousand);
		case 6: // Hundred Thousand
			return sixNum(tens, hundreds, hundredThousand);
		default:
			return "";
	}
};

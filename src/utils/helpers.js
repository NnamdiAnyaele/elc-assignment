import { format } from "date-fns";

export const getDateXDaysFromNow = (numOfDays, date = new Date()) => {
	const daysAgo = new Date(date.getTime());

	daysAgo.setDate(date.getDate() + numOfDays);

	return daysAgo;
};

export const getDateXDaysAgo = (numOfDays, date = new Date()) => {
	const daysAgo = new Date(date.getTime());

	daysAgo.setDate(date.getDate() - numOfDays);

	return daysAgo;
};

export const dateFormatter = (str) => {
	if (str) {
		try {
			const dateReverse = str.split(" ")[0];
			const dateArray = dateReverse.split("-");
			return format(
				new Date(dateArray[0], Number(dateArray[1]) - 1, dateArray[2]),
				"do MMM yyyy"
			);
		} catch (error) {
			return "";
		}
	}
	return "";
};

export const newDateFormatter = (str, formatType = "yyyy-MM-d") => {
	if (str) {
		return format(new Date(str), formatType);
	}
	return "";
};

export const numberToKFormatter = (num) => {
	if (num) {
		return num > 999 ? `${(num / 1000).toFixed(1)}k` : num;
	}
	return "";
}

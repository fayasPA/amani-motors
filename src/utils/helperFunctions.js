export const getNumberToCurrencyText = (num) => {
    const myObj = {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }
    let currencyText = num;
    try {
        currencyText = num.toLocaleString("en-IN", myObj);
    } catch (error) {
        currencyText = num
    }

    return currencyText;
};
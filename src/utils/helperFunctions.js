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

export const capitalizeFirstLetters = (string) => {
    if (!string) return string; // Handle empty string
    return string
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
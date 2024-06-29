export const getNumberToCurrencyText = (num, fractionalDigit=null) => {
    const myObj = {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: fractionalDigit ?? 0
    }
    let currencyText = num;
    try {
        currencyText = num.toLocaleString("en-IN", myObj);
    } catch (error) {
        console.log(error)
        currencyText = num
    }

    return currencyText;
};

export const capitalizeFirstLetters = (string) => {
    if (!string) return string; // Handle empty string
    return string
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

export const capitalizeWord = (string) => {
    if (!string) return string; // Handle empty string
    return string.toUpperCase()
}

function numberConvertToPersian(number: number | string) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let convertedNumber = "";
  const numberString = number.toString();

  for (let i = 0; i < numberString.length; i++) {
    const digit = numberString[i];
    const englishDigitIndex = englishDigits.indexOf(digit);
    const persianDigit =
      englishDigitIndex !== -1 ? persianDigits[englishDigitIndex] : digit;
    convertedNumber += persianDigit;
  }

  return convertedNumber;
}

export default numberConvertToPersian;

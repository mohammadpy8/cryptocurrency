import BTC from "../assets/images/btcc.avif";
import TTR from "../assets/images/te.jpeg";
import ETE from "../assets/images/123.webp";
import USA from "../assets/images/preview.png";
import UK from "../assets/images/master.jpg";
import FRA from "../assets/images/aaaaaa.jpg";
import DEFA from "../assets/images/bitcoin-price.jpg";

const randomImages = (text: string) => {
  switch (text) {
    case "بیت کوین":
      return BTC;
    case "تتر":
      return TTR;
    case "اتریوم":
      return ETE;
    case "آمریکا":
      return USA;
    case "انگلیس":
      return UK;
    case "فرانسه":
      return FRA;
    default:
      return DEFA;
  }
};

export default randomImages;

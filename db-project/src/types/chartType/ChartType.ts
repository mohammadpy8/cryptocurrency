interface PriceData {
    // ممکن است نوع داده عددی یا رشته باشد، بسته به اطلاعات ورودی
    // به عنوان مثال اگر مطمئن هستید که همیشه عدد است، می‌توانید از number استفاده کنید
    value: number;
    timestamp: number; // یا ممکن است از نوع Date باشد
  }
  
  export interface chartType {
    prices: PriceData[];
    market_caps: PriceData[];
    total_volumes: PriceData[];
  }
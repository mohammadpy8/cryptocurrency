import { FC, useEffect, useState } from "react";

const ScrollIndicator: FC = () => {
  const [scrollTop, setScrollTop] = useState<number | null>(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="wrapper">
      <div className="progressbar">
        <div
          className="progressbarMain"
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollIndicator;

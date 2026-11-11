import { useEffect, useState } from "react";
import { Button } from "./ScrollTop.styled";
import { FaArrowCircleUp } from "react-icons/fa";

export const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisible, {passive: true});

    return () => {
       window.addEventListener("scroll", toggleVisible);
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  
  return (
    <Button 
      onClick={scrollToTop}
      $visible={visible}>
      <FaArrowCircleUp/>
    </Button>
  );
};

export default ScrollTop;
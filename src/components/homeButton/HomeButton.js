import { useStyles } from "./homeButton_styles";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { useEffect, useRef, useState } from "react";

export const HomeButton = () => {
  const styles = useStyles();

  const [iconIsVisible, setIconVisible] = useState(false);

  const buttonRef = useRef();
  const handlerScroll = () => {
    let height = document.documentElement.scrollTop;

    height = document.documentElement.scrollTop;
    if (height > 300) {
      setIconVisible(true);
    }
    if (height <= 300) {
      setIconVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handlerScroll);
  }, []);

  return (
    <nav ref={buttonRef} className={styles.homeButton}>
      {iconIsVisible && (
        <a className={styles.homeButton_link} href="#header">
          <ArrowCircleUpIcon
            className={styles.homeButton_icon}
            fontSize="large"
          />
        </a>
      )}
    </nav>
  );
};

import { useStyles } from "./slider_styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Slider = () => {
  const styles = useStyles();

  return (
    <div className={styles.carousel}>
      <Carousel autoPlay="true" interval="3000" infiniteLoop="true">
        <div>
          <img
            className={styles.carousel_img}
            src="https://picsum.photos/1500/501"
            alt=""
          />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img
            className={styles.carousel_img}
            src="https://picsum.photos/1500/502"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.carousel_img}
            src="https://picsum.photos/1500/500"
            alt=""
          />
        </div>
        <div>
          <img
            className={styles.carousel_img}
            src="https://picsum.photos/1500/499"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

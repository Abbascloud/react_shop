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
            src="https://picsum.photos/1600/500"
            alt=""
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            className={styles.carousel_img}
            src="https://picsum.photos/1600/500"
            alt=""
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            className={styles.carousel_img}
            src="https://picsum.photos/1600/500"
            alt=""
          />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img
            className={styles.carousel_img}
            src="https://picsum.photos/1600/500"
            alt=""
          />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img
            className={styles.carousel_img}
            src="https://picsum.photos/1600/500"
            alt=""
          />
          <p className="legend">Legend 5</p>
        </div>
      </Carousel>
    </div>
  );
};

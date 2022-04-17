import { useStyles } from "./goodsAndPrices_styles";
import lips from "../../img/serveses/lips.jpg";
import eyes from "../../img/serveses/eyes.jpg";
import brows from "../../img/serveses/brows.jpg";

export const GoodsAndPrices = () => {
  const styles = useStyles();

  return (
    <main id="goodsAndPrices" className={styles.goodsAndPrices}>
      <h2 className={styles.goodsAndPrices_header}>Услуги и цены</h2>
      <div className={styles.goodsAndPrices_productCard}>
        <img
          className={styles.goodsAndPrices_img}
          src={brows}
          alt="ПУДРОВЫЕ БРОВИ"
        />
        <h4 className={styles.goodsAndPrices_title}>ПУДРОВЫЕ БРОВИ</h4>
        <p className={styles.goodsAndPrices_price}>2500 руб.</p>
      </div>
      <div className={styles.goodsAndPrices_productCard}>
        <img
          className={styles.goodsAndPrices_img}
          src={eyes}
          alt="МЕЖРЕСНИЧКА"
        />
        <h4 className={styles.goodsAndPrices_title}>МЕЖРЕСНИЧКА</h4>
        <p className={styles.goodsAndPrices_price}>2000 руб.</p>
      </div>
      <div className={styles.goodsAndPrices_productCard}>
        <img
          className={styles.goodsAndPrices_img}
          src={lips}
          alt="ПЕРМАНЕНТ ГУБ"
        />
        <h4 className={styles.goodsAndPrices_title}>ПЕРМАНЕНТ ГУБ</h4>
        <p className={styles.goodsAndPrices_price}>3000 руб.</p>
      </div>
    </main>
  );
};

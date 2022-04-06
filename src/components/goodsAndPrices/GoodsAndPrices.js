import { useStyles } from "./goodsAndPrices_styles";

export const GoodsAndPrices = () => {
  const styles = useStyles();

  return (
    <main className={styles.goodsAndPrices}>
      <h2 className={styles.goodsAndPrices_header}>Услуги и цены</h2>
      <div className={styles.goodsAndPrices_productCard}>
        <img
          className={styles.goodsAndPrices_img}
          src="https://picsum.photos/400/400"
          alt=""
        />
        <h4 className={styles.goodsAndPrices_title}>БРОВИ</h4>
        <p className={styles.goodsAndPrices_price}>5000 руб.</p>
      </div>
      <div className={styles.goodsAndPrices_productCard}>
        <img
          className={styles.goodsAndPrices_img}
          src="https://picsum.photos/400/400"
          alt=""
        />
        <h4 className={styles.goodsAndPrices_title}>МЕЖРЕСНИЧНИК</h4>
        <p className={styles.goodsAndPrices_price}>5000 руб.</p>
      </div>
      <div className={styles.goodsAndPrices_productCard}>
        <img
          className={styles.goodsAndPrices_img}
          src="https://picsum.photos/400/400"
          alt=""
        />
        <h4 className={styles.goodsAndPrices_title}>ГУБЫ</h4>
        <p className={styles.goodsAndPrices_price}>5000 руб.</p>
      </div>
    </main>
  );
};

import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Enjoy 0% interest on <br className="sm:block hidden" />Educational gold loans 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Take advantage of 0% interest rates on educational gold loans with rates up to ₹2000 per gram. Secure the funds you need for your education without any interest burden.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
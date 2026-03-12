// import Image from "next/image";

// import styles from "../styles/Hero.module.css";

// export default function Hero() {
//   return (
//     <section className={`${styles.hero} text-pink-900`}>
//       <h1 className={styles.title}>Welcome to Jimmy & Lizzy’s Wedding</h1>

//       <div className={styles.heroImageWrapper}>
//         <Image
//           src="/images/jim-liz-spain.jpg" // put your image in public/images/
//           alt="Jimmy and Lizzy"
//           width={600}
//           height={400}
//           className={styles.heroImage}
//         />
//       </div>

//       <p className={styles.paragraph} text-pink-900>
//         We are <span className={styles.highlight}>so excited</span> to celebrate
//         our special day with you. Explore the site to find details about the
//         ceremony, reception, travel information, and how to RSVP.
//       </p>
//     </section>
//   );
// }
import Image from "next/image";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.hero} text-pink-900`}>
      <h1 className={styles.title}>Welcome to Jimmy & Lizzy’s Wedding</h1>

      <div className={styles.heroImageWrapper}>
        <Image
          src="/images/jim-liz-spain.jpg"
          alt="Jimmy and Lizzy"
          width={600}
          height={400}
          className={`${styles.heroImage} shadow-2xl`}
        />
      </div>

      <p className={`${styles.paragraph} text-pink-900`}>
        We are <span className={styles.highlight}>so excited</span> to celebrate
        our special day with you. Explore the site to find details about the
        ceremony, reception, travel information, and how to RSVP.
      </p>
    </section>
  );
}

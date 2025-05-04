import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const sheetUrls = {
    subJunior:
      "https://docs.google.com/spreadsheets/d/1zgKZEKJqLrLxiszzQmfDmCCEtlPsKWor/edit?gid=362060432#gid=362060432",
    junior:
      "https://docs.google.com/spreadsheets/d/1zgKZEKJqLrLxiszzQmfDmCCEtlPsKWor/edit?gid=896362892#gid=896362892",
    senior:
      "https://docs.google.com/spreadsheets/d/1zgKZEKJqLrLxiszzQmfDmCCEtlPsKWor/edit?gid=201039707#gid=201039707",
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>ASISC</h1>
          <h3 className={styles.subTitle}>
            FR. GEORGE HESS MEMORIAL ZONAL QUIZ COMPETITION 2025{" "}
          </h3>
          <div className={styles.tributeSection}>
            <div className={styles.tributeImage}>
              <Image
                src="/father.jpg"
                alt="Fr. George Hess S.J."
                width={200}
                height={200}
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className={styles.tributeText}>
              Fr. George A. Hess (1919 &ndash; 2013), founder of ASISC, left New
              Jersey to serve in India&apos;s forests. A Jesuit priest educated
              at Georgetown, Woodstock and Stanford, he led Loyola and De Nobili
              schools, built key campus blocks and branch schools, and
              championed ICSE recognition. Always humble, he brightened
              countless lives.
            </p>
          </div>
          <div className={styles.eventDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>📍</span>
              <span>Dhanbad</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>📅</span>
              <span>May 10, 2025</span>
            </div>
          </div>
        </div>

        <div className={styles.scoreButtons}>
          <a
            href={sheetUrls.junior}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.scoreButton} ${styles.juniorButton}`}
          >
            <span className={styles.buttonTitle}>Junior</span>
            <span className={styles.buttonSubtext}>View Scores</span>
          </a>

          <a
            href={sheetUrls.subJunior}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.scoreButton} ${styles.subJuniorButton}`}
          >
            <span className={styles.buttonTitle}>Sub Junior</span>
            <span className={styles.buttonSubtext}>View Scores</span>
          </a>

          <a
            href={sheetUrls.senior}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.scoreButton} ${styles.seniorButton}`}
          >
            <span className={styles.buttonTitle}>Senior</span>
            <span className={styles.buttonSubtext}>View Scores</span>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} ASISC Fr. George Hess Memorial Quiz
        </p>
      </footer>
    </div>
  );
}

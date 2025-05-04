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
          <h1 className={styles.title}>ASISC Fr. George Hess Quiz 2025</h1>
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
              His mission in life was to reach out to the children of remote
              India and spread the light of education. He gave up the high
              comforts of USA to serve in the forests of Chotanagpur so that the
              darkness of backwardness is banished with the torch of knowledge.
              What a great teacher our Rev. Fr. George Hess was! It&apos;s his
              accomplishment that we have been properly raised. I consider it to
              be my lifetime privilege to have paid a standing ovation to the
              Greatest Teacher of our lives at his last post who now rests in
              eternal peace in the heavens.
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

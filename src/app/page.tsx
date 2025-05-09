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
      <main>
        <div>
          <div className={styles.eventInfo}>
            <h1 className={styles.title}>ASISC</h1>
            <h2 className={styles.subTitle}>
              FR. GEORGE HESS MEMORIAL ZONAL QUIZ COMPETITION 2025<br></br>
              De Nobili School, Koradih - 10<sup>th</sup> May, 2025<br></br>
            </h2>

            <Image
              src="/father.jpg"
              alt="Fr. George Hess S.J."
              width={300}
              height={480}
              priority
              className={styles.tributeImage}
            />
            <p className={styles.tributeText}>
              Fr. George A. Hess (1919 &ndash; 2013), founder of ASISC, left New
              Jersey to serve in India&apos;s forests. A Jesuit priest educated
              at Georgetown, Woodstock and Stanford, he led Loyola and De Nobili
              schools, built key campus blocks and branch schools, and
              championed ICSE recognition. Always humble, he brightened
              countless lives.
            </p>
            <div className={styles.quickButtons}>
              <a
                href={sheetUrls.subJunior}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.quickButton} ${styles.subJuniorQuick}`}
              >
                Sub Junior
              </a>
              <a
                href={sheetUrls.junior}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.quickButton} ${styles.juniorQuick}`}
              >
                Junior
              </a>
              <a
                href={sheetUrls.senior}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.quickButton} ${styles.seniorQuick}`}
              >
                Senior
              </a>
            </div>
          </div>

          <div className={styles.appNote}>
            <p>📱 For better experience, download Google Sheets app:</p>
            <div className={styles.storeLinks}>
              <a
                href="https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.sheets"
                target="_blank"
                rel="noopener noreferrer"
              >
                Play Store
              </a>
              <span>•</span>
              <a
                href="https://apps.apple.com/app/google-sheets/id842849113"
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store
              </a>
            </div>
          </div>
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

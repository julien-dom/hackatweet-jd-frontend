import styles from '../styles/Home.module.css';
import Image from 'next/image';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.leftPart}>
          <img 
            src="/logo-twitter.png"
            alt="Logo"
            width={75}
            height={61.125}
          />
          <div className={styles.userContainer}>
            <div className={styles.logoContainer}>
              <img 
                src="/twitter-egg.png"
                alt="Egg"
                className={styles.img}
              />
              <div className={styles.usernameBox}>
                <p className={styles.name}>John</p>
                <p className={styles.username}>@JohnCena</p>
              </div>
            </div>
            <div className={styles.logoutBtn}>Logout</div>
          </div>
        </div>
        <div className={styles.middlePart}>

        </div>
        <div className={styles.rightPart}>

        </div>
      </main>
    </div>
  );
}

export default Home;

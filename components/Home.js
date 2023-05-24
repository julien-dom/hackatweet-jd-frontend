import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Tweet from './Tweet';
import LastTweets from './LastTweets';
import Trends from './Trends';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.leftPart}>
          <div className={styles.logoBox}>
          <img 
            src="/logo-twitter.png"
            alt="Logo"
            width={75}
            height={61.125}
            className={styles.logo}
          />
          </div>
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
          <div className={styles.tweetContainer}>
            <Tweet />
            <LastTweets />
          </div>
        </div>

        <div className={styles.rightPart}>
            <Trends />
        </div>
      </main>
    </div>
  );
}

export default Home;

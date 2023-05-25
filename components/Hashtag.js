import styles from '../styles/Hashtag.module.css';
import Image from 'next/image';
import Tweet from './LastTweets';
import LastTweets from './Tweet';
import Trends from './Trends';

function Hashtag() {
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
              <h3 className={styles.h3}>Hashtag</h3>
              <input className= {styles.tweetHashInput} placeholder="What's Up?" type="text"></input>
          </div>
          <LastTweets />

        </div>

        <div className={styles.rightPart}>
            <Trends />
        </div>
      </main>
    </div>
  );
}

export default Hashtag;

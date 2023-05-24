import styles from '../styles/LastTweets.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
function LastTweets() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.userContainer}>
            <img 
              src="/twitter-egg.png"
              alt="Egg"
              className={styles.img}
            />
            <p className={styles.name}>John</p>
            <p className={styles.username}>@JohnCena</p>
            <p className={styles.point}>.</p>
            <p className={styles.username}>a few seconds ago</p>
        </div>
        <p className= {styles.tweet}>YOU CAN'T SEE ME ! #cenation</p>
        <div className= {styles.iconContainer}>
            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
            <span className={styles.heartCount}>0</span>
        </div>
      </main>
    </div>
  );
}

export default LastTweets;
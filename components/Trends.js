import styles from '../styles/Trends.module.css';

function Trends() {
  return (
    <div>
      <main className={styles.main}>
        <h3 className={styles.h3}>Trends</h3>
        <div className={styles.hashtagsContainer}>
            <div className={styles.hashtagsBox}>
                <p className={styles.hashtag}>#hackatweet</p>
                <p className={styles.hashCount}>2 Tweets</p>
            </div>
            <div className={styles.hashtagsBox}>
                <p className={styles.hashtag}>#hackatweet</p>
                <p className={styles.hashCount}>2 Tweets</p>
            </div>
            <div className={styles.hashtagsBox}>
                <p className={styles.hashtag}>#hackatweet</p>
                <p className={styles.hashCount}>2 Tweets</p>
            </div>
        </div>
      </main>
    </div>
  );
}

export default Trends;
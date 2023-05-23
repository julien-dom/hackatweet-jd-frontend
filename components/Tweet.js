import styles from '../styles/Tweet.module.css';

function Tweet() {
  return (
    <div>
      <main className={styles.main}>
        <h3 className={styles.h3}>Home</h3>
        <input className= {styles.tweetInput} placeholder="What's Up?" type="text"></input>
        <div className={styles.tweetBtnContainer}>
            <p className={styles.tweetCount}>0/280</p>
            <div className={styles.tweetBtn}>Tweet</div>
        </div>
      </main>
    </div>
  );
}

export default Tweet;
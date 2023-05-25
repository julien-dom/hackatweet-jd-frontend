import styles from '../styles/LastTweets.module.css';
import Tweet from './Tweet';

function LastTweets() {
  return (
    <div>
      <main className={styles.main}>
        <Tweet />
      </main>
    </div>
  );
}

export default LastTweets;
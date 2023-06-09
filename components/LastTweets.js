import styles from '../styles/LastTweets.module.css';
import Tweet from './Tweet';
import { useSelector, useEffect } from 'react-redux';

function LastTweets() {

  const allTweets = useSelector((state) => state.tweets.value.allTweets);
  console.log('allTweets', allTweets)


  const tweets = allTweets?.map((data, i) => {
    console.log('tweets mapdata', data)
    return <Tweet key={i} {...data} />;
  });[]

  return (
    <div>
      <main className={styles.main}>
        {tweets}
      </main>
    </div>
  );
}

export default LastTweets;
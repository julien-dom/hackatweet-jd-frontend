import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets';
import Trends from './Trends';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/users';
import { loadTweet } from '../reducers/tweets';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function Home() {
  const user = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const router = useRouter();
  const [tweet, setTweet] = useState('')

  const handleLogout = () => {
    dispatch(logout())
    router.push('/');
  }

  //USEEFFECT Qui charge tous les tweets

  useEffect(() => {
    if (!user.token){
      return
    }

    fetch(`http://localhost:3000/tweets/all/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('all tweets data', data)
        dispatch(loadTweet(data))
        });
  }, [tweet]);

  const handleTweet = () => {
    if (tweet.length > 280){
      alert('Tweet too long')

    }
    console.log('tweeted', tweet )
    fetch('http://localhost:3000/tweets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: user.token, tweet: tweet }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.result) {
        console.log('tweeted ok', data.tweet);
        setTweet('')
      }
    });
  }


  return (
    <div>
      <main className={styles.main}>
        <div className={styles.leftPart}>
          <div className={styles.logoBox}>
          <Link href="/"><img 
          
            src="/logo-twitter.png"
            alt="Logo"
            width={75}
            height={61.125}
            className={styles.logo}
          /></Link>
          </div>
          <div className={styles.userContainer}>
            <div className={styles.logoContainer}>
              <img 
                src="/twitter-egg.png"
                alt="Egg"
                className={styles.img}
              />
              <div className={styles.usernameBox}>
                <p className={styles.name}>{user.firstname}</p>
                <p className={styles.username}>@{user.username}</p>
              </div>
            </div>
            <div className={styles.logoutBtn} onClick={()=> handleLogout()}>Logout</div>
          </div>
        </div>

        <div className={styles.middlePart}>
          <div className={styles.tweetContainer}>
              <h3 className={styles.h3}>Home</h3>
              <input className= {styles.tweetInput} placeholder="What's Up?" type="text" onChange={(e) => setTweet(e.target.value)} value={tweet}></input>
              <div className={styles.tweetBtnContainer}>
                <p className={styles.tweetCount}>{tweet.length}/280</p>
                <div className={styles.tweetBtn} onClick={()=> handleTweet()}>Tweet</div>
              </div>
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

export default Home;

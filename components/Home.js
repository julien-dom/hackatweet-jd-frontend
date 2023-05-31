import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Tweet from './LastTweets';
import LastTweets from './Tweet';
import Trends from './Trends';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/users';
import { useRouter } from 'next/router';

function Home() {
  const user = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout())
    router.push('/index');
  }

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
              <input className= {styles.tweetInput} placeholder="What's Up?" type="text"></input>
              <div className={styles.tweetBtnContainer}>
                <p className={styles.tweetCount}>0/280</p>
                <div className={styles.tweetBtn}>Tweet</div>
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

import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function Tweet() {
  const user = useSelector((state) => state.users.value);

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.userContainer}>
            <img 
              src="/twitter-egg.png"
              alt="Egg"
              className={styles.img}
            />
            <p className={styles.name}>{user.firstname}</p>
            <p className={styles.username}>@{user.username}</p>
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

export default Tweet;
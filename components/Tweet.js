import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function Tweet(props) {
  const user = useSelector((state) => state.users.value);
  const [isLiked, setIsLiked] = useState(false);

  console.log('props is', props)

  // conversion heure
  const moment = require('moment');
  require('moment/locale/fr'); // Si vous souhaitez obtenir la sortie en français
  
  const date = moment(props.date);
  console.log("date is", date)
  const now = moment();
  
  const duration = moment.duration(now.diff(date));
  const hoursAgo = duration.asHours();
  const daysAgo = duration.asDays();
  
  if (hoursAgo < 1) {
    const minutesAgo = Math.round(duration.asMinutes());
    console.log(minutesAgo + ' minutes ago');
  } else if (hoursAgo < 24) {
    console.log(Math.round(hoursAgo) + ' hours ago');
  } else {
    console.log(Math.round(daysAgo) + ' days ago');
  }

  const formattedContent = props.content.split(' ').map((word, i) => {
    if (word.startsWith('#') && word.length > 1) {
      return <span key={i} style={{ fontWeight: 'bold' }}><Link href={`/hashtag/${word.slice(1)}`}>{word}</Link> </span>;
    }
    return word + ' ';
  });

  // Fonction Clic heart
  const clickHeart = () => {
    console.log('coeur clic')
    fetch('http://localhost:3000/tweets/like', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: user.token, tweetId: props._id }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.result) {
        console.log('like add');
      }
    });
    setIsLiked(!isLiked)
  }
  

  // delete 
  const deleteTweet = () => {
    fetch('http://localhost:3000/tweets', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: user.token, tweetId: props._id }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.result) {
        console.log('tweet deleted');
      }
    });
  }
  
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.userContainer}>
            <img 
              src="/twitter-egg.png"
              alt="Egg"
              className={styles.img}
            />
            <p className={styles.name}>{props.author.firstname}</p>
            <p className={styles.username}>@{props.author.username}</p>
            <p className={styles.point}>.</p>
            <p className={styles.username}>{hoursAgo < 1 ? (
              <p className={styles.username}>{Math.round(duration.asMinutes())} minutes ago</p>
              ) : hoursAgo < 24 ? (
                <p className={styles.username}>{Math.round(hoursAgo)} hours ago</p>
              ) : (
                <p className={styles.username}>{Math.round(daysAgo)} days ago</p>
              )}</p>
        </div>
        <p className= {styles.tweet}>{formattedContent}</p>
        <div className= {styles.iconContainer}>
            <FontAwesomeIcon icon={faHeart} onClick={()=>clickHeart()} color={isLiked ? 'red' : 'white'}/>
            <span className={styles.heartCount}>{props.likes.length}</span>
            {props.author.username === user.username && <FontAwesomeIcon icon={faTrashCan} className={styles.icon} onClick={()=>deleteTweet()}/>}
        </div>
      </main>
    </div>
  );
}

export default Tweet;
import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Tweet(props) {
  const user = useSelector((state) => state.users.value);
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
        <p className= {styles.tweet}>{props.content}</p>
        <div className= {styles.iconContainer}>
            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
            <span className={styles.heartCount}>0</span>
        </div>
      </main>
    </div>
  );
}

export default Tweet;
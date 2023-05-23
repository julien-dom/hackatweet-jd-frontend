import styles from '../styles/SignUp.module.css';
import Image from 'next/image';
import { useState } from 'react';

function SignUp() {
    const [firstname, setFirstName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');


  return (
    <div>
      <main className={styles.main}>
      <Image 
            src="/logo-twitter-alt.png"
            alt="Logo"
            width={75}
            height={61.125}
        />

        <h3 className={styles.title}>
          Connect to Hackatweet
        </h3>
        <input className={styles.input} placeholder="firstname" type="text" name="firstname" onChange={(e) => setFirstName(e.target.value)} value={firstname}/>
        <input className={styles.input} placeholder="username" type="text" name="username" onChange={(e) => setUserName(e.target.value)} value={username}/>
        <input className={styles.input} placeholder="password" type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
        <div className={styles.btnSignIn}>Sign up</div>

      </main>
    </div>
  );
}

export default SignUp;

import styles from '../styles/Login.module.css';
import Image from 'next/image';

function Login() {
  return (
    <div className={styles.main}>
      <div className={styles.leftPart}>
        <Image 
          src="/logo-twitter.png"
          alt="Logo"
          width={300}
          height={244.5}
        />
      </div>
      <div className={styles.rightPart}>
        <Image 
            src="/logo-twitter.png"
            alt="Logo"
            width={75}
            height={61.125}
        />
        <h1 className={styles.h1}>See what's happening</h1>
        <h2 className={styles.h2}>Join Hackatweet today.</h2>
        <div className={styles.btnSignUp}>Sign up</div>
        <p className={styles.textAccount}>Already have an account?</p>        
        <div className={styles.btnSignIn}>Sign in</div>
      </div>
    </div>
  );
}

export default Login;

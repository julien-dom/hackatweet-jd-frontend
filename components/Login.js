import styles from '../styles/Login.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Modal, ConfigProvider } from 'antd';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Login() {
const [isModalInVisible, setIsModalInVisible] = useState(false);
const [isModalUpVisible, setIsModalUpVisible] = useState(false);

// modal signIn
const showModalSignIn = () => {
    setIsModalInVisible(!isModalInVisible);
  };


// modal signUp
const showModalSignUp = () => {
    setIsModalUpVisible(!isModalUpVisible);
};

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
        <div className={styles.btnSignUp} onClick={showModalSignUp}>Sign up</div>
        <p className={styles.textAccount}>Already have an account?</p>        
        <div className={styles.btnSignIn} onClick={showModalSignIn}>Sign in</div>
      </div>

      {isModalInVisible && <div id="react-modals">
        <Modal getContainer="#react-modals" 
        // className={styles.modal} 
        visible={isModalInVisible} footer={null}  onCancel={showModalSignIn} >
            <SignIn />
        </Modal>
      </div>}

      {isModalUpVisible && <div id="react-modals">
        <Modal getContainer="#react-modals" visible={isModalUpVisible} footer={null} onCancel={showModalSignUp}>
          <SignUp />
        </Modal>
      </div>}

    </div>
  );
}

export default Login;

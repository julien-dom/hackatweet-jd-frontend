import styles from '../styles/SignIn.module.css';
import Image from 'next/image';
import { useState } from 'react';

import useForm from "../hooks/useForm";

const fields = [
  {
    name: "username",
    type: "text",
    placeholder: "username",
  },
  {
    name: "password",
    type: "password",
    placeholder: "password",
  }
];

function SignIn() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = (e) => {console.log(e);}
    // const handleValidation = (values) => Boolean(values.password);
    // const { formData, bind, onSubmit } = useForm({
    //   handleSubmit,
    //   useValidation: true,
    //   handleValidation
    // });


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
        <input className={styles.input} placeholder="username" type="text" name="username" onChange={(e) => setUserName(e.target.value)} value={username}/>
        <input className={styles.input} placeholder="password" type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
        <div className={styles.btnSignIn}>Sign in</div>
        {/* <form onSubmit={onSubmit} className={styles.form}>
        {fields.map((field) => (
          <input key={field.name} {...field} {...bind} className={styles.input} />
        ))}
        <button type="submit" className={styles.btnSignIn}>Sign In</button>
        </form> */}
      </main>
    </div>
  );
}

export default SignIn;

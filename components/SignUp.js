import styles from '../styles/SignUp.module.css';
import Image from 'next/image';
import { useState } from 'react';
import useForm from "../hooks/useForm";

const fields = [
  {
    name: "firstname",
    type: "text",
    placeholder: "firstname",
  },
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

function SignUp() {
    // const [firstname, setFirstName] = useState('');
    // const [username, setUserName] = useState('');
    // const [password, setPassword] = useState('');

    const handleSubmit = (e) => console.log(e);
    const handleValidation = (values) => Boolean(values.password);
    const { formData, bind, onSubmit } = useForm({
      handleSubmit,
      useValidation: true,
      handleValidation
    });

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
        {/* <input className={styles.input} placeholder="firstname" type="text" name="firstname" onChange={(e) => setFirstName(e.target.value)} value={firstname}/>
        <input className={styles.input} placeholder="username" type="text" name="username" onChange={(e) => setUserName(e.target.value)} value={username}/>
        <input className={styles.input} placeholder="password" type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}/> */}
        <form onSubmit={onSubmit} className={styles.form}>
        {fields.map((field) => (
          <input key={field.name} {...field} {...bind} className={styles.input} />
        ))}
        <button type="submit" className={styles.btnSignIn}>Sign Up</button>
        </form>
        {/* <div className={styles.btnSignIn}>Sign up</div> */}

      </main>
    </div>
  );
}

export default SignUp;

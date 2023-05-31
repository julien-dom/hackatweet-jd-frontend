import styles from '../styles/SignUp.module.css';
import Image from 'next/image';
import { useState } from 'react';
import useForm from "../hooks/useForm";
import { useDispatch } from 'react-redux';
import { login } from '../reducers/users';
import { useRouter } from 'next/router';

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
    const dispatch = useDispatch();

    const router = useRouter();
    if (user.token) {
      router.push('/home');
    }
    const handleSubmit = (e) => {
      console.log('clicked', e)
      let firstname = e.firstname
      let username = e.username
      let password = e.password

      fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname, username, password }),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.result) {
          console.log('signup ok', data.token)
          // window.location.href = '/home';
          dispatch(login({firstname: e.firstname, username: e.username, token: data.token}))
        }
      });
  };

    const handleValidation = (values) => Boolean(values.password);
    const { formData, bind, onSubmit } = useForm({
      handleSubmit,
      useValidation: true,
      handleValidation
    });

    // const handleSubmit = () => {
    //   console.log('click');
    //   fetch('http://localhost:3000/users/signup', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ firstname, username, password }),
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //     if (data.result) {
    //       setFirstName('');
    //       setUserName('');
    //       setPassword(''); 
    //     }
    //   });
    // }

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
        {/* <input type="text" className={styles.input} onChange={(e) => setFirstName(e.target.value)} value={firstname} placeholder="Firstname" />
      <input type="text" className={styles.input} onChange={(e) => setUserName(e.target.value)} value={username} placeholder="Username" />
      <input type="password" className={styles.input} onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
      <button className={styles.btnSignIn} onClick={() => handleSubmit()}>Sign up</button> */}
        <form onSubmit={onSubmit} className={styles.form}>
        {fields.map((field) => (
          <input key={field.name} {...field} {...bind} className={styles.input} />
        ))}
        <button type="submit" className={styles.btnSignIn}>Sign Up</button>
        </form> 
        {/* <button className={styles.btnSignIn} onClick={handleSignUpSubmit}>Sign up</button> */}

      </main>
    </div>
  );
}

export default SignUp;

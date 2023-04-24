import React, { useState, useEffect } from 'react'
import styles from '@/styles/Login.module.scss';
import InputBox from '@/components/Utils/InputBox/InputBox';
import Button from '@/components/Utils/Button/Button';
import LinkBlue from '@/components/Utils/LinkBlue/LinkBlue';
import SocialAuth from '@/components/Utils/SocialAuth/SocialAuth';
import { useRouter } from 'next/router';

import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-hot-toast';

function Login() {
  const [input, setInput] = useState({email: "", password: ""});
  const { login, currentUser, resetPassword, googleAuth } = useAuth();
  const { push } = useRouter();

  const handleInputOnChange = (key, value) => {
    setInput({...input, [key]: value})
  }

  const validateEmail = () => {
    let isValid = true;
    const {email, } = input;

    if(email.length == 0 || email == "" || email == " ") {
      toast.error("Email is empty");
      isValid = false;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      toast.error("You have entered an invalid email address!")
      isValid = false;
    }

    return isValid;
  }

  const validatePassword = () => {
    let isValid = true;
    const {password } = input;

    if(password.length == 0 || password == "" || password == " ") {
      toast.error("Email is empty");
      isValid = false;
    }

    return isValid;
  }

  const handleGoogleAuth = async () => {
    try {
      await googleAuth();
    } catch (e) {
      console.log(e);
      toast.error("Login failed!")
    }
  }
  

  const handleLogin = async () => {
    if(validateEmail() && validatePassword()){
      try {
        await login(input.email, input.password);
        push('/dashboard');
        toast.success("Logging you in...")
      } catch(e) {
        console.log(e);
        toast.error("Login failed!")
      }
    }
  }

  const handleResetPassword = () => {
    if(validateEmail()) {
      resetPassword(input.email);
      toast.success("Check your email, we have sent you the reset link!")
    }
  }

  useEffect(() => {
    if(currentUser) {
      console.log(currentUser)
      push('/dashboard');
    }
  });

  return (
      <div className={styles.parent}>
        <div className={styles.banner}>
          Board.
        </div>

        <div className={styles.signin}>
          <div className={styles.signin__box}>
            <div className={styles.signin__content}>
              <p className={styles.signin__heading}>Sign In</p>
              <p className={styles.signin__meta}>Sign in to your account</p>
            </div>

            <div className={styles.signin__social}>
              <SocialAuth icon={"google.svg"} title={"Sign in with Google"} handleAuth={handleGoogleAuth}/>
              <SocialAuth icon={"apple.svg"} title={"Sign in with Apple"} />
            </div>

            <div className={styles.signin__form}>
              <InputBox label={"Email address"} type={"email"} placeholder={"johndoe@gmail.com"} value={input.email} onChange={(e) => {handleInputOnChange('email', e.target.value)}} />
              <InputBox label={"Password"} type={"password"} placeholder={"●●●●●●●●"} value={input.password} onChange={(e) => {handleInputOnChange('password', e.target.value)}}/>

              <LinkBlue onClick={handleResetPassword}>Forgot password?</LinkBlue>

              <br />

              <Button value={"Sign In"} onClick={handleLogin}/>
            </div>

            <div className={styles.signin__register}>Don't have and account? <LinkBlue href="/signup">Register here</LinkBlue></div>
          </div>
        </div>
      </div>
  )
}

export default Login
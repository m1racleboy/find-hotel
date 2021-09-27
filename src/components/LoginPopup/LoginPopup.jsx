import React from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

export default function LoginPopup() {
  return (
    <div className="login-screen__popup">
      <h1 className="login-screen__popup-title">Simple Hotel Check</h1>
      <form className="login-screen__popup-form">
        <MyInput className="input" fontWeight={300} type={'email'} name={'user-email'}>Логин</MyInput>
        <MyInput className="input" fontWeight={300} type={'password'} name={'user-password'}>Пароль</MyInput>
        <MyButton className="button" type={'submit'}>Войти</MyButton>
      </form>
    </div >
  );
}

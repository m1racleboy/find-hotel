import React from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import { useDispatch } from 'react-redux';
import { useInput } from '../../hooks/useInput';
import { changeLoadingStatus, login } from '../../store/rootReducer';

export default function LoginPopup() {
  const email = useInput('', { isEmpty: true, minLength: 14, maxLength: 30, isEmail: true });
  const password = useInput('', { isEmpty: true, minLength: 8, maxLength: 20, isOnlySpace: true });
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(changeLoadingStatus(true));
    dispatch(login({
      email: email.value,
      password: password.value,
    }));
    localStorage.setItem('auth', 'true');
    dispatch(changeLoadingStatus(false));
  };

  return (
    <div className="login-screen__popup">
      <h1 className="login-screen__popup-title">Simple Hotel Check</h1>
      <form className="login-screen__popup-form" onSubmit={loginHandler}>
        <MyInput className="input"
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          fontWeight={300}
          type={'email'}
          name={'user-email'}
          id={'user-email'}>
          Логин
        </MyInput>
        <MyInput
          className="input"
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
          fontWeight={300}
          type={'password'}
          name={'user-password'}
          id={'user-password'}>
          Пароль
        </MyInput>
        <MyButton
          className="button"
          type={'submit'}
          disabled={!email.inputValid || !password.inputValid}>
          Войти
        </MyButton>
      </form>
    </div >
  );
}

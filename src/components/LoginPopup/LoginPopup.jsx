import React from 'react';
import { useDispatch } from 'react-redux';
import { useInput } from '../../hooks/useInput';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import MyError from '../UI/error/MyError';
import { changeLoadingStatus, login } from '../../store/actions/userActions';

const EMAIL_MIN_LENGTH = 10;
const MAX_LENGTH = 30;
const PASSWORD_MIN_LENGTH = 8;

export default function LoginPopup() {
  const email = useInput('', { isEmpty: true, minLength: EMAIL_MIN_LENGTH, maxLength: MAX_LENGTH, isEmail: true });
  const password = useInput('', { isEmpty: true, minLength: PASSWORD_MIN_LENGTH, maxLength: MAX_LENGTH, isPassword: true, isOnlySpace: true });
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
        <MyInput
          className="input"
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          fontWeight={300}
          type={'email'}
          name={'user-email'}
          id={'user-email'}
        >
          Логин
        </MyInput>
        {(email.isDirty && email.isEmpty) && <MyError>Поле логина не может быть пустым</MyError>}
        {(email.isDirty && email.minLengthError) && <MyError>Слишком короткий логин, осталось: {EMAIL_MIN_LENGTH - email.value.length}</MyError>}
        {(email.isDirty && email.maxLengthError) && <MyError>Слишком длинный логин, превышен на: {email.value.length - MAX_LENGTH}</MyError>}
        {(email.isDirty && email.emailError) && <MyError>Некорректный email</MyError>}
        <MyInput
          className="input"
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
          fontWeight={300}
          type={'password'}
          name={'user-password'}
          id={'user-password'}
        >
          Пароль
        </MyInput>
        {(password.isDirty && password.isEmpty) && <MyError>Поле пароля не может быть пустым</MyError>}
        {(password.isDirty && password.passwordError) && <MyError>Поле пароля не может содержать кириллицу</MyError>}
        {(password.isDirty && password.minLengthError) && <MyError>Слишком короткий пароль, осталось: {PASSWORD_MIN_LENGTH - password.value.length}</MyError>}
        {(password.isDirty && password.maxLengthError) && <MyError>Слишком длинный пароль, осталось: {password.value.length - MAX_LENGTH}</MyError>}
        {(password.isDirty && password.spaceError) && <MyError>Поле пароля не может содержать пробелы</MyError>}
        <MyButton
          className="button"
          type={'submit'}
          disabled={!email.inputValid || !password.inputValid}
        >
          Войти
        </MyButton>
      </form>
    </div >
  );
}

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Logo from '../Logo';
import Quote from '../Quote';
import { FETCH_QUOTE } from '../../actions/quote';
import './App.scss';

const App = () => {
  const dispatch = useDispatch(); // <-- this returns a function

  useEffect(() => {
    dispatch({
      type: FETCH_QUOTE,
    });
  }, []);

  return (
    <>
      <Logo />
      <Quote />
    </>
  );
};

export default App;

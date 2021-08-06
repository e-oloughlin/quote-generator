import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Quote from '../Quote';
import Header from '../Header';
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
      <Header />
      <Quote />
    </>
  );
};

export default App;

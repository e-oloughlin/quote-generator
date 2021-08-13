import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Quote from '../Quote';
import Header from '../Header';
import { fetchQuote } from '../../actions/quote';

const App = () => {
  const dispatch = useDispatch(); // <-- this returns a function

  useEffect(() => {
    // start fetching a quote here (dispatching fetchQuote)
    dispatch(fetchQuote());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Quote />
    </>
  );
};

export default App;

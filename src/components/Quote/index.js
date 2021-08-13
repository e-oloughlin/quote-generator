import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Container, Button } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { fetchQuote } from '../../actions/quote';
import './Quote.scss';

const Quote = () => {
  const dispatch = useDispatch(); // <-- this returns a function
  // const [disabled, setDisabled] = useState(false);
  const onButtonClick = () => {
    // start fetching a quote here (dispatching fetchQuote)
    dispatch(fetchQuote());
  };

  const quote = useSelector(state => state.quote.value);
  const loading = useSelector(state => state.appState.loading);

  return (
      <section className="quote-container">
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 1,
              p: 2,
              minWidth: 300,
            }}
          >
            <p className="quote-container__quote">
              <FormatQuoteIcon sx={{ fontSize: 100 }} />
              <span className="quote-container__quote__text">{quote}</span>
            </p>
          </Box>

          <footer className="quote-container__footer">
            <Button
              variant="contained"
              className="quote-container__footer__button"
              size="large"
              color="primary"
              onClick={onButtonClick}
              disabled={loading}
            >
              Fetch Quote
            </Button>
          </footer>
        </Container>
      </section>
  );
};

export default Quote;

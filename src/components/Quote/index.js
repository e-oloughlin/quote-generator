import React, { useState, useEffect } from 'react';
import { Box, Container, Button } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import './Quote.scss';

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);

  const getQuote = async () => {
    setLoading(true);
    const url = 'https://api.quotable.io/random';
    // fetch the quote from the API
    const res = await fetch(url);
    const newQuote = await res.json();
    console.log('newQuote: ', newQuote);
    setQuote(newQuote.content);
    setLoading(false);
  }

  useEffect(() => {
    getQuote();
  }, []);

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
              onClick={getQuote}
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

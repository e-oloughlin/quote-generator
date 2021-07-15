import React from 'react';
import { Box, Container, Typography } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import './Quote.scss';

const Quote = () => {
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
              <p>
                {`Kung Flu`}
              </p>
            </p>
          </Box>
        </Container>
      </section>
  );
};

export default Quote;

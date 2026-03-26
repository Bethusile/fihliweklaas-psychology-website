import { useState } from 'react';
import { Box, Typography, Link as MuiLink, Collapse, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const faqData = [
  {
    question: "When should I see a psychologist?",
    answer: "You might consider seeing a psychologist if you're feeling overwhelmed, struggling with persistent low mood, or simply want a safe space to process life transitions."
  },
  {
    question: "What happens during the first session?",
    answer: "The first session is usually an introductory 'getting to know you' period. We'll discuss what brought you to therapy and your goals for our time together."
  },
  {
    question: "Is therapy confidential?",
    answer: "Yes, confidentiality is a cornerstone of therapy. Everything discussed remains private, with a few legal exceptions regarding safety which we will discuss upfront."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 3, sm: 5, md: 6 },
        bgcolor: '#1A1A1A',
      }}
    >
      <Box sx={{ maxWidth: '700px', mx: 'auto', textAlign: 'center' }}>

        {/* Label */}
        <Typography
          variant="overline"
          sx={{
            display: 'block',
            color: '#86A88B',
            fontWeight: 600,
            letterSpacing: '0.2em',
            mb: 1.5,
            fontSize: '0.7rem',
          }}
        >
          COMMON QUESTIONS
        </Typography>

        {/* Heading */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '1.7rem', md: '2.4rem' },
            fontWeight: 400,
            color: 'white',
            lineHeight: 1.3,
            mb: { xs: 4, md: 5 },
          }}
        >
          Frequently asked questions
        </Typography>

        {/* FAQ Items */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'left', mb: { xs: 4, md: 5 } }}>
          {faqData.map((item, index) => (
            <Box
              key={index}
              sx={{
                border: '1px solid #2A2A2A',
                borderRadius: '16px',
                bgcolor: '#222222',
                overflow: 'hidden',
              }}
            >
              {/* Question Row */}
              <Box
                onClick={() => toggleFAQ(index)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: 3,
                  py: 2.5,
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                  '&:hover': { bgcolor: '#2A2A2A' },
                }}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: { xs: '0.875rem', md: '0.925rem' },
                    fontWeight: 500,
                    lineHeight: 1.4,
                    pr: 2,
                  }}
                >
                  {item.question}
                </Typography>

                <IconButton
                  disableRipple
                  size="small"
                  sx={{
                    color: '#9CA3AF',
                    p: 0,
                    minWidth: 24,
                    transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <KeyboardArrowDownIcon sx={{ fontSize: '1.2rem' }} />
                </IconButton>
              </Box>

              {/* Answer */}
              <Collapse in={activeIndex === index} timeout={300}>
                <Typography
                  sx={{
                    color: '#9CA3AF',
                    fontSize: '0.85rem',
                    lineHeight: 1.75,
                    px: 3,
                    pb: 2.5,
                  }}
                >
                  {item.answer}
                </Typography>
              </Collapse>
            </Box>
          ))}
        </Box>

        {/* CTA Link */}
        <MuiLink
          component={Link}
          to="/faq"
          sx={{
            color: '#B584B1',
            textDecoration: 'none',
            fontSize: '0.875rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            transition: 'color 0.3s ease',
            '&:hover': { color: '#C796C3' },
          }}
        >
          View all FAQs
          <ArrowForwardIcon sx={{ fontSize: '1rem' }} />
        </MuiLink>

      </Box>
    </Box>
  );
};

export default FAQ;
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import aboutImg from '../assets/pic-sitting01.jpeg';

const AboutOverview = () => {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        height: { xs: 'auto', md: '60vh' },
        width: '100%',
        overflow: 'hidden',
        bgcolor: '#1A1A1A'
      }}
    >
      {/* LEFT - IMAGE */}
      <Box
        sx={{
          width: { xs: '100%', md: '51.9%' },
          height: { xs: '300px', md: '100%' }
        }}
      >
        <Box
          component="img"
          src={aboutImg}
          alt="Fihliwe Klaas at work"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </Box>

      {/* RIGHT - TEXT */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', // centers content horizontally
          px: { xs: 4, md: 10, lg: 14 },
          py: { xs: 6, md: 0 },
          color: 'white'
        }}
      >
        <Box sx={{ maxWidth: '520px', width: '100%' }}>
          {/* LABEL */}
          <Typography
            variant="overline"
            sx={{
              display: 'block',
              color: '#86A88B',
              fontWeight: 600,
              letterSpacing: '0.2em',
              mb: 3,
              fontSize: '0.75rem'
            }}
          >
            ABOUT FIHLIWE
          </Typography>

          {/* HEADING */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontSize: { xs: '2rem', md: '2.6rem', lg: '3rem' },
              lineHeight: 1.2,
              mb: 4,
              fontWeight: 400
            }}
          >
            Compassionate care for young minds
          </Typography>

          {/* TEXT */}
          <Typography
            sx={{
              color: '#9CA3AF',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              mb: 3
            }}
          >
            I’m Fihliwe Klaas, a registered psychologist dedicated to creating a warm, supportive environment where children, teens, and young adults can explore their feelings and begin their healing journey.
          </Typography>

          <Typography
            sx={{
              color: '#9CA3AF',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              mb: 5
            }}
          >
            My approach is rooted in empathy, patience, and understanding - meeting each person exactly where they are.
          </Typography>

          {/* LINK */}
          <MuiLink
            component={Link}
            to="/about"
            sx={{
              color: '#B584B1',
              textDecoration: 'none',
              fontSize: '0.9rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.2,
              transition: 'color 0.3s ease',
              '&:hover': { color: '#C796C3' }
            }}
          >
            Learn more about my approach
            <ArrowForwardIcon sx={{ fontSize: '1.1rem' }} />
          </MuiLink>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutOverview;
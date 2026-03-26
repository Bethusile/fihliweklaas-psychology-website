import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import heroImg from '../assets/pic-id-photo.jpeg';

const NAVBAR_HEIGHT = 80;

const HeroContent = ({ mobile = false }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      pt: mobile ? 4 : 0,
      pb: mobile ? 5 : 0,
      px: mobile ? 4 : 0,
      maxWidth: mobile ? '100%' : '480px',
    }}
  >
    <Typography
      variant="body2"
      sx={{
        fontStyle: 'italic',
        color: '#9CA3AF',
        mb: 2,
        fontSize: '0.875rem',
        letterSpacing: '0.02em',
      }}
    >
      Life can feel overwhelming sometimes
    </Typography>

    <Typography
      variant="h1"
      sx={{
        fontFamily: "'Playfair Display', serif",
        fontSize: mobile ? '2.2rem' : { md: '3.2rem', lg: '3.8rem' },
        lineHeight: 1.15,
        mb: 3,
        color: '#1A2C1D',
        fontWeight: 400,
      }}
    >
      A safe space for healing, growth & self-discovery
    </Typography>

    <Typography
      sx={{
        color: '#6B7280',
        mb: 5,
        lineHeight: 1.75,
        fontSize: '0.95rem',
      }}
    >
      Support for children, teens, and young adults navigating trauma, identity, and emotional challenges.
    </Typography>

    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      <Button
        component={Link}
        to="/contact"
        variant="contained"
        sx={{
          bgcolor: '#B584B1',
          borderRadius: '50px',
          px: 3.5,
          py: 1.5,
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: '0.9rem',
          fontWeight: 500,
          '&:hover': { bgcolor: '#9d6d9a', boxShadow: 'none' },
        }}
      >
        Book a Session
      </Button>
      <Button
        component={Link}
        to="/contact"
        variant="outlined"
        sx={{
          color: '#1A2C1D',
          borderColor: '#D1D5DB',
          borderRadius: '50px',
          px: 3.5,
          py: 1.5,
          textTransform: 'none',
          fontSize: '0.9rem',
          fontWeight: 500,
          '&:hover': { borderColor: '#1A2C1D', bgcolor: 'transparent' },
        }}
      >
        Get in Touch
      </Button>
    </Box>
  </Box>
);

const Hero = () => {
  return (
    <Box component="section" sx={{ bgcolor: '#FDFBF9', width: '100%' }}>

      {/* ── MOBILE layout (hidden on md+) ── */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        {/* Image full width */}
        <Box sx={{ width: '100%', height: '100vw' }}>
          <Box
            component="img"
            src={heroImg}
            alt="Fihliwe Klaas"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 5%',
              display: 'block',
            }}
          />
        </Box>
        {/* Text below image */}
        <HeroContent mobile />
      </Box>

      {/* ── DESKTOP layout (hidden below md) ── */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'row',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* Left: content */}
        <Box
          sx={{
            width: '45%',
            display: 'flex',
            alignItems: 'center',
            px: { md: 8, lg: 12 },
            pt: `${NAVBAR_HEIGHT}px`,
          }}
        >
          <HeroContent />
        </Box>

        {/* Right: image */}
        <Box sx={{ width: '55%', height: '100%', flexShrink: 0 }}>
          <Box
            component="img"
            src={heroImg}
            alt="Fihliwe Klaas"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 5%',
              display: 'block',
            }}
          />
        </Box>
      </Box>

    </Box>
  );
};

export default Hero;
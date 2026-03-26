import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const TakeFirstStep = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        px: { xs: 3, sm: 5, md: 6 },
        bgcolor: '#FDFBF9',
        textAlign: 'center',
      }}
    >
      <Box sx={{ maxWidth: '620px', mx: 'auto' }}>

        {/* Heart Icon */}
        <FavoriteBorderIcon
          sx={{
            fontSize: '1.8rem',
            color: '#B584B1',
            mb: 3,
          }}
        />

        {/* Heading */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '1.8rem', md: '2.6rem' },
            fontWeight: 400,
            color: '#1A1A1A',
            lineHeight: 1.25,
            mb: 2.5,
          }}
        >
          Taking the first step can feel difficult
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            color: '#6B7280',
            fontSize: '0.95rem',
            lineHeight: 1.8,
            mb: 5,
            maxWidth: '520px',
            mx: 'auto',
          }}
        >
          But you don't have to do it alone. Whether you're ready to book or just have questions, I'm here. Reach out whenever you feel comfortable.
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            sx={{
              bgcolor: '#B584B1',
              color: 'white',
              borderRadius: '100px',
              px: 4,
              py: 1.5,
              fontSize: '0.875rem',
              fontWeight: 500,
              textTransform: 'none',
              boxShadow: 'none',
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                bgcolor: '#A070AD',
                boxShadow: 'none',
              },
            }}
          >
            Get in Touch
          </Button>

          <Button
            component="a"
            href="https://wa.me/27631567054"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            startIcon={<WhatsAppIcon sx={{ fontSize: '1rem' }} />}
            sx={{
              borderColor: '#D1D5DB',
              color: '#4B5563',
              borderRadius: '100px',
              px: 4,
              py: 1.5,
              fontSize: '0.875rem',
              fontWeight: 500,
              textTransform: 'none',
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                borderColor: '#9CA3AF',
                bgcolor: 'transparent',
              },
            }}
          >
            Chat on WhatsApp
          </Button>
        </Box>

      </Box>
    </Box>
  );
};

export default TakeFirstStep;
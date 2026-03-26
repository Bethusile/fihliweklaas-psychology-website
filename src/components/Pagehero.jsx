import { Box, Typography } from '@mui/material';

const PageHero = ({ label, title, subtitle, image, imagePosition = 'center 30%' }) => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        height: { xs: '40vh', md: '50vh' },
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: imagePosition,
          display: 'block',
        }}
      />

      {/* Dark overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0,0,0,0.45)',
        }}
      />

      {/* Text content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: { xs: 3, md: 6 },
        }}
      >
        {label && (
          <Typography
            variant="overline"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 600,
              letterSpacing: '0.2em',
              fontSize: '0.7rem',
              mb: 1.5,
            }}
          >
            {label}
          </Typography>
        )}

        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 400,
            color: 'white',
            lineHeight: 1.2,
            mb: subtitle ? 2 : 0,
          }}
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: { xs: '0.9rem', md: '1rem' },
              maxWidth: '560px',
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default PageHero;
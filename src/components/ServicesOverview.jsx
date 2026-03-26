import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

const services = [
  {
    icon: <FavoriteBorderIcon sx={{ fontSize: '22px', color: '#B584B1' }} />,
    title: 'Individual Therapy',
    description:
      'One-on-one sessions to explore your feelings, thoughts, and experiences in a safe space.',
    points: ['Personalised support', 'Trauma-informed care', 'Confidential sessions'],
  },
  {
    icon: <PeopleOutlineIcon sx={{ fontSize: '22px', color: '#B584B1' }} />,
    title: 'Couples Therapy',
    description:
      'Strengthen your relationship through improved communication and understanding.',
    points: ['Better communication', 'Conflict resolution', 'Deeper connection'],
  },
  {
    icon: <ShieldOutlinedIcon sx={{ fontSize: '22px', color: '#B584B1' }} />,
    title: 'Child & Adolescent Therapy',
    description:
      'Age-appropriate therapy for children 7+ and teenagers facing emotional challenges.',
    points: ['Play-based methods', 'Identity support', 'Anxiety management'],
  },
];

const ServicesSection = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#1A1A1A',
        px: { xs: 3, sm: 5, md: 6 },
        py: { xs: 6, md: 8 },
        textAlign: 'center',
      }}
    >
      <Box sx={{ maxWidth: '900px', mx: 'auto' }}>

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
          SERVICES
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
            mb: { xs: 5, md: 6 },
          }}
        >
          How I can support you
        </Typography>

        {/* Cards Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: { xs: 2.5, md: 3 },
            mb: { xs: 4, md: 5 },
          }}
        >
          {services.map((service) => (
            <Box
              key={service.title}
              sx={{
                bgcolor: '#242424',
                borderRadius: '16px',
                border: '1px solid #2E2E2E',
                p: { xs: 3, md: 3.5 },
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: 46,
                  height: 46,
                  borderRadius: '12px',
                  bgcolor: '#2E2E2E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 0.5,
                }}
              >
                {service.icon}
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  color: 'white',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.05rem',
                  fontWeight: 500,
                }}
              >
                {service.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  color: '#9CA3AF',
                  fontSize: '0.85rem',
                  lineHeight: 1.7,
                }}
              >
                {service.description}
              </Typography>

              {/* Bullet Points */}
              <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                {service.points.map((point) => (
                  <Box
                    component="li"
                    key={point}
                    sx={{
                      color: '#9CA3AF',
                      fontSize: '0.82rem',
                      lineHeight: 1.9,
                      '&::marker': { color: '#9CA3AF' },
                    }}
                  >
                    {point}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* CTA Link — always below grid */}
        <MuiLink
          component={Link}
          to="/services"
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
          View all services
          <ArrowForwardIcon sx={{ fontSize: '1rem' }} />
        </MuiLink>

      </Box>
    </Box>
  );
};

export default ServicesSection;

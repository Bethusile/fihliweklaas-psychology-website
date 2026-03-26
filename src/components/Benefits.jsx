import { Box, Typography } from '@mui/material';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';

const benefits = [
  "Better understanding of yourself",
  "Tools to manage anxiety and stress",
  "Healing from past trauma",
  "Stronger relationships",
  "Improved emotional regulation",
  "A clearer sense of identity and purpose",
];

const Benefits = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 3, sm: 5, md: 6 },
        bgcolor: '#FDFBF9',
      }}
    >
      <Box sx={{ maxWidth: '900px', mx: 'auto', textAlign: 'center' }}>

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
          BENEFITS OF THERAPY
        </Typography>

        {/* Heading */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '1.7rem', md: '2.4rem' },
            fontWeight: 400,
            color: '#1A1A1A',
            lineHeight: 1.3,
            mb: { xs: 5, md: 6 },
          }}
        >
          What therapy can offer you
        </Typography>

        {/* Benefits Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
            },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {benefits.map((benefit, index) => (
            <Box
              key={index}
              sx={{
                bgcolor: 'white',
                border: '1px solid #EEEBE8',
                borderRadius: '100px',
                py: 2,
                px: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  minWidth: 32,
                  borderRadius: '50%',
                  bgcolor: '#F0F4F1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <SpaOutlinedIcon sx={{ fontSize: '15px', color: '#86A88B' }} />
              </Box>

              <Typography
                sx={{
                  color: '#4B5563',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  lineHeight: 1.4,
                  textAlign: 'left',
                }}
              >
                {benefit}
              </Typography>
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
};

export default Benefits;

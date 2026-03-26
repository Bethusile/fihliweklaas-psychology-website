import { Box, Typography, Paper } from '@mui/material';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';

const categories = [
  {
    title: "Children (7+)",
    description: "Helping young ones express and process their emotions in a safe, playful environment.",
    icon: <ChildCareIcon sx={{ color: '#B584B1', fontSize: '22px' }} />,
  },
  {
    title: "Teenagers",
    description: "Navigating identity, peer pressure, anxiety, and the complexities of growing up.",
    icon: <SchoolIcon sx={{ color: '#B584B1', fontSize: '22px' }} />,
  },
  {
    title: "Young Adults",
    description: "Finding clarity, purpose, and healing from past experiences as you step into adulthood.",
    icon: <PersonIcon sx={{ color: '#B584B1', fontSize: '22px' }} />,
  },
];

const TherapyFor = () => {
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
          WHO THERAPY IS FOR
        </Typography>

        {/* Heading */}
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '1.7rem', md: '2.4rem' },
            mb: 2,
            fontWeight: 400,
            color: '#1A1A1A',
            lineHeight: 1.3,
          }}
        >
          You don't need to be "broken" to seek support
        </Typography>

        {/* Sub-description */}
        <Typography
          sx={{
            color: '#6B7280',
            maxWidth: '520px',
            mx: 'auto',
            mb: { xs: 5, md: 6 },
            lineHeight: 1.75,
            fontSize: '0.925rem',
          }}
        >
          Therapy is for anyone who wants to understand themselves better, work through challenges, or simply have a safe space to talk.
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
          }}
        >
          {categories.map((item, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: { xs: 3, md: 3.5 },
                borderRadius: '16px',
                border: '1px solid #EDE8EC',
                bgcolor: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                },
              }}
            >
              {/* Icon Container */}
              <Box
                sx={{
                  width: 46,
                  height: 46,
                  mb: 2.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: '#F5EFF5',
                  borderRadius: '12px',
                }}
              >
                {item.icon}
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  mb: 1.5,
                  fontWeight: 500,
                  fontSize: '1.05rem',
                  color: '#1A1A1A',
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: '#9CA3AF',
                  fontSize: '0.85rem',
                  lineHeight: 1.7,
                }}
              >
                {item.description}
              </Typography>
            </Paper>
          ))}
        </Box>

      </Box>
    </Box>
  );
};

export default TherapyFor;

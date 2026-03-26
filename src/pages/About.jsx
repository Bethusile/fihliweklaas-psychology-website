import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import PageHero from '../components/Pagehero';
import heroImg from '../assets/pic-sitting4.jpeg';
import approachImg from '../assets/pic-id-photo.jpeg';
import spaceImg from '../assets/pic-sitting4.jpeg';

const beliefs = [
  {
    icon: <FavoriteBorderIcon sx={{ fontSize: '1.1rem', color: '#B584B1' }} />,
    title: 'Creating Safety',
    description: 'Therapy starts with feeling safe. I prioritise building trust and creating an environment where you can be yourself without judgement.',
  },
  {
    icon: <ShieldOutlinedIcon sx={{ fontSize: '1.1rem', color: '#B584B1' }} />,
    title: 'Trauma-Informed Care',
    description: 'I understand that many young people carry experiences that have shaped how they see themselves and the world. My approach is gentle, patient, and informed by the latest research on trauma.',
  },
  {
    icon: <PeopleOutlineIcon sx={{ fontSize: '1.1rem', color: '#B584B1' }} />,
    title: 'Working With Young People',
    description: "I'm passionate about supporting young minds during critical stages of development. Whether it's a child learning to express emotions or a young adult finding their identity.",
  },
  {
    icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: '1.1rem', color: '#B584B1' }} />,
    title: 'Growth & Empowerment',
    description: "My goal isn't to 'fix' anyone — it's to help you discover your own strength, resilience, and capacity for growth.",
  },
];

const About = () => {
  return (
    <Box>

      {/* ── Page Hero Banner ── */}
      <PageHero
        label="About"
        title="Meet Fihliwe Klaas"
        subtitle="A compassionate psychologist dedicated to supporting young people through their most challenging moments."
        image={heroImg}
        imagePosition="center center"
      />

      {/* ── My Approach ── */}
      <Box
        component="section"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          bgcolor: '#FDFBF9',
          position: 'relative',
        }}
      >
        {/* Sticky Image — left half */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            height: { xs: '70vw', md: '100vh' },
            flexShrink: 0,
            position: { xs: 'relative', md: 'sticky' },
            top: { md: 0 },
            alignSelf: { md: 'flex-start' },
          }}
        >
          <Box
            component="img"
            src={approachImg}
            alt="Fihliwe Klaas"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
            }}
          />
        </Box>

        {/* Scrollable Text — right half */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            alignItems: 'flex-start',
            px: { xs: 4, md: 7, lg: 10 },
            py: { xs: 5, md: 8 },
          }}
        >
          <Box sx={{ maxWidth: '520px' }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                fontWeight: 400,
                color: '#1A1A1A',
                mb: 3,
              }}
            >
              My Approach
            </Typography>

            <Typography sx={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.8, mb: 2.5 }}>
              I believe that everyone deserves to feel heard, understood, and supported. My approach to therapy is warm, collaborative, and deeply respectful of each person's unique journey.
            </Typography>
            <Typography sx={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.8, mb: 2.5 }}>
              As a registered psychologist with the Health Professions Council of South Africa (HPCSA), I work primarily with children (7+), teenagers, and young adults — helping them navigate the complexities of growing up in today's world.
            </Typography>
            <Typography sx={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.8, mb: 4 }}>
              Whether you're dealing with trauma, identity questions, anxiety, or simply seeking a space to explore your thoughts and feelings, I'm here to walk alongside you.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.25rem',
                fontWeight: 400,
                color: '#1A1A1A',
                mb: 3,
              }}
            >
              What I Believe In
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {beliefs.map((item) => (
                <Box key={item.title} sx={{ display: 'flex', gap: 2 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      minWidth: 36,
                      borderRadius: '10px',
                      bgcolor: '#F5EFF5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mt: 0.3,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#1A1A1A', mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.75 }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── A Space That Feels Like Home ── */}
      <Box
        component="section"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          position: 'relative',
        }}
      >
        {/* Dark text panel — left */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            bgcolor: '#1A1A1A',
            display: 'flex',
            alignItems: 'center',
            px: { xs: 4, md: 7, lg: 10 },
            py: { xs: 5, md: 8 },
          }}
        >
          <Box sx={{ maxWidth: '460px' }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontSize: { xs: '1.6rem', md: '2rem' },
                fontWeight: 400,
                color: 'white',
                mb: 2.5,
              }}
            >
              A Space That Feels Like Home
            </Typography>
            <Typography sx={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.8, mb: 2 }}>
              I've created a therapy space that feels warm, comfortable, and safe — nothing clinical or intimidating. Whether we meet in-person or online, the goal is the same: a calm environment where you can feel at ease.
            </Typography>
            <Typography sx={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.8, mb: 3.5 }}>
              Sessions are available both in-person in South Africa and online, so support is accessible no matter where you are.
            </Typography>
            <MuiLink
              component={Link}
              to="/contact"
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
              Book your first session
              <ArrowForwardIcon sx={{ fontSize: '1rem' }} />
            </MuiLink>
          </Box>
        </Box>

        {/* Sticky Image — right */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            height: { xs: '70vw', md: '100vh' },
            flexShrink: 0,
            position: { xs: 'relative', md: 'sticky' },
            top: { md: 0 },
            alignSelf: { md: 'flex-start' },
          }}
        >
          <Box
            component="img"
            src={spaceImg}
            alt="Therapy space"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
        </Box>
      </Box>

      {/* ── Ready to Begin CTA ── */}
      <Box
        sx={{
          bgcolor: '#FDFBF9',
          py: { xs: 7, md: 9 },
          px: { xs: 3, md: 6 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '1.8rem', md: '2.4rem' },
            fontWeight: 400,
            color: '#1A1A1A',
            mb: 2,
          }}
        >
          Ready to begin?
        </Typography>
        <Typography
          sx={{
            color: '#6B7280',
            fontSize: '0.95rem',
            lineHeight: 1.8,
            maxWidth: '500px',
            mx: 'auto',
            mb: 4,
          }}
        >
          There's no wrong time to start. If you're curious about therapy or ready to take the next step, I'd love to hear from you.
        </Typography>
        <Box
          component={Link}
          to="/contact"
          sx={{
            display: 'inline-block',
            bgcolor: '#B584B1',
            color: 'white',
            borderRadius: '50px',
            px: 5,
            py: 1.6,
            fontSize: '0.9rem',
            fontWeight: 500,
            textDecoration: 'none',
            '&:hover': { bgcolor: '#9d6d9a' },
          }}
        >
          Get in Touch
        </Box>
      </Box>

    </Box>
  );
};

export default About;
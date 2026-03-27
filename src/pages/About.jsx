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



const About = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>

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
          overflow: 'hidden',
        }}
      >
        {/* Sticky Image — left half */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            maxWidth: { xs: '100%', md: '50%' },
            height: { xs: '75vw', md: '100vh' },
            flexShrink: 0,
            position: { xs: 'relative', md: 'sticky' },
            top: { md: 0 },
            alignSelf: { md: 'flex-start' },
            overflow: 'hidden',
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
            maxWidth: { xs: '100%', md: '50%' },
            display: 'flex',
            alignItems: 'flex-start',
            px: { xs: 4, md: 7, lg: 10 },
            py: { xs: 5, md: 8 },
            boxSizing: 'border-box',
          }}
        >
          <Box sx={{ maxWidth: '520px', width: '100%' }}>
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
Hello, my name is Fihliwe Klaas, a Black African Counselling Psychologist based in the friendly city of Gqeberha in the Eastern Cape.            </Typography>
            <Typography sx={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.8, mb: 2.5 }}>
I provide integrative therapeutic interventions to support individuals who are embarking on their journey of healing, personal growth, and transformation. My approach is grounded in empathy, honesty, and integrity, creating a safe and supportive space where every person’s experience is respected and valued.            </Typography>
            <Typography sx={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.8, mb: 4 }}>
My professional journey has been shaped by diverse experiences that deepened my understanding of people’s personal, social, and economic realities. Prior to becoming a psychologist, I worked in finance as a paraplanner, supporting financial advisors in helping individuals and families plan for their financial futures. This experience strengthened my understanding of the link between financial wellbeing, stress, life transitions, and mental health. I have also been involved in community engagement initiatives and worked as a student success coach, where I supported individuals from diverse backgrounds in navigating academic, personal, and life challenges while fostering resilience and self-awareness.            </Typography>

            
            
          </Box>
        </Box>
      </Box>

      {/* ── A Space That Feels Like Home ── */}
      <Box
        component="section"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          overflow: 'hidden',
        }}
      >
        {/* Dark text panel — left */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            maxWidth: { xs: '100%', md: '50%' },
            bgcolor: '#1A1A1A',
            display: 'flex',
            alignItems: 'center',
            px: { xs: 4, md: 7, lg: 10 },
            py: { xs: 5, md: 8 },
            boxSizing: 'border-box',
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
As a Xhosa woman who speaks isiXhosa, Sesotho, Venda, Setswana, Sepedi, isiZulu, and English, I deeply appreciate the diverse cultural, religious, and traditional contexts that shape people’s lives. This allows me to connect meaningfully with individuals from different backgrounds and better understand the challenges they may face.            </Typography>
            <Typography sx={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.8, mb: 3.5 }}>
My journey into psychology was inspired by a strong desire to work in a profession that aligns with my core values and passion for helping others. I believe that every person deserves compassionate support on their path toward emotional wellbeing and personal growth.             </Typography>
            <Typography sx={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.8, mb: 3.5 }}>
                I look forward to meeting you and walking alongside you on your journey toward wellness.  </Typography>
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
            maxWidth: { xs: '100%', md: '50%' },
            height: { xs: '75vw', md: '100vh' },
            flexShrink: 0,
            position: { xs: 'relative', md: 'sticky' },
            top: { md: 0 },
            alignSelf: { md: 'flex-start' },
            overflow: 'hidden',
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
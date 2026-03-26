import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PageHero from '../components/Pagehero';
import heroImg from '../assets/pic-sitting4.jpeg';

const services = [
  {
    icon: <FavoriteBorderIcon sx={{ fontSize: '1.3rem', color: '#B584B1' }} />,
    title: 'Individual Therapy',
    description: 'One-on-one sessions tailored to your unique needs. A safe, confidential space to explore your thoughts, feelings, and experiences at your own pace.',
    benefits: ['Personalised therapeutic approach', 'Trauma-informed care', 'Anxiety & stress management', 'Identity & self-understanding'],
  },
  {
    icon: <GroupsOutlinedIcon sx={{ fontSize: '1.3rem', color: '#B584B1' }} />,
    title: 'Couples Therapy',
    description: 'Strengthen your relationship through guided conversations, improved communication, and deeper understanding of each other.',
    benefits: ['Communication skills', 'Conflict resolution', 'Rebuilding trust', 'Relationship growth'],
  },
  {
    icon: <PeopleOutlineIcon sx={{ fontSize: '1.3rem', color: '#B584B1' }} />,
    title: 'Family Therapy',
    description: 'Helping families navigate challenges together — improving communication, resolving conflict, and building stronger bonds.',
    benefits: ['Family dynamics', 'Parenting support', 'Sibling relationships', 'Life transitions'],
  },
  {
    icon: <ShieldOutlinedIcon sx={{ fontSize: '1.3rem', color: '#B584B1' }} />,
    title: 'Child & Adolescent Therapy (7+)',
    description: 'Age-appropriate therapy for children and teens dealing with emotional, behavioural, or developmental challenges.',
    benefits: ['Play-based therapy', 'Emotional expression', 'School-related issues', 'Bullying & peer pressure'],
  },
  {
    icon: <SchoolOutlinedIcon sx={{ fontSize: '1.3rem', color: '#B584B1' }} />,
    title: 'Career & Academic Assessments',
    description: 'Comprehensive assessments to help young people understand their strengths, interests, and potential career paths.',
    benefits: ['Career guidance', 'Academic potential', 'Personality profiling', 'Informed decision-making'],
  },
  {
    icon: <BusinessCenterOutlinedIcon sx={{ fontSize: '1.3rem', color: '#B584B1' }} />,
    title: 'Corporate Wellness Services',
    description: 'Supporting organisations in creating mentally healthy workplaces through workshops, consultations, and employee support programmes.',
    benefits: ['Stress management workshops', 'Mental health awareness', 'Employee wellbeing', 'Team dynamics'],
  },
];

const Services = () => {
  return (
    <Box>

      {/* ── Page Hero Banner ── */}
      <PageHero
        label="Services"
        title="How I Can Support You"
        subtitle="Every person's journey is unique. I offer a range of therapeutic services designed to meet you where you are."
        image={heroImg}
        imagePosition="center center"
      />

      {/* ── Intro + Cards ── */}
      <Box
        component="section"
        sx={{ bgcolor: '#FDFBF9', px: { xs: 3, md: 6, lg: 10 }, pt: { xs: 6, md: 8 }, pb: { xs: 6, md: 10 } }}
      >
        {/* Intro text */}
        <Box sx={{ maxWidth: '680px', mx: 'auto', textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              fontWeight: 400,
              color: '#1A1A1A',
              mb: 2.5,
            }}
          >
            Sessions tailored to you
          </Typography>
          <Typography sx={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.8, mb: 2 }}>
            Whether you prefer in-person or online sessions, I create a warm, confidential space where you can feel comfortable being yourself.
          </Typography>
          <Typography sx={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.8 }}>
            All services are informed by evidence-based approaches and delivered with care, empathy, and respect for your individual needs.
          </Typography>
        </Box>

        {/* Service Cards Grid */}
        <Box
          sx={{
            maxWidth: '1100px',
            mx: 'auto',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' },
            gap: 3,
          }}
        >
          {services.map((service) => (
            <Box
              key={service.title}
              sx={{
                bgcolor: 'white',
                border: '1px solid #F0EBF0',
                borderRadius: '16px',
                p: { xs: 3.5, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  bgcolor: '#F5EFF5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {service.icon}
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.1rem',
                  fontWeight: 400,
                  color: '#1A1A1A',
                }}
              >
                {service.title}
              </Typography>

              {/* Description */}
              <Typography sx={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.75 }}>
                {service.description}
              </Typography>

              {/* Benefits */}
              <Box component="ul" sx={{ m: 0, pl: 2.5, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                {service.benefits.map((b) => (
                  <Box
                    component="li"
                    key={b}
                    sx={{ color: '#6B7280', fontSize: '0.825rem', lineHeight: 1.7 }}
                  >
                    {b}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── CTA ── */}
      <Box
        sx={{
          bgcolor: '#F5EFF5',
          py: { xs: 7, md: 9 },
          px: { xs: 3, md: 6 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            fontWeight: 400,
            color: '#1A1A1A',
            mb: 2,
          }}
        >
          Not sure which service is right for you?
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
          That's perfectly okay. Reach out and we can chat about what you're going through — no commitment, no pressure.
        </Typography>
        <Box
          component={Link}
          to="/contact"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
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
          Let's Talk
          <ArrowForwardIcon sx={{ fontSize: '1rem' }} />
        </Box>
      </Box>

    </Box>
  );
};

export default Services;
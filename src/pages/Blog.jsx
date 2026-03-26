import { Box, Typography } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PageHero from '../components/Pagehero';
import heroImg from '../assets/pic-sitting4.jpeg';

const posts = [
  {
    title: 'Understanding Trauma: What It Is and How Therapy Helps',
    excerpt: 'Trauma affects people in different ways. Learn what trauma really means, how it shows up in daily life, and how therapy can support your healing journey.',
    date: 'Coming Soon',
    category: 'Trauma',
  },
  {
    title: 'Identity Development in Young People',
    excerpt: 'Adolescence is a time of self-discovery. Explore how young people form their sense of identity and how a supportive environment can make all the difference.',
    date: 'Coming Soon',
    category: 'Youth',
  },
  {
    title: 'Mental Health for Teens: Breaking the Stigma',
    excerpt: "Mental health challenges are common among teenagers, yet many struggle in silence. Here's why it's okay to ask for help — and how to start.",
    date: 'Coming Soon',
    category: 'Mental Health',
  },
  {
    title: 'Coping Strategies for Stress and Anxiety',
    excerpt: 'Practical, everyday tools to help manage stress and anxiety. Simple techniques that can make a real difference in how you feel.',
    date: 'Coming Soon',
    category: 'Wellness',
  },
  {
    title: 'How to Support a Child Going Through Therapy',
    excerpt: "As a parent or caregiver, your role in a child's therapeutic journey is vital. Here's how to create a supportive home environment alongside professional care.",
    date: 'Coming Soon',
    category: 'Parenting',
  },
  {
    title: 'Understanding Anxiety in Teenagers',
    excerpt: 'Anxiety in teens often looks different from adult anxiety. Discover the signs to watch for and how early intervention can make a lasting difference.',
    date: 'Coming Soon',
    category: 'Youth',
  },
];

const Blog = () => {
  return (
    <Box>

      {/* ── Page Hero Banner ── */}
      <PageHero
        label="Blog"
        title="Insights & Resources"
        subtitle="Helpful articles on mental health, personal growth, and wellbeing for young people and their families."
        image={heroImg}
        imagePosition="center center"
      />

      {/* ── Blog Grid ── */}
      <Box
        component="section"
        sx={{
          bgcolor: '#FDFBF9',
          px: { xs: 3, md: 6, lg: 10 },
          py: { xs: 6, md: 9 },
        }}
      >
        <Box
          sx={{
            maxWidth: '960px',
            mx: 'auto',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 3,
          }}
        >
          {posts.map((post) => (
            <Box
              key={post.title}
              component="article"
              sx={{
                bgcolor: 'white',
                border: '1px solid #F0EBF0',
                borderRadius: '20px',
                p: { xs: 3.5, md: 4.5 },
                display: 'flex',
                flexDirection: 'column',
                transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                '&:hover': {
                  boxShadow: '0 6px 24px rgba(0,0,0,0.07)',
                  transform: 'translateY(-3px)',
                },
              }}
            >
              {/* Category pill */}
              <Box
                sx={{
                  alignSelf: 'flex-start',
                  bgcolor: '#F0EBF0',
                  color: '#6B7280',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: '50px',
                  mb: 2.5,
                }}
              >
                {post.category}
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.1rem',
                  fontWeight: 400,
                  color: '#1A1A1A',
                  lineHeight: 1.5,
                  mb: 1.5,
                }}
              >
                {post.title}
              </Typography>

              {/* Excerpt */}
              <Typography
                sx={{
                  color: '#6B7280',
                  fontSize: '0.85rem',
                  lineHeight: 1.75,
                  flexGrow: 1,
                  mb: 3,
                }}
              >
                {post.excerpt}
              </Typography>

              {/* Date */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                <CalendarTodayOutlinedIcon sx={{ fontSize: '0.8rem', color: '#9CA3AF' }} />
                <Typography sx={{ fontSize: '0.775rem', color: '#9CA3AF' }}>
                  {post.date}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

    </Box>
  );
};

export default Blog;
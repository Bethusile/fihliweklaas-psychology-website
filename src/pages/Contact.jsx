import { Box, Typography, TextField, MenuItem, Select, FormControl } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PageHero from '../components/Pagehero';
import heroImg from '../assets/pic-sitting4.jpeg';

const contactItems = [
  {
    icon: <EmailOutlinedIcon sx={{ fontSize: '1.1rem', color: '#B584B1' }} />,
    label: 'Email',
    value: 'fmklaas@gmail.com',
  },
  {
    icon: <PhoneOutlinedIcon sx={{ fontSize: '1.1rem', color: '#B584B1' }} />,
    label: 'Call or Text',
    value: '+27 (0) 63 156 7054',
  },
  {
    icon: <WhatsAppIcon sx={{ fontSize: '1.1rem', color: '#B584B1' }} />,
    label: 'WhatsApp',
    value: 'Send a message anytime',
  },
  {
    icon: <LocationOnOutlinedIcon sx={{ fontSize: '1.1rem', color: '#B584B1' }} />,
    label: 'Location',
    value: 'South Africa • In-person & Online',
  },
];

const inputSx = {
  bgcolor: '#F5F3F0',
  borderRadius: '10px',
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    fontSize: '0.875rem',
    '& fieldset': { border: 'none' },
  },
  '& input, & textarea': {
    color: '#1A1A1A',
    '&::placeholder': { color: '#9CA3AF', opacity: 1 },
  },
};

const Contact = () => {
  return (
    <Box>

      {/* ── Page Hero Banner ── */}
      <PageHero
        label="Contact"
        title="Get in Touch"
        subtitle="Taking the first step towards support is courageous. Reach out in whatever way feels most comfortable for you."
        image={heroImg}
        imagePosition="center center"
      />

      {/* ── Main Content ── */}
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
            maxWidth: '1050px',
            mx: 'auto',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1.5fr' },
            gap: { xs: 6, md: 6 },
            alignItems: 'start',
          }}
        >

          {/* ── Left: Info ── */}
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontSize: { xs: '1.8rem', md: '2rem' },
                fontWeight: 400,
                color: '#1A1A1A',
                mb: 2,
              }}
            >
              Get in Touch
            </Typography>
            <Typography sx={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.8, mb: 4 }}>
              Whether you're ready to book a session or just want to ask a question, I'm here. There's no pressure — take your time.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {contactItems.map((item) => (
                <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      minWidth: 38,
                      borderRadius: '10px',
                      bgcolor: '#F5EFF5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', color: '#1A1A1A' }}>
                      {item.label}
                    </Typography>
                    <Typography sx={{ fontSize: '0.825rem', color: '#6B7280' }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* ── Right: Form ── */}
          <Box
            sx={{
              bgcolor: 'white',
              borderRadius: '20px',
              border: '1px solid #F0EBF0',
              p: { xs: 3.5, md: 5 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.3rem',
                fontWeight: 400,
                color: '#1A1A1A',
                mb: 0.75,
              }}
            >
              Send a Message
            </Typography>
            <Typography sx={{ color: '#9CA3AF', fontSize: '0.825rem', mb: 3.5 }}>
              I'll get back to you as soon as possible.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {/* Name + Email */}
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                <Box>
                  <Typography sx={{ fontSize: '0.75rem', color: '#6B7280', mb: 0.75 }}>Your Name</Typography>
                  <TextField fullWidth placeholder="First name" size="small" sx={inputSx} />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '0.75rem', color: '#6B7280', mb: 0.75 }}>Email</Typography>
                  <TextField fullWidth placeholder="your@email.com" size="small" sx={inputSx} />
                </Box>
              </Box>

              {/* Phone + Session Type */}
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                <Box>
                  <Typography sx={{ fontSize: '0.75rem', color: '#6B7280', mb: 0.75 }}>Phone (optional)</Typography>
                  <TextField fullWidth placeholder="+27..." size="small" sx={inputSx} />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '0.75rem', color: '#6B7280', mb: 0.75 }}>Session Type</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      defaultValue="in-person"
                      sx={{
                        bgcolor: '#F5F3F0',
                        borderRadius: '10px',
                        fontSize: '0.875rem',
                        '& fieldset': { border: 'none' },
                      }}
                    >
                      <MenuItem value="in-person">In-person</MenuItem>
                      <MenuItem value="online">Online</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>

              {/* Message */}
              <Box>
                <Typography sx={{ fontSize: '0.75rem', color: '#6B7280', mb: 0.75 }}>Your Message</Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Tell me a little about what you're looking for..."
                  sx={inputSx}
                />
              </Box>

              {/* Submit */}
              <Box
                component="button"
                type="submit"
                sx={{
                  width: '100%',
                  bgcolor: '#B584B1',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  py: 1.8,
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  mt: 0.5,
                  transition: 'background-color 0.2s ease',
                  '&:hover': { bgcolor: '#9d6d9a' },
                }}
              >
                Send Message
              </Box>

              <Typography sx={{ textAlign: 'center', fontSize: '0.75rem', color: '#9CA3AF' }}>
                Your information is completely confidential and secure.
              </Typography>
            </Box>
          </Box>

        </Box>
      </Box>

    </Box>
  );
};

export default Contact;
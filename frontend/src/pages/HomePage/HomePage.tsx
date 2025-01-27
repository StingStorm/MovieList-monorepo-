import { Container } from '@mui/material';
import Section from '../../components/ui/Section';

const HomePage = () => {
  return (
    <Section>
      <Container
        maxWidth="lg"
        sx={{
          padding: '1rem',
          border: '2px solid #4e5d72',
          borderRadius: '1rem',
          backgroundColor: 'rgba(225, 153, 94, 0.95)',
        }}
      ></Container>
    </Section>
  );
};

export default HomePage;

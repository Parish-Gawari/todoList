import { Container, Navbar } from 'react-bootstrap';

const AppHeader = () => {
  // console.log('AppHeader');
  return (
    <header style={{ marginBottom: '20px' }}>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Todo App</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default AppHeader;

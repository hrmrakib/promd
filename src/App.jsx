import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Container from "./container/Container";

const App = () => {
  return (
    <>
      <Navbar />
      <Container className='mt-5'>
        <Dashboard />
      </Container>
      <Footer />
    </>
  );
};

export default App;

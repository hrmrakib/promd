import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CurrentStats from "./components/statistics/CurrentStats";
import Container from "./container/Container";

const App = () => {
  return (
    <>
      <Navbar />
      <Container className='mt-5'>
        <CurrentStats />
        <Dashboard />
      </Container>
      <Footer />
    </>
  );
};

export default App;

import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className='w-[96%] lg:w-[90%] mx-auto mt-5'>
        <Dashboard />
      </div>
      <Footer />
    </>
  );
};

export default App;

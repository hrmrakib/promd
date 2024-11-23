import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className='w-[96%] lg:w-[90%] mx-auto mt-5'>
        <Dashboard />
      </div>
    </>
  );
};

export default App;

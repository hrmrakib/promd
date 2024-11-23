import Container from "../container/Container";

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white mt-8'>
      <Container className='px-4 py-6'>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='w-full md:w-1/3 mb-4 md:mb-0'>
            <h3 className='text-lg font-semibold mb-2'>PropManager</h3>
            <p className='text-sm'>Simplifying property management for you.</p>
          </div>
          <div className='w-full md:w-1/3 mb-4 md:mb-0'>
            <h4 className='text-md font-semibold mb-2'>Quick Links</h4>
            <ul className='text-sm'>
              <li>
                <a href='/about' className='hover:text-indigo-300'>
                  About Us
                </a>
              </li>
              <li>
                <a href='/contact' className='hover:text-indigo-300'>
                  Contact
                </a>
              </li>
              <li>
                <a href='/privacy' className='hover:text-indigo-300'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='/terms' className='hover:text-indigo-300'>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/3 text-sm'>
            <p>&copy; 2023 PropManager. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

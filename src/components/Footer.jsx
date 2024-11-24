import Container from "../container/Container";

const Footer = () => {
  return (
    <footer className='bg-gray-100 dark:bg-gray-900 text-black dark:text-gray-200 mt-8'>
      <Container className='px-4 py-6'>
        <div className='flex flex-wrap justify-between items-center gap-5'>
          <div className=''>
            <h3 className='text-lg font-semibold mb-2'>Topsy</h3>
            <p className='text-sm'>Simplifying property management for you.</p>
          </div>

          <div className='text-sm'>
            <p>&copy; 2024 Topsy. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

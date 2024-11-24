import { useEffect, useState } from "react";
import Container from "../container/Container";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
    applyTheme();
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedTheme = JSON.parse(localStorage.getItem("dark"));
    return isReturningUser ? savedTheme : false;
  }

  function applyTheme() {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  const toggleThemeMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav className='bg-white dark:bg-gray-900'>
      <Container>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            {/* Logo */}
            <a href='#' className='flex-shrink-0 flex items-center'>
              <img className='h-8 w-auto' src='/logo.png' alt='Logo' />{" "}
              <span className='font-bold ml-3 dark:text-white'>Topsy</span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className='hidden sm:flex sm:items-center'>
            <div className='ml-10 flex items-baseline space-x-4'>
              <a
                href='#'
                className='text-green-600 hover:text-gray-900 bg-gray-200 px-3 py-2 rounded-3xl text-sm font-medium'
              >
                Dashboard
              </a>
              <a
                href='#'
                className='relative text-gray-600 dark:text-gray-200 dark:hover:text-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
              >
                Inbox
                <span className='absolute -top-2 right-0 bg-green-600 text-white p-1.5 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none rounded-full'>
                  6
                </span>
              </a>
              <a
                href='#'
                className='text-gray-600 dark:text-gray-200 dark:hover:text-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
              >
                Calendar
              </a>
              <a
                href='#'
                className='text-gray-600 dark:text-gray-200 dark:hover:text-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
              >
                Insights
              </a>
              <a
                href='#'
                className='text-gray-600 dark:text-gray-200 dark:hover:text-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
              >
                Listings
              </a>
            </div>
          </div>

          {/* Right side icons */}
          <div className='hidden sm:flex sm:items-center'>
            <label className='swap swap-rotate mr-4'>
              <input type='checkbox' onChange={toggleThemeMode} />

              <svg
                className='swap-on fill-current w-6 h-6 text-gray-500 dark:text-white'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
              </svg>

              <svg
                className='swap-off fill-current w-6 h-6 text-gray-500 dark:text-white'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
              </svg>
            </label>
            <button className='p-1 rounded-full text-gray-400 dark:text-gray-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              <span className='sr-only'>Search</span>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
            <button className='relative ml-3 p-1 rounded-full text-gray-400 dark:text-gray-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              <span className='sr-only'>Notifications</span>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                />
              </svg>
              <span className='absolute top-1 right-1 bg-green-600 text-white p-1.5 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none rounded-full'></span>
            </button>
            <div className='ml-3 relative'>
              <div>
                <button
                  className='flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  id='user-menu'
                  aria-expanded='false'
                  aria-haspopup='true'
                >
                  <span className='sr-only'>Open user menu</span>
                  <img
                    className='h-8 w-8 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='flex items-center sm:hidden'>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <a
            href='#'
            className='text-gray-600 dark:text-gray-200 dark:hover:text-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
          >
            Dashboard
          </a>
          <a
            href='#'
            className='text-gray-600 dark:text-gray-200 dark:hover:text-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
          >
            Inbox
          </a>
          <a
            href='#'
            className='text-gray-600 dark:text-gray-200 dark:hover:text-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
          >
            Calendar
          </a>
          <a
            href='#'
            className='text-gray-600 dark:text-gray-200 dark:hover:text-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
          >
            Insights
          </a>
          <a
            href='#'
            className='text-gray-600 dark:text-gray-200 dark:hover:text-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
          >
            Listings
          </a>
        </div>
        <div className='pt-4 pb-3 border-t border-gray-200'>
          <div className='flex items-center px-5'>
            <div className='flex-shrink-0'>
              <img
                className='h-10 w-10 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </div>
            <div className='ml-3'>
              <div className='text-base font-medium text-gray-800'>
                Tom Cook
              </div>
              <div className='text-sm font-medium text-gray-500'>
                tom@example.com
              </div>
            </div>
            <button className='ml-auto flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              <span className='sr-only'>View notifications</span>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

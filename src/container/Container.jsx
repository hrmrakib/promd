const Container = ({ children, className }) => {
  return (
    <div className={`w-[96%] lg:w-[90%] mx-auto ${className}`}>{children}</div>
  );
};

export default Container;

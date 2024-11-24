const Container = ({ children, className }) => {
  return (
    <div className={`w-[94%] lg:w-[86%] mx-auto ${className}`}>{children}</div>
  );
};

export default Container;

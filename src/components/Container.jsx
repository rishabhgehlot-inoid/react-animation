// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return (
    <div className=" w-full h-full p-5 flex justify-center">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {children}
      </div>
    </div>
  );
};

export default Container;

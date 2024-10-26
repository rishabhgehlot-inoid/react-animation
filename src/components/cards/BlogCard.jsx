const BlogCard = () => {
  return (
    <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer h-fit">
      <img
        src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Img "
        className="w-full h-auto object-cover rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
        <h1 className="text-2xl font-semibold">Nature Image</h1>
        <p className="mt-2">
          This is a beautiful nature image placeholder. You can replace it with
          your own image.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;

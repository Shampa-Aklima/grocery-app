interface Blog {
  id: number;
  category: string;
  title: string;
  date: string;
}

const BlogCard = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
      {blogs?.map((blog) => (
        <div
          key={blog.id}
          className="w-[387px] h-full bg-white border border-white rounded-xl flex flex-col p-2"
        >
          <div className="w-full h-[260px] bg-[#C4C4C4] rounded-xl"></div>
           <div className="flex flex-col flex-grow">
            <p className="text-gray-600 mt-2">{blog.category}</p>
            <h2 className="text-lg font-semibold mt-1">{blog.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{blog.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

 

export default BlogCard;

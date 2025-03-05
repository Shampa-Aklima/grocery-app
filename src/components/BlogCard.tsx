

  
  interface Blog {
    id: number;
    category: string;
    title: string;
    date: string;
  }
  
  const BlogCard = ({ blogs }: { blogs: Blog[] }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {blogs?.map((blog) => (
            
          <div
            key={blog.id}
            className="w-[370px] h-[260px] bg-slate-200 border border-gray-300 rounded-xl p-4 shadow-md">

            
            <div>
            <p className="text-gray-600">{blog.category}</p>
            <h2 className="text-lg font-semibold mt-2">{blog.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{blog.date}</p>
            </div>
          </div>
          
        ))}
  
      </div>
    );
  };
  
  export default BlogCard;
  
  


const CustomerComment = () => {
  return (
    <div className="h-[233px] w-[270px] mt-5 mb-10">
      <h2 className="text-sm font-semibold uppercase tracking-wider mb-4">
        Customer Comment
      </h2>
      <div className=" bg-[#FFFBEC] rounded-lg p-8">
        <h3 className="text-sm font-bold text-[#202435]">The Best Marketplace</h3>
        <p className="text-sm font-light text-[#71778E] mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </p>
        <div className="flex items-start gap-2">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0"></div>
          <div className="mt-2 flex flex-col">
            <span className="text-sm font-bold text-[#202435]">Tina Mcdonnell</span>
            <span className="text-sm text-gray-500 ml-2">Sales Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerComment;

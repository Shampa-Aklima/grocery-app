import Image from "next/image";

const Newsletter=()=> {
    return (
      <div className="flex items-center bg-instacart-light-green text-white min-w[1200px] mt-10">
        <div className="container mx-auto p-12 md:py-12 flex flex-col md:flex-row">
          <div className="md:w-1/2 space-y-4 flex flex-col justify-center items-start">
            <p className="text-sm font-extralight">$20 discount for your first order</p>
            <h2 className="text-2xl font-semibold">Join our newsletter and get...</h2>
            <p className="text-sm font-extralight">Get our email updates on new products, special promotions and resources.</p>
            <div className="flex mt-6">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 text-gray-700 bg-white rounded-l-md w-full focus:outline-none"
              />
              <button className="bg-instacart-light-green text-white px-4 py-2 rounded-r-md border border-white">Subscribe</button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
          
            <Image
              src="/coupon.png"
              alt=""
              width={420}
              height={240}
              className="flex items-end "
            />
              
             
            </div>
          </div>
        </div>
     
    )
  }
  export default Newsletter;
  
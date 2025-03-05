import Link from "next/link"

const Checkout=()=> {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
               <div className="md:col-span-2 space-y-8">
                    <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Contact</h2>
              <Link href="/login" className="text-sm text-blue-500">
                Log in
              </Link>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Email or mobile phone number"
                className="w-full border border-gray-300 rounded p-3 text-sm"
              />
            </div>
            <div className="flex items-center text-sm">
              <input type="checkbox" id="email-offers" className="mr-2" />
              <label htmlFor="email-offers">Email me with news and offers</label>
            </div>
          </div>

            <div>
            <h2 className="text-lg font-medium mb-4">Delivery</h2>
            <div className="mb-4">
              <label className="block text-sm mb-1">Country/Region</label>
              <select className="w-full border border-gray-300 rounded p-3 text-sm bg-white">
                <option>United States</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="w-full border border-gray-300 rounded p-3 text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full border border-gray-300 rounded p-3 text-sm"
                />
              </div>
            </div>
            <div className="mb-4">
              <input type="text" placeholder="Address" className="w-full border border-gray-300 rounded p-3 text-sm" />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full border border-gray-300 rounded p-3 text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  placeholder="Postal code (optional)"
                  className="w-full border border-gray-300 rounded p-3 text-sm"
                />
              </div>
              <div>
                <input type="text" placeholder="City" className="w-full border border-gray-300 rounded p-3 text-sm" />
              </div>
            </div>
            <div className="flex items-center text-sm">
              <input type="checkbox" id="save-info" className="mr-2" />
              <label htmlFor="save-info">Save this information for next time</label>
            </div>
          </div>

             <div>
            <h2 className="text-lg font-medium mb-4">Shipping method</h2>
            <div className="border border-gray-300 rounded p-3 flex justify-between items-center">
              <span className="text-sm">Standard</span>
              <span className="text-sm font-medium">FREE</span>
            </div>
          </div>

            <div>
            <h2 className="text-lg font-medium mb-2">Payment</h2>
            <p className="text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p>
            <div className="bg-gray-100 p-6 rounded mb-4">
              <div className="flex justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12V22H4V12" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M22 7H2V12H22V7Z"
                    stroke="#000"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 22V7" stroke="#000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
                    stroke="#000"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z"
                    stroke="#000"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-sm text-center">This store can't accept payments right now.</p>
            </div>
            <button className="w-full bg-gray-200 text-gray-800 py-4 rounded font-medium">Pay now</button>
          </div>

          <div className="text-center">
            <Link href="/privacy-policy" className="text-sm text-blue-500">
              Privacy policy
            </Link>
          </div>
        </div>

           <div>
          <div className="border-b pb-4 mb-4">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded mr-3 relative">
                <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  1
                </span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="text-sm">All Natural Italian-Style Chicken Meatballs</h3>
                  <span className="text-sm">$7.25</span>
                </div>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded mr-3 relative">
                <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  2
                </span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="text-sm">Coca-Cola – 2 L Bottle</h3>
                  <span className="text-sm">$3.85</span>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded mr-3 relative">
                <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  3
                </span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="text-sm">Fairlife Lactose-Free 2% Milk</h3>
                  <span className="text-sm">$3.69</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm">Subtotal</span>
              <span className="text-sm">3 items</span>
              <span className="text-sm font-medium">$14.79</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Shipping</span>
              <span className="text-sm font-medium">FREE</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center">
              <span className="text-base font-medium">Total</span>
              <div className="text-right">
                <div className="text-xs text-gray-500">Including $2.46 in taxes</div>
                <div className="text-xl font-medium">$14.79</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
import { Facebook, Instagram, Twitter, RssIcon as Reddit, PinIcon as Pinterest } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2">
          {/* Featured Article */}
          <article className="mb-12">
            <div className="bg-gray-200 aspect-video w-full mb-4"></div>
            <div className="mb-2 text-xs text-gray-500 uppercase">DESIGN</div>
            <h1 className="text-2xl font-bold mb-2">But I must explain to you how all this mistaken idea</h1>
            <div className="text-sm text-gray-500 mb-4">Jan 13 2023 • Brian GRK</div>
            <p className="text-gray-600 mb-4">
              Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros
              laoreet libero, vitae suscipit lorem ipsum sit amet felis. Quisque egestas lorem ut elit feugiat. Quisque
              egestas lorem ut elit feugiat.
            </p>
          </article>

            <article className="mb-12">
            <div className="bg-gray-200 aspect-video w-full mb-4"></div>
            <div className="mb-2 text-xs text-gray-500 uppercase">DESIGN</div>
            <h2 className="text-xl font-bold mb-2">The Problem With Typefaces on the Web</h2>
            <div className="text-sm text-gray-500 mb-4">Jan 13 2023 • Brian GRK</div>
            <p className="text-gray-600 mb-4">
              Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros
              laoreet libero, vitae suscipit lorem ipsum sit amet felis. Quisque egestas lorem ut elit feugiat. Quisque
              egestas lorem ut elit feugiat.
            </p>
          </article>

          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-1">
              <button className="w-8 h-8 flex items-center justify-center bg-teal-500 text-white rounded-full">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-white border rounded-full">2</button>
              <button className="w-8 h-8 flex items-center justify-center bg-white border rounded-full">→</button>
            </div>
          </div>
        </div>

  
        <div>
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4">RECENT POSTS</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 relative">
                  <div className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium">But I must explain to you how all this mistaken</h4>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 relative">
                  <div className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium">The Problem With Typefaces on the Web</h4>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 relative">
                  <div className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium">English Breakfast Tea With Tasty Donut Desserts</h4>
                </div>
              </div>
            </div>
          </div>

    
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4">SOCIAL MEDIA</h3>
            <div className="space-y-2">
              <a href="#" className="flex items-center bg-blue-600 text-white p-2 rounded">
                <Facebook size={18} className="mr-2" />
                <span className="text-sm">FACEBOOK</span>
              </a>
              <a href="#" className="flex items-center bg-pink-600 text-white p-2 rounded">
                <Instagram size={18} className="mr-2" />
                <span className="text-sm">INSTAGRAM</span>
              </a>
              <a href="#" className="flex items-center bg-blue-400 text-white p-2 rounded">
                <Twitter size={18} className="mr-2" />
                <span className="text-sm">TWITTER</span>
              </a>
              <a href="#" className="flex items-center bg-orange-500 text-white p-2 rounded">
                <Reddit size={18} className="mr-2" />
                <span className="text-sm">REDDIT</span>
              </a>
              <a href="#" className="flex items-center bg-red-600 text-white p-2 rounded">
                <Pinterest size={18} className="mr-2" />
                <span className="text-sm">PINTEREST</span>
              </a>
            </div>
          </div>


          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4">WIDGET BANNER</h3>
            <div className="bg-gray-200 h-40 w-full"></div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-4">TAGS</h3>
            <div className="flex flex-wrap gap-2">
              <a href="#" className="text-xs border px-2 py-1 rounded">
                ecommerce
              </a>
              <a href="#" className="text-xs border px-2 py-1 rounded">
                food
              </a>
              <a href="#" className="text-xs border px-2 py-1 rounded">
                grocery
              </a>
              <a href="#" className="text-xs border px-2 py-1 rounded">
                ecommerce
              </a>
              <a href="#" className="text-xs border px-2 py-1 rounded">
                organic
              </a>
              <a href="#" className="text-xs border px-2 py-1 rounded">
                shop
              </a>
              <a href="#" className="text-xs border px-2 py-1 rounded">
                shopify
              </a>
              <a href="#" className="text-xs border px-2 py-1 rounded">
                store
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


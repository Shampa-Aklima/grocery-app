

import { MapPin, Phone, Mail } from "lucide-react"

const ContactPage=()=> {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-medium mb-2">Get In Touch</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat unde quam dolor culpa veritatis
          inventore, sed consequatur cum veniam vel.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-gray-100 p-8 flex flex-col items-center text-center">
          <div className="text-teal-500 mb-4">
            <MapPin size={24} />
          </div>
          <h3 className="font-medium mb-2">102 Street 2714 Donovan</h3>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor site amet discect</p>
        </div>

        <div className="bg-gray-100 p-8 flex flex-col items-center text-center">
          <div className="text-teal-500 mb-4">
            <Phone size={24} />
          </div>
          <h3 className="font-medium mb-2">+02 1234 567 88</h3>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor site amet discect</p>
        </div>

        <div className="bg-gray-100 p-8 flex flex-col items-center text-center">
          <div className="text-teal-500 mb-4">
            <Mail size={24} />
          </div>
          <h3 className="font-medium mb-2">info@example.com</h3>
          <p className="text-gray-600 text-sm">Lorem ipsum dolor site amet discect</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium mb-2">Send Us</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Contact us for all your questions and opinions, or you can solve your problems in a shorter time with our
            contact offices.
          </p>
        </div>

        <form className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Name
              </label>
              <input type="text" id="name" className="w-full p-3 bg-gray-100 rounded" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email *
              </label>
              <input type="email" id="email" className="w-full p-3 bg-gray-100 rounded" required />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm mb-2">
              Phone number
            </label>
            <input type="tel" id="phone" className="w-full p-3 bg-gray-100 rounded" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm mb-2">
              Your message
            </label>
            <textarea id="message" rows={5} className="w-full p-3 bg-gray-100 rounded"></textarea>
          </div>
          <button
            type="submit"
            className="bg-teal-500 text-white px-6 py-2 rounded text-sm hover:bg-teal-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  )
}

export default ContactPage
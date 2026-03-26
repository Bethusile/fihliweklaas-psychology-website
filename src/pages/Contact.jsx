import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <main className="pt-32 pb-24 px-6 bg-[#FDFBF9] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#2D4A31] font-semibold mb-4">
            Get in Touch
          </p>
          <h1 className="text-5xl font-serif mb-6">Contact me</h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            I am here to help. Reach out to schedule a session or to ask any questions 
            about the therapeutic process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column: Contact Info & Map */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#B584B1]">
                  <Mail size={18} />
                  <h3 className="font-medium text-gray-900">Email</h3>
                </div>
                <p className="text-sm text-gray-500">hello@fihliweklaas.co.za</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#B584B1]">
                  <Phone size={18} />
                  <h3 className="font-medium text-gray-900">Phone</h3>
                </div>
                <p className="text-sm text-gray-500">+27 (0) 00 000 0000</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#B584B1]">
                  <MapPin size={18} />
                  <h3 className="font-medium text-gray-900">Location</h3>
                </div>
                <p className="text-sm text-gray-500">Gqeberha / Mthatha</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#B584B1]">
                  <MessageCircle size={18} />
                  <h3 className="font-medium text-gray-900">WhatsApp</h3>
                </div>
                <p className="text-sm text-gray-500">Available for quick queries</p>
              </div>
            </div>

            {/* Simple Map Placeholder */}
            <div className="w-full h-64 bg-gray-100 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
               {/* You can embed a Google Maps iframe here later */}
               <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                 MAP VIEW (GQEBERHA / MTHATHA)
               </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest text-gray-400">Name</label>
                  <input type="text" className="w-full border-b border-gray-200 py-2 focus:border-[#B584B1] outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-widest text-gray-400">Email</label>
                  <input type="email" className="w-full border-b border-gray-200 py-2 focus:border-[#B584B1] outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-gray-400">Subject</label>
                <input type="text" className="w-full border-b border-gray-200 py-2 focus:border-[#B584B1] outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] uppercase tracking-widest text-gray-400">Message</label>
                <textarea rows="4" className="w-full border-b border-gray-200 py-2 focus:border-[#B584B1] outline-none transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-[#1A2C1D] text-white py-4 rounded-full hover:bg-[#243627] transition-colors mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
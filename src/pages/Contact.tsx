import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const leaders = [
    {
      role: "Chief Financial Officer",
      name: "Hitesh Ranpariya",
      email: "hitesh@gmail.com",
      phone: "+91 96625 12697",
    },
    {
      role: "Chief Marketing Officer",
      name: "Krish Kotadiya",
      email: "krish@gmail.com",
      phone: "+91 99981 40607",
    },
    {
      role: "Chief Operating Officer",
      name: "Jashmin Chovatiya",
      email: "jashmin@gmail.com",
      phone: "+91 88662 75204",
    },
    {
      role: "Manager - Marketing",
      name: "Rajesh Shendge",
      email: "rajesh@gmail.com",
      phone: "+91 93736 96951",
    },
  ];

  return (
    <div className="text-gray-900">
      {/* Header */}
      <section className="py-16 px-6 text-center bg-white shadow-sm">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Reach out to Padmaja Technocast LLP. Connect with our leadership team
          or send us a direct message below.
        </p>
      </section>

      {/* Leadership */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Our Leadership
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((person) => (
            <div
              key={person.name}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl p-6 text-center transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {person.role}
              </h3>
              <p className="text-lg font-medium text-gray-800 mb-3">{person.name}</p>
              <p className="flex items-center justify-center gap-2 text-gray-600 mb-2 text-sm">
                <Mail size={16} className="text-red-600" /> {person.email}
              </p>
              <p className="flex items-center justify-center gap-2 text-gray-600 text-sm">
                <Phone size={16} className="text-red-600" /> {person.phone}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-3xl shadow-lg rounded-2xl p-8 border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-red-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-red-600"
              />
            </div>

            {/* Phone + Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-red-600"
              />
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-red-600"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-red-600"
            ></textarea>

            {/* File upload */}
            <div>
              <label className="block mb-2 text-gray-600 text-sm">
                Attach File (optional)
              </label>
              <input
                type="file"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-red-500 transition"
            >
              <Send size={18} /> Submit
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Location</h2>
          <p className="text-gray-600 mb-8">
            Visit our corporate office for inquiries and discussions.
          </p>
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Padmaja Technocast LLP Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.596986536408!2d72.585!3d23.034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPadmaja%20Technocast!5e0!3m2!1sen!2sin!4v1663000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

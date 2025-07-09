'use client'
import { MapPin } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if (isSubmitted) validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || /\d/.test(formData.name)) {
      newErrors.name = 'Name cannot contain numbers';
    }
    if (!formData.email.includes('@')) {
      newErrors.email = 'Email must contain @';
    }
    const wordCount = formData.message.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount < 30) {
      newErrors.message = 'Message must be at least 30 words';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (validateForm()) {
      alert('Message submitted successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      <div className="mt-3">
        <iframe
          className="w-full h-[450px] border-0"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12609.73313540409!2d-122.472866!3d37.803319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey%20Ave%2C%20San%20Francisco%2C%20CA%2094129!5e0!3m2!1sen!2sus!4v1751128114426!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container mx-auto p-6 md:p-12">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-2">Send Us Message</h2>
            <p className="text-gray-600 mb-6">Contact us to get any support or help.</p>
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="block font-semibold mb-1">Your Name (required)</label>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block font-semibold mb-1">Your Email (required)</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-2 rounded"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block font-semibold mb-1">Subject</label>
                <input
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Your Message</label>
                <textarea
                  name="message"
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium nisi feugiat nisi gravida.
            </p>
            <p className="text-gray-600 mb-6 border-b pb-4">
              Praesent efficitur, odio at dictum fringilla, leo dolor ornare nulla, quis condimentum enim arcu id magna.
            </p>

            <h3 className="text-xl font-semibold mb-3">Our Office</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                {/* <span className="text-blue-600 mt-1">📍</span> */}
                <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white'>
                <MapPin />
                </div>
                <p>Address : 105 Street, New City, United State.</p>
              </li>
              <li className="flex items-start gap-3">
                {/* <span className="text-blue-600 mt-1">📞</span> */}
                <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white'>
                
                </div>
                <p>Email: 279-201-8119</p>
              </li>
              <li className="flex items-start gap-3">
                {/* <span className="text-blue-600 mt-1">📧</span> */}
                <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white'>
                {/* <MapPin /> */}
                </div>
                <p>Email: Frankmagicmushroomshop@Gmail.Com</p>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Working Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="mt-1">🕒</span>
                <p>Monday - Friday: 9am to 7pm</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">🕒</span>
                <p>Saturday: 9am to 2pm</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">🕒</span>
                <p>Sunday: Closed</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
  className="w-full h-[300px] flex flex-col justify-center items-center bg-cover bg-center"
  style={{ backgroundImage: "url('https://psychedelicsawarenessshop.com/wp-content/uploads/2019/10/basic-testimonial-bg-placeholder.jpg?id=1693')" }}
>
  <div className="flex flex-col gap-4 justify-center items-center text-white">
    <h3 className="text-2xl md:text-5xl font-semibold">Want to work with us?</h3>
    <p className="text-lg md:text-xl font-bold">Feel free to reach us with the contact form!</p>
    <button className="border-2 border-white p-2 px-4 font-bold hover:bg-white hover:text-black   ease-in-out">
  Contact Us
</button>

  </div>
</div>


    </div>
  );
};

export default Page;

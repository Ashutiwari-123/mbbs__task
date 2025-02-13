import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Globe, GraduationCap, Clock, Phone, Mail, User } from 'lucide-react';

const MBBSLandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: ''
  });

  const countries = [
    {
      name: 'Russia',
      details: 'Top medical universities with modern facilities',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvA93Uqwr95Cq5ZwMMBrcfbzZjp9udZ7zMlQ&'
    },
    {
      name: 'Uzbekistan',
      details: 'Affordable education with quality standards',
      imageUrl: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjJiYXRjaDUta3VsLTAzLmpwZw.jpg'
    },
    {
      name: 'Kazakhstan',
      details: 'World-class medical education infrastructure',
      imageUrl: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjJiYXRjaDUta3VsLTAzLmpwZw.jpg'
    },
    {
      name: 'Philippines',
      details: 'English-medium instruction with clinical exposure',
      imageUrl: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjJiYXRjaDUta3VsLTAzLmpwZw.jpg'
    },
    {
      name: 'Georgia',
      details: 'European standard medical education',
      imageUrl: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjJiYXRjaDUta3VsLTAzLmpwZw.jpg'
    },
    {
      name: 'Kyrgyzstan',
      details: 'Budget-friendly with recognized degrees',
      imageUrl: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjJiYXRjaDUta3VsLTAzLmpwZw.jpg'
    },
    {
      name: 'Egypt',
      details: 'Rich medical heritage with modern approach',
      imageUrl: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjJiYXRjaDUta3VsLTAzLmpwZw.jpg'
    }
  ];

  const benefits = [
    'Globally recognized medical degrees',
    'Affordable education costs',
    'Modern infrastructure and facilities',
    'Diverse cultural exposure',
    'Clinical training opportunities',
    'No entrance exam requirements*'
  ];

  const admissionSteps = [
    'Document verification and eligibility check',
    'University and country selection',
    'Application submission',
    'Offer letter processing',
    'Visa application assistance',
    'Travel and accommodation arrangement'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Study MBBS Abroad
            </h1>
            <p className="text-xl mb-8">
              Begin your medical journey with world-class education at affordable costs
            </p>
            <button  className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>

    
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Study MBBS Abroad?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <CheckCircle className="text-green-500 flex-shrink-0" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

    
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Top Countries for MBBS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country) => (
              <div key={country.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={country.imageUrl}
                  alt={country.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{country.name}</h3>
                  <p className="text-gray-600">{country.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Admission Process
        </h2>
        <div className="max-w-3xl mx-auto">
          {admissionSteps.map((step, index) => (
            <div key={index} className="flex items-center space-x-4 mb-6">
              <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-lg">{step}</p>
            </div>
          ))}
        </div>
      </div>

    

      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Get Started Today
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-900"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-900"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="tel"
                    className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-900"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2">Preferred Country</label>
                <select
                  className="w-full px-4 py-2 rounded-lg text-gray-900"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  required
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>

    

    
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Study MBBS Abroad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MBBSLandingPage;
import React from 'react';
import {
  Brain,
  MessageSquare,
  FileText,
  Shield,
  ArrowRight,
  Linkedin,
  Twitter,
  ChevronRight,
  Database,
  LineChart,
  Lock
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold" style={{ color: '#009688' }}>
              Synapse-Q
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 text-gray-600 hover:text-[#009688] transition-colors">
                About
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-[#009688] transition-colors">
                Features
              </button>
              <button className="px-4 py-2 text-gray-600 hover:text-[#009688] transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Revolutionizing Data Accessibility with AI
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ask natural-language questions and get instant insights from text, voice, images, and structured data—without complex BI tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 text-white rounded-full font-semibold transition-colors flex items-center justify-center gap-2 group" style={{ backgroundColor: '#009688', hover: { backgroundColor: '#00897b' } }}>
                Join the Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 rounded-full font-semibold hover:bg-teal-50 transition-colors" style={{ borderColor: '#009688', color: '#009688' }}>
                Apply for Pilot
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Powerful AI capabilities that transform how you interact with your data
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Natural Language Queries",
                description: "No coding required - just ask questions in plain English"
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Multi-Format Data Support",
                description: "Process text, voice, images, and video seamlessly"
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI-Powered Insights",
                description: "Get actionable analytics powered by advanced AI"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Enterprise-Ready Security",
                description: "Industry-standard compliance and security"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(0, 150, 136, 0.1)', color: '#009688' }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Science Salon Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 md:p-12 text-white" style={{ background: 'linear-gradient(135deg, #009688 0%, #4caf50 100%)' }}>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">Join Us at Data Science Salon</h2>
              <p className="text-lg opacity-90 mb-8">
                Meet our team and discover how Synapse-Q is revolutionizing data intelligence. Don't miss our startup pitch!
              </p>
              <button className="px-8 py-4 bg-white rounded-full font-semibold hover:bg-opacity-90 transition-colors flex items-center gap-2 group" style={{ color: '#009688' }}>
                Schedule a Meeting
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">🚀 Let's Build the Future of AI-Driven Data Intelligence!</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in transforming how businesses interact with their data
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 text-white rounded-full font-semibold transition-colors" style={{ backgroundColor: '#009688', hover: { backgroundColor: '#00897b' } }}>
              Download Investor Deck
            </button>
            <button className="px-8 py-4 border-2 rounded-full font-semibold hover:bg-teal-50 transition-colors" style={{ borderColor: '#009688', color: '#009688' }}>
              Let's Connect
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent"
                style={{ focusRing: { color: '#009688' } }}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent"
                style={{ focusRing: { color: '#009688' } }}
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent"
                style={{ focusRing: { color: '#009688' } }}
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 text-white rounded-full font-semibold transition-colors"
              style={{ backgroundColor: '#009688', hover: { backgroundColor: '#00897b' } }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0" style={{ color: '#009688' }}>
              Synapse-Q
            </div>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#009688]">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#009688]">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600">
            © 2025 Synapse-Q. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
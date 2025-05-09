
import { useState } from 'react';
import { Mail, MapPin, Linkedin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thanks for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1000);
  };
  
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="section-container">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <p className="text-gray-600 mb-8">
              I'm currently available. If you have a project that needs some creative direction, implementation or a Flutter developer, feel free to contact me.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-flutter-blue mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-800">Location</h3>
                  <p className="text-gray-600">Padova, Italy</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-flutter-blue mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a href="mailto:hello@yourflutterdev.com" className="text-flutter-blue hover:underline">
                    sodermariana@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Linkedin className="text-flutter-blue mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-800">Linkedin</h3>
                  <a href="https://www.linkedin.com/in/masoder/" className="text-flutter-blue hover:underline">
                    linkedin.com/in/masoder/
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            {submitMessage ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Send className="text-green-600" size={24} />
                </div>
                <p className="text-lg text-gray-800">{submitMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flutter-blue focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flutter-blue focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-flutter-blue focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flutter-button w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  ) : (
                    <Send size={16} className="mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

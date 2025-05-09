
const Footer = () => {
  const currentYear = new Date().getFullYear();



  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <a href="#home" className="text-xl font-bold text-flutter-blue hover:text-flutter-teal transition-colors">
              <span>Flutter</span>
              <span className="text-flutter-lightBlue">Dev</span>
            </a>
          </div>
        </div>

        <div className="mt-4 text-center text-gray-500 text-sm">
          <p>© {currentYear} All rights reserved.</p>
          <p className="mt-1">Made with ❤️ using Flutter & React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

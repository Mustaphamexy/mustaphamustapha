const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-6 md:px-12 lg:px-24 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-300 text-sm md:text-base">
          © {currentYear} <span className="text-primary font-semibold" style={{ color: '#a168db' }}>Mustapha Mustapha</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
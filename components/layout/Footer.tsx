const Footer = () => {
  return (
    <footer className="py-8 mt-8 border-t">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 
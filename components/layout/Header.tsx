import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-4 mb-8 border-b">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            My Blog
          </Link>
          <div>
            <Link href="/posts" className="ml-4">
              All Posts
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 
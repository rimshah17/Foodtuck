const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-center items-center xl:justify-center  sm:justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="mainColor">Food</span>tuck
        </div>
        <div className="md:hidden sm:block sm:text-2xl"> 
        <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#ff9f0d
"/>
        </svg>
        </div>
        </div>
      <div className="container mx-auto flex justify-between items-center md:justify-between sm:justify-center ">
      

        {/* Navigation Menu */}
        <nav className="flex space-x-6 md:block sm:hidden">
          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          <Link href="/menu" className="hover:text-orange-500 transition">
            Menu
          </Link>
          <Link href="about" className="hover:text-orange-500 transition">
            About
          </Link>
          <Link href="/blog" className="hover:text-orange-500 transition">
            Blog
          </Link>
          <Link href="/shop" className="hover:text-orange-500 transition">
            Shop
          </Link>
          <Link href="/chef" className="hover:text-orange-500 transition">
            Chef
          </Link>
          
          <Link href="/contact" className="hover:text-orange-500 transition">
            Contact
          </Link>
        </nav>

        {/* Search Bar and Icons */}
        <div className="flex items-center space-x-4 ">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border border-orange-500 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="absolute top-1/2 right-3 transform -translate-y-1/2 text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                // strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M16.7 10.6a6.1 6.1 0 1 0-6.1 6.1 6.1 6.1 0 0 0 6.1-6.1z"
                />
              </svg>
            </button>
          </div>

          {/* Cart Icon */}
          <Link href="/cart"  className="text-orange-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5787 6.75H4.42122C4.23665 6.75 4.05856 6.81806 3.92103 6.94115C3.7835 7.06425 3.69619 7.23373 3.67581 7.41718L2.34248 19.4172C2.33083 19.522 2.34143 19.6281 2.37357 19.7286C2.40572 19.829 2.4587 19.9216 2.52904 20.0002C2.59939 20.0788 2.68553 20.1417 2.78182 20.1847C2.87812 20.2278 2.98241 20.25 3.08789 20.25H20.912C21.0175 20.25 21.1218 20.2278 21.2181 20.1847C21.3144 20.1417 21.4005 20.0788 21.4708 20.0002C21.5412 19.9216 21.5942 19.829 21.6263 19.7286C21.6585 19.6281 21.6691 19.522 21.6574 19.4172L20.3241 7.41718C20.3037 7.23373 20.2164 7.06425 20.0789 6.94115C19.9413 6.81806 19.7632 6.75 19.5787 6.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.25 9.75V6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V9.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

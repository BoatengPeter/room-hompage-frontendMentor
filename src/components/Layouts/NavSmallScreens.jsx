const NavSmallScreens = ({ handleCloseNav }) => {
  return (
    <>
      <div className="md:hidden ">
        <div className="absolute top-0 w-full h-dvh bg-black opacity-65 blur-sm z-10"></div>
        <div className="absolute top-0 w-full flex items-center bg-White py-10 px-5 z-20">
          <div className="mr-auto" onClick={handleCloseNav}>
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
                fill="#000"
                fillRule="evenodd"
                opacity=".201"
              />
            </svg>
          </div>
          <div>
            <ul className="flex text-black text-base items-center gap-5">
              <li>
                <a href="#"> Home</a>
              </li>
              <li>
                <a href="#"> Shop</a>
              </li>
              <li>
                <a href="#"> About</a>
              </li>
              <li>
                <a href="#"> Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavSmallScreens;

import Logo from 'assets/images/logo-july-dark-1.svg';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { MdAccountCircle, MdOutlineFavoriteBorder, MdOutlineShoppingBag } from 'react-icons/md';

const Header = () => {
  return (
    <header>
      <div className="container py-5 flex justify-between items-center">
        <div className="flex items-center">
          <div className="pr-8">
            <img src={Logo} alt="Logo July" />
          </div>

          <nav className="px-3 text-lg font-normal space-x-3">
            {[
              ['Home', '/'],
              ['Shop', '/'],
              ['About us', '/'],
              ['Contact', '/'],
            ].map(([title, url]) => (
              <Link key={title} to={url}>
                {title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex gap-[24px]">
          <FiSearch size="24px" />
          <MdAccountCircle size="24px" />
          <MdOutlineFavoriteBorder size="24px" />
          <MdOutlineShoppingBag size="24px" />
        </div>
      </div>
    </header>
  );
};

export default Header;

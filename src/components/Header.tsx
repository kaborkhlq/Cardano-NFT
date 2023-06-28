const Header = () => {
  return (
    <header className="header z-10">
      <div className="flex flex-wrap items-center justify-between container px-4 py-6 mx-auto">
        <div className="flex items-center">
          <a className="font-logo ml-3 text-white uppercase text-sm md:text-lg" href="/">
            Poker Club
          </a>
        </div>
        <ul className="flex text-sm w-auto">
          <li className="mt-0 lg:ml-12">
            <a href="/" target="_blank" rel="noopener noreferrer" className="block text-white">
              <img src={process.env.PUBLIC_URL + '/icon/discord.svg'} />
            </a>
          </li>
          <li className="mt-0 ml-4 lg:ml-12">
            <a href="/" target="_blank" rel="noopener noreferrer" className="block text-white">
              <img src={process.env.PUBLIC_URL + '/icon/twitter.svg'} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
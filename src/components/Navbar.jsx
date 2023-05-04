import reisList from '../data/navbarItems.json'
import { For } from 'solid-js'
import logo from '../assets/bookmark.svg'
import Search from './Search'
import { discordIcon, githubIcon, magnifyingGlass, vercelIcon } from '../assets'

const Navbar = () => {
  return (
    <nav class='flex items-center bg-slate-900 justify-evenly h-16'>
      <div class='flex gap-x-3'>
        <div class='flex text-teal-600 text-xl items-center font-poppins'>
          <a class='flex text-teal-600 text-xl items-center font-poppins' href="/">
            <img
              width={30}
              height={30}
              src={logo}
              alt='Atasözleri Logo'
            />
            <p>ATASÖZLERİ</p>
          </a>
        </div>
        <Search />
      </div>
      {/*
      <a class='navbar-item text-[14px]' href="#">
        Sözlük <i>(Daha yapmadim)</i>
      </a>
      <a class='navbar-item text-[14px]' href="#">
        <img width={30} height={30} src={discordIcon} alt="Discord Logo" />
      </a>
      <a class='navbar-item text-[14px]' href="https://github.com/Null313">
        <img width={30} height={30} src={githubIcon} alt="Github Logo" />
      </a>
      <a class='navbar-item text-[14px]' href="https://vercel.com">
        <img width={30} height={30} src={vercelIcon} alt="Vercel Logo" />
      </a>
      */}
      <button
        class='xs:block md:hidden'
        id='menu'
        onclick={() => document}
      >
        <img
          src={magnifyingGlass}
          alt='Menü'
        />
      </button>
    </nav>
  )
}

export default Navbar

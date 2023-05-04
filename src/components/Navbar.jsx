import reisList from '../data/navbarItems.json'
import { For } from 'solid-js'
import logo from '../assets/bookmark.svg'
import Search from './Search'
import { magnifyingGlass } from '../assets'

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
      {reisList.map(item => (
        <a
          class='navbar-item text-[14px] '
          href={item?.link ?? '#'}
        >
          {item?.title ?? 'Başlık yok'}
        </a>
      ))}
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

import reisList from '../data/navbarItems.json'
import { For } from 'solid-js'
import logo from '../assets/bookmark.svg'
import Search from './Search'

const Navbar = () => {
  return (
    <nav class='flex items-center bg-slate-900 justify-evenly h-16'>
      <div class='flex gap-x-3'>
        <div class='flex text-teal-600 text-xl items-center font-poppins'>
          <img width={30} height={30} src={logo} alt="Solid Logo" />
          ATASÖZLERİ
        </div>
        <Search/>
      </div>
      {reisList.map(item => (
        <a class='navbar-item text-[14px] ' href={item?.link ?? '#'}>{item?.title ?? 'No title provided'}</a>
      ))}
      <button class='xs:block hidden' id="menu">

      </button>
    </nav>
  )
}

export default Navbar
import { createSignal } from 'solid-js'
import logo from './logo.svg'
import { Navbar, Modal, Button, Search } from './components'
import Atasozu from './components/Atasozu'
import atasozleri from './data/atasozleri.json'
import { magnifyingGlass } from './assets'
import Footer from './components/Footer'
import SearchModal from './components/SearchModal'

const App = () => {
  const [homeSearch, setHomeSearch] = createSignal(false)
  return (
    <div> 
      <Navbar/>
      <div class='w-full h-[25rem] flex'>
        <div class='w-1/3 flex items-center gap-x-5'>
          <h1 class=' ml-12 flex flex-col text-7xl'>
             <span class='text-teal-500'>En Gelişmiş</span>
            <span>Atasözü Kitaplığı</span>
          </h1>
          <div class='flex gap-x-2'>
            <Button classes={''} hasImage={true} image={magnifyingGlass} label={'Ara'} onClick={() => setHomeSearch(prev => !prev)} />
            <SearchModal close={setHomeSearch} toggleHandler={homeSearch} title={'Ara'} />
          </div>
        </div>
        <div class='bg-gradient-to-r w-2/3 from-transparent to-teal-600 h-[inherit]' id="gradient"/>
      </div>
      <div class='bg-slate-700 h-72 w-full' >
        <div class='h-32 ml-5 flex'>
          <div class='h-[inherit] flex mt-5'>
            <div class='w-2 h-[inherit] bg-slate-200' />
            <div class='ml-3 w-96 flex-wrap' id="yuzlerce--content">
              <h1 class='text-4xl text-white'>Yüzlerce Atasözü</h1>
              <p className="text-white text-lg">
                Yüzlerce atasözü içeren kütüphanemiz içerisinden ne dilersen ara
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
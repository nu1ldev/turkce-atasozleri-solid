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
      <Navbar />
      <div class='w-full h-[25rem] flex'>
        <div class='w-1/3 flex items-center gap-x-5'>
          <h1 class=' ml-12 flex flex-col text-7xl'>
            <span class='text-teal-500'>Gelişmiş</span>
            <span>Atasözü Kitaplığı</span>
          </h1>
          <div class='xs:flex-col flex xs:gap-y-2 gap-x-2'>
            <Button
              hasImage={true}
              image={magnifyingGlass}
              label={'Ara'}
              onClick={() => setHomeSearch(prev => !prev)}
              classes={''}
            />
            <SearchModal
              close={setHomeSearch}
              toggleHandler={homeSearch}
            />
          </div>
        </div>
        <div
          class='bg-gradient-to-r w-2/3 from-transparent via-teal-500 to-teal-700 h-[inherit] xs:hidden md:block'
          id='gradient'
        />
      </div>
      <div class='bg-slate-700 h-72 w-full'>
        <div class='h-32 ml-[8rem] flex'>
          <div class='h-[inherit] flex mt-5'>
            <div class='w-2 h-[inherit] bg-slate-200' />
            <div
              class='ml-3 w-96 flex-wrap'
              id='onlarca--content'
            >
              <h1 class='text-4xl text-white'>Onlarca Atasözü</h1>
              <p className='text-white text-lg'>
                Onlarca atasözü içeren kütüphanemiz içerisinden ne dilerseniz arayın
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class='bg-slate-800 h-72 w-full'>
        <div class='h-32 mr-[8rem] flex justify-end'>
          <div class='h-[inherit] flex flex-row-reverse text-end mt-5'>
            <div class='w-2 h-[inherit] bg-slate-200' />
            <div class='mr-3 w-96 flex-wrap' id='hizli--arama'>
              <h1 class='text-4xl text-white'>Hızlı Arama</h1>
              <p className='text-white text-lg'>
                Gelişmiş arama bölümümüzde istediğiniz atasözünü arayın <i>(Bulunacağının garantisi verilmemektedir, aslında fazla atasözü de yok)</i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class='bg-slate-900 h-80 w-full'>
        <div class='h-72 ml-[8rem] flex'>
          <div class='h-[inherit] flex mt-5'>
            <div class='w-2 h-[inherit] bg-slate-200' />
            <div
              class='ml-3 w-96 flex-wrap'
              id='site--hakkinda'
            >
              <h1 class='text-4xl text-white'>Bu Site Hakkında</h1>
              <p className='text-white text-lg'>
                Bu site, <a href="https://github.com/Null313">Null</a> tarafından sadece 2 günde 
                <span class='italic text-zinc-400'>(3 Mayıs 2023 ve 4 Mayıs 2023 tarihleri arasında,){' '}</span>
                 2022 - 2023 Eğitim Öğretim yıllarında Türkçe dersinin proje ödevi olarak hazırlanmıştır.
                (Aslında farklı bir projeyle buraya gelicektim fakat bir gece fikrim değişti ve acaba 2 günde
                 yapabilir miyim diye düşündüm, ve oldu da. Bence şimdiye kadar en çok özendiğim ve en çok uğraş
                  verdiğim projem bu oldu.)
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
/**
 * Bari 100 satır olsun be
 */
import { useParams } from '@solidjs/router'
import unslug from 'unslug'
import Navbar from './Navbar'
import { teal1, teal2, teal3, teal4, teal5 } from '../assets'
import { atasozleriGelismis } from '../data'
import didyoumean2 from 'didyoumean2'

const backgrounds = [teal1, teal2, teal3]

const getRandomImage = () => {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)]
}

const titleCase = (str) => {
  const splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  // Directly return the joined string
  return splitStr.join(' '); 
}

const Atasozu = () => {
  const params = useParams()
  const unslugged = unslug(params.slug)
  return (
    <div class='h-full'>
      <Navbar />
      <div class='w-full flex flex-row'>
        <div class='grow'>
          <h1 class='text-5xl text-center font-barlow'>
            {titleCase(atasozleriGelismis.find(item => item.sozum == didyoumean2(params.slug, atasozleriGelismis.map(item => item.sozum))).sozum)}
          </h1>
          <div class='' id='anahtar-kelimeler'>
            <div class='flex gap-x-3 w-64'>
              <div class='bg-teal-600 w-2 h-20' />
              <div>
                <span class='text-slate-950 text-2xl'>Anahtar kelime/kelimeler:</span>
                <p>{atasozleriGelismis.find(item => item.sozum == didyoumean2(params.slug, atasozleriGelismis.map(item => item.sozum))).anahtar}</p>
              </div>
            </div>
          </div>
        </div>
        <div class='h-[1000px]'>
          <img width={960} height={3000} src={getRandomImage()} alt="Background Image" />
        </div>
      </div>
    </div>
  )
}

export default Atasozu
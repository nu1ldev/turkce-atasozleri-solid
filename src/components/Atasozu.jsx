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

const titleCase = str => {
  const splitStr = str.toLowerCase().split(' ')
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
  }
  // Directly return the joined string
  return splitStr.join(' ')
}

const Atasozu = () => {
  const params = useParams()
  const unslugged = unslug(params.slug)
  return (
    <div class='font-barlow'>
      <Navbar />
      <div class='flex flex-col justify-center gap-y-5 '>
        <h1 class='text-5xl text-center font-barlow'>
          {titleCase(atasozleriGelismis.find(item => item.sozum == didyoumean2(params.slug, atasozleriGelismis.map(item => item.sozum))).sozum)}
        </h1>
        <div class='text-center text-xl' id='anahtar-kelimeler'>
          <span class='text-rose-600'>Anahtar kelime/kelimeler:</span> {titleCase(atasozleriGelismis.find(item => item.sozum == didyoumean2(params.slug, atasozleriGelismis.map(item => item.sozum))).anahtar)}
        </div>
        <div class='text-center text-3xl' id="anlami">
          <span class='text-rose-600'>Anlamı:</span> {titleCase(atasozleriGelismis.find(item => item.sozum == didyoumean2(params.slug, atasozleriGelismis.map(item => item.sozum))).anlami)}
        </div>
      </div>
    </div>
  )
}

export default Atasozu

import { atasozleriGelismis } from './src/data'
import didyoumean2 from 'didyoumean2'

console.log(didyoumean2('Ac Yaninda Sarpin Kurcalanmaz', atasozleriGelismis.map(item => {
  return item.sozum
})))
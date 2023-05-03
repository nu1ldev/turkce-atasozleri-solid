import { createSignal } from 'solid-js'
import { magnifyingGlass } from '../assets'
import SearchModal from './SearchModal'

const Search = () => {
  const [isShown, setIsShown] = createSignal(false)
  return (
    <div>
      <button class='flex gap-x-2 py-2 px-3 text-white bg-gray-700 rounded' onclick={() => setIsShown(prev => !prev)}>
        <img class='fill-gray-500' src={magnifyingGlass} alt="Search Icon" />
        <span>Ara</span>
      </button>
      {isShown() && (
        <div id="modal">
          <SearchModal toggleHandler={isShown} close={setIsShown} title='Search'/>
        </div>
      )}
    </div>
  )
}

export default Search
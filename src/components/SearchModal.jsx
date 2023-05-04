import { createSignal } from 'solid-js'
import slug from 'slug'
import closeIcon from '../assets/close.svg'
import { atasozleriGelismis } from '../data'

const SearchModal = ({ toggleHandler, close }) => {
  /**
   * ! close: setter function, toggleHandler: actual value
   */
  const [query, setQuery] = createSignal('')
  return (
    <div>
      {toggleHandler() && (
        <div
          id='modal-bg'
          class='h-full w-full bg-slate-700/60 items-center flex justify-center absolute z-20 top-0 left-0'
        >
          <div
            id='inside-box'
            class='h-[45rem] w-[70rem] rounded-[12px] bg-slate-500 text-white p-6 flex flex-col gap-y-3'
          >
            <div
              id='top'
              class='flex gap-x-1'
            >
              <button
                class='bg-transparent hover:bg-slate-600/60 py-1 px-2 rounded-md transition'
                onclick={() => close()}
              >
                <img
                  src={closeIcon}
                  alt='Kapat'
                />
              </button>
              <h1 class='text-2xl flex font-barlow'>Ara</h1>
            </div>
            <div id='middle'>
              <input
                type='text'
                placeholder={'Ara'}
                onChange={evt => setQuery(evt.currentTarget.value)}
                class='py-3 px-4 rounded focus:ring-teal-700 focus:ring-4 placeholder:text-gray-600 transition focus:placeholder:text-gray-800 bg-slate-400 outline-none text-lg w-full text-gray-800'
              />
              <div
                class='flex flex-col gap-y-3'
                id='arama-sonucu'
              >
                {atasozleriGelismis
                  .filter(item =>
                    item.sozum.toLowerCase().includes(query().toLowerCase())
                  )
                  .map(item => {
                    return (
                      <div class='bg-slate-700 text-white font-poppins pl-4 flex items-center h-12 w-full rounded-lg'>
                        <a href={`/${slug(item.sozum)}`}>{item.sozum}</a>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchModal

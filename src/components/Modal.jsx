import Input from './Input'

const Modal = ({ title, toggleHandler, close, hasText, text }) => {
  /**
   * ! close: setter function, toggleHandler: actual value
   */
  return (
    <div>
      {toggleHandler() && (
        <div
          id='modal-bg'
          class='h-full w-full bg-slate-700/60 items-center flex justify-center absolute z-20 top-0 left-0'
        >
          <div
            id='inside-box'
            class='h-80 w-80 rounded-[12px] bg-slate-500 text-white p-6 flex flex-col gap-y-3'
          >
            <div
              id='top'
              class='flex gap-x-1'
            >
              <button
                class='bg-transparent hover:bg-slate-600/60 py-1 px-3 rounded-xl transition'
                onclick={() => close()}
              >
                X
              </button>
              <h1 class='text-2xl flex font-barlow'>{title}</h1>
            </div>
            <div id='middle'>
              {hasText ? (
                <div>
                  <p class='break-words'>{text}</p>
                </div>
              ) : (
                <div>
                  <Input label={'Atasözü'} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal

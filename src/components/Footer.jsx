import { createSignal } from "solid-js"
import { discordIcon, githubIcon, vercelIcon } from "../assets"

const Footer = () => {
  const [isCopiedOnePointFiveSecAgo, setIsCopiedOnePointFiveSecAgo] = createSignal(false)
  return (
    <div id='footer' class='h-[10rem] bg-slate-900'>
      <div class='flex text-white gap-x-10 bottom-0'id='bottom'>
        <div class='flex flex-col gap-y-2 ml-4 mt-2'>
          <a class='text-white hover:text-zinc-300 cursor-pointer' href='https://github.com/Null313'>
            <img width={30} height={30} src={githubIcon} alt="Github Logo" />
          </a>
          <a class='text-white hover:text-zinc-300 cursor-pointer' href="https://vercel.com">
            <img width={30} height={30} src={vercelIcon} alt="Vercel Logo" />
          </a>
          <div class="flex gap-x-1 items-center group cursor-pointer" onclick={async () => {
            await navigator.clipboard.writeText('null313#8233')
            setIsCopiedOnePointFiveSecAgo(prev => !prev)
            setTimeout(() => {
              setIsCopiedOnePointFiveSecAgo(prev => !prev)
            }, 1500)
          }}>
            <div class="group-hover:visible invisible bg-slate-600 transition-all rounded absolute z-10 py-1 px-2 mb-10 ml-7">
              {isCopiedOnePointFiveSecAgo() ? 'Kopyalandı!' : 'Kopyala'}
            </div>
            <img width={30} height={30} src={discordIcon} alt="Discord Logo" />
            <p>null313#8233</p>
          </div>
        </div>
        <p>
          <a class='text-teal-500 transition hover:text-teal-700 hover:underline' href='https://github.com/Null313'>Null</a>{' '}tarafından bir proje | {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}

export default Footer

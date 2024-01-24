import './styles/main.css'
import LogoImg from './assets/logo-nlw-esports.png'
import { MagnifyingGlassPlus } from 'phosphor-react'

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={LogoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu duo está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-1.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 absolute bg-game-gradient bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>LoL</strong>
            <span className='text-sm text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-2.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 absolute bg-game-gradient bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-sm text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-3.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 absolute bg-game-gradient bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>CS</strong>
            <span className='text-sm text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-4.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 absolute bg-game-gradient bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-sm text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-5.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 absolute bg-game-gradient bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-sm text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/game-6.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 absolute bg-game-gradient bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>WoW</strong>
            <span className='text-sm text-zinc-300 block mt-1'>4 anúncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 self-stretch mt-8 rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players</span>
          </div>
          
          <button className='py-3 px-4 bg-violet-500 text-white rounded flex items-center gap-3 hover:bg-violet-600'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

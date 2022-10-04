import './styles/main.css'
import logoImg from './assets/logo-nlw-esports.svg'
import lupaIcon from './assets/lupa-anuncio.svg'
import controllerImg from './assets/GameController.svg'

import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import plugin from 'tailwindcss/plugin'

import { GameCard } from './components/GameCard'

interface gameProps{
  id: string,
  name: string,
  url: string,
  _count: {
      ads: number
  }
}
function App() {
  const [game, stateGame] = useState<gameProps[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [activateWeekDays, setActivateWeekDays] = useState<string[]>([])
  function openModal() {
    setIsOpen(true)
  }
  useEffect(()=>{
    fetch('http://127.0.0.1:3333/games')
      .then(response => response.json())
      .then(data => stateGame(data))
  }, [])
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} />

      <h1 className="font-black text-6xl text-white mt-20">
        Seu{" "}
        <span className="bg-nlwGradient text-transparent bg-clip-text">
          duo
        </span>{" "}
        está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {game.map((game) => {
          console.log(game);
          return (
            <GameCard key={game.id} name={game.name} url={game.url} ads={game._count.ads} />
          );
        })}
      </div>
      <div className='bg-nlwGradient self-stretch pt-1 mt-8 rounded-lg'>
        <div className='bg-[#2A2634] py-6 px-8 rounded-md flex flex-row justify-between '>
          <div>
            <strong className='block text-white font-black text-2xl'>Não encontrou seu duo?</strong>
            <span className='block text-zinc-400'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='px-4 flex bg-violet-500 gap-3 rounded-md items-center' onClick={()=>{
            openModal()
          }}>
            <img src={lupaIcon}/>
            <span className='text-white'>Publicar anúncio</span>
          </button>
        </div>
      </div> 
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-[#2A2634] px-10 py-8 rounded-lg w-[520px]">
            <Dialog.Title className="text-3xl font-semibold text-white mb-8">Publique um anúncio</Dialog.Title>
            <form className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="" className='font-semibold text-white '>Qual o game?</label>
                <select defaultValue="" name="" id="" className='bg-zinc-900 placeholder:text-zinc-500 rounded px-4 py-3 placeholder:text-sm text-white'>
                  <option value="" disabled className='text-zinc-500'>Selecione o game que deseja jogar</option>
                  {game.map((gameElement) => <option key={gameElement.id} value={gameElement.id}>{gameElement.name}</option>)}
                </select>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="" className='font-semibold text-white '>Seu nome (ou nickname)</label>
                <input type="text" placeholder='Como te chamam dentro do game?' className='bg-zinc-900 placeholder:text-zinc-500 rounded px-4 py-3 placeholder:text-sm text-white'/>
              </div>
              <div className='flex gap-1'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="" className='font-semibold text-white '>Joga há quantos anos?</label>
                  <input type="text" placeholder='Tudo bem ser ZERO' className='bg-zinc-900 placeholder:text-zinc-500 rounded px-4 py-3 placeholder:text-sm text-white'/>
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="" className='font-semibold text-white'>Qual seu discord?</label>
                  <input type="text" placeholder='Usuario#0000' className='bg-zinc-900 placeholder:text-zinc-500 rounded px-4 py-3 placeholder:text-sm text-white w-[100%]'/>
                </div>
              </div>
              <div className='flex justify-between'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="" className='font-semibold text-white '>Quando costuma jogar?</label>
                  <div>
                  <ToggleGroup.Root type='multiple' className='grid grid-cols-4 gap-2' onValueChange={setActivateWeekDays}>
                    <ToggleGroup.Item value='0' title='Domingo' className={`text-white font-bold px-3 py-2 rounded ${activateWeekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}>D</ToggleGroup.Item>
                    <ToggleGroup.Item value='1' title='Segunda' className={`text-white font-bold px-3 py-2 rounded ${activateWeekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
                    <ToggleGroup.Item value='2' title='Terça' className={`text-white font-bold px-3 py-2 rounded ${activateWeekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}>T</ToggleGroup.Item>
                    <ToggleGroup.Item value='3' title='Quarta' className={`text-white font-bold px-3 py-2 rounded ${activateWeekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}>Q</ToggleGroup.Item>
                    <ToggleGroup.Item value='4' title='Quinta' className={`text-white font-bold px-3 py-2 rounded ${activateWeekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}>Q</ToggleGroup.Item>
                    <ToggleGroup.Item value='5' title='Sexta' className={`text-white font-bold px-3 py-2 rounded ${activateWeekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
                    <ToggleGroup.Item value='6' title='Sábado' className={`text-white font-bold px-3 py-2 rounded ${activateWeekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
                  </ToggleGroup.Root>
                  </div>
                </div>
                <div className='flex flex-col gap-2 self-start'>
                  <label htmlFor="" className='font-semibold text-white '>Qual horário do dia?</label>
                  <div className='flex gap-2'>
                    <input type="time" placeholder='De' className='bg-zinc-900 placeholder:text-zinc-500 rounded px-4 py-3 placeholder:text-sm text-white'/>
                    <input type="time" placeholder='Até' className='bg-zinc-900 placeholder:text-zinc-500 rounded px-4 py-3 placeholder:text-sm text-white'/>
                  </div>
                </div>
              </div>
              <div className='flex gap-2'>
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className='text-white text-sm font-normal'>Costumo me conectar ao chat de voz</label>
              </div>
              <div className='flex gap-4 justify-end'>
                <button className='bg-zinc-500 text-white py-3 px-5 rounded-md font-semibold' onClick={() => setIsOpen(false)}>Cancelar</button>
                <button className='bg-violet-500 text-white py-3 px-5 rounded-md font-semibold flex gap-2'><img src={controllerImg}/> Encontrar duo</button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}

export default App

import lupaIcon from '../assets/lupa-anuncio.svg'
export function CreateAdBanner(openModal: Function){
    return (
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
    )
}
interface GameCardProps {
    name: string,
    url: string,
    ads: number

}
export function GameCard(props: GameCardProps){
    return (
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src={props.url}/>
          <div className='pt-16 pl-4 pb-4 absolute bg-games-name-gradient bottom-0 left-0 right-0'>
            <strong className='text-white block font-bold'>{props.name}</strong>
            <span className='text-zinc-300 text-sm block'>{props.ads} anúncios</span>
          </div>
        </a>
    )
}
import { Link, useNavigate } from "react-router-dom"

export default function Header() {
  const navigate = useNavigate()
  return (
    <header>
      <h1 className='border-t-[50px] border-t-[red] bg-black text-white text-[40px] text-center'>포켓몬 도감</h1>
      <nav className='py-[10px] border-b-[3px] border-b-black flex gap-[20px] justify-center'>
        <Link to={'/'}>메인</Link>
        <Link to={'/favorite'}>찜목록</Link>
        <div>
          <input onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)} className='w-[120px] border-b border-[darkgray] px-2' />
          <span>🔎</span>
        </div>
      </nav>
    </header>
  )
}
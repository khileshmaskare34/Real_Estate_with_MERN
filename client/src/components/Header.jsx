import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Khilesh</span>
                <span className='text-slate-700'>Estate</span>
            </h1>
            <form className='bg-slate-100 p-3 items-center rounded-lg flex'>
                <input className='bg-transparent outline-none w-24 sm:w-64' type="search" placeholder='Search...' />
                <FaSearch className='text-slate-600' />
            </form>
            <ul className='flex gap-6'>
                <Link to="/">
                  <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
                </Link>
                <Link to="/about">
                  <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
                </Link>
                <Link to="/profile">
                  <li className='hidden sm:inline text-slate-700 hover:underline'>Profile</li>
                </Link>
                <Link to="/signup">
                  <li className='hidden sm:inline text-slate-700 hover:underline'>SignUp</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header
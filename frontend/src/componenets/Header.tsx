import React from 'react'

const Header = () => {
    // need to do 1.connect the searchbar and make a small menu that will filtre clients by id,name,number,email 
    //button of singup access only for admin
    //as well need to change when user login to logou
    // admin befor login: singup , after: singup,logout
    // employee befor login: singup , after:logout
    const menu = [
        { name: 'Home', href: '/' },
        { name: 'Leads', href: '/leads' },
    ]
  return (
    <header className='bg-slate-300 z-10'>
        <nav className='flex justify-between items-center w-[98%]  mx-auto p-2 '>
            {/* name */}
            <div>
                <h1>
                    MyCrm
                </h1>
            </div>
            {/* menu */}
            <div>
                <ul className='flex items-center gap-4'>
                    {menu.map(item=>(
                        <li >
                        <a href={item.href} className='hover:text-blue-600 cursor-pointer'>{item.name}</a>
                    </li>
                    ))}               
                </ul>
            </div >
            {/* searchbar and button */}
            <div  className='flex items-center gap-2' >
            <input   className='p-1  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 '
            type='text'
            placeholder='Search...'/>
            <button className='bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-400'>
                <a href='/signup'>Sign up</a>
            </button>
            <button className='bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-400'>
                <a href='/signin'>Sign in</a>
            </button>
            </div>
        </nav>
    </header>
  )
}

export default Header
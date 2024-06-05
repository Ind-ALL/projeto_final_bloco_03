import {ShoppingCart, User } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar(){  

return(
    <>
        <div className='
            w-full 
            bg-sky-900  
            text-white 
            flex 
            justify-center 
            py-4
            px-4
        '>
            <div className="
                container 
                flex 
                justify-between 
                text-lg
            ">
                <Link to='/home'>
                    <img
                        src="src/assets/logo-nome-img.png"
                        alt="Logo"
                        className='w-40'
                    />
                </Link>

                <div className='flex gap-4 py-4'>
                    <Link to='/categoria' className='hover:underline cursor-pointer hover:text-amber-400'>Categorias</Link>
                    <Link to='/cadastrarCategoria' className='hover:underline cursor-pointer hover:text-amber-400'>Cadastra Categoria</Link>
                    <User size={32} weight='bold' />
                    <ShoppingCart size={32} weight='bold' />
                </div>
            </div>
        </div>
</>
)
}

export default Navbar
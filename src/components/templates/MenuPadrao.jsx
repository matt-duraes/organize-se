import { List } from "@phosphor-icons/react"

export const MenuPadrao = () => {
    return (
        <header className="w-full bg-gray-1000 lg:sticky lg:top-0">
            <nav className="h-28 max-w-[75.875rem]  flex justify-around items-center px-10 mobile:px-4 text-white m-auto relative z-40 w-full lg:sticky lg:top-0 border-b-[1px] border-gray-800 ">
            <figure className="w-1/3 h-full flex items-center">
                <img src="src/assets/logo.png" alt="teste" className="w-[216px]"/>
            </figure>
            <div className="flex-1">
                <ul className="flex flex-row justify-end items-center gap-4  text-[1.2rem] mobile:hidden">
                    <li className="hover:text-[#6ec1e5]">
                        <a href="#">Sobre</a>
                    </li>
                    <li className="hover:text-[#6ec1e5]">
                        <a href="#">Serviços</a>
                    </li>
                    <li className="hover:text-[#6ec1e5]">
                        <a href="#">Contato</a>
                    </li>
                    <li className="hover:text-[#6ec1e5]">
                        <a href="#">Login</a>
                    </li>
                </ul>
                <p className="hidden mobile:flex items-center justify-end">
                    <List size={32} />
                </p>
            </div>
        </nav>

        </header>
        
        
    )
}
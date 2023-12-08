export const MenuPadrao = () => {
    return (
        <nav className="w-full h-28 flex justify-around items-center px-20 bg-black text-white m-auto">
            <figure className="w-1/3 h-full flex items-center">
                <img src="src/assets/logo.png" alt="teste" className="w-2/3"/>
            </figure>
            <div className="flex-1">
                <ul className="flex flex-row justify-end items-center gap-4  text-xl">
                    <li className="hover:text-blue-400">
                        <a href="#">Home</a>
                    </li>
                    <li className="hover:text-blue-400">
                        <a href="#">Contato</a>
                    </li>
                    <li className="hover:text-blue-400">
                        <a href="#">Sobre</a>
                    </li>
                    <li className="hover:text-blue-400">
                        <a href="#">Serviços</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
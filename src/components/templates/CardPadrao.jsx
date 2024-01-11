export const CardPadrao = ({icone, tituloPadrao, texto, link = '', textoLink}) => {
    const renderLink = link !== '';

    return (
        <div className="bg-gray-900 w-[33%] p-[20px] pb-[39px] mobile:p-5 rounded-md border-[1px] flex flex-col items-center gap-4 justify-center border-gray-800 text-white mobile-p:w-[100%] mobile-p:p-0 cursor-pointer hover:bg-gray-1000 min-h-[20px]">
            <i>{icone}</i>
            <h1 className="text-azulPadrao text-blue-400 font-mono font-semibold  text-lg ">{tituloPadrao}</h1>
            <p className="text-center">{texto}</p> 
            {renderLink && <a href={link}>{textoLink}</a>}
        </div>
    )
}
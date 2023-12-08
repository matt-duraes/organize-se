export const CardPadrao = ({icone, tituloPadrao, texto, link, textoLink}) => {
    return (
        <div className="bg-gray-900 p-5 mt-5 mobile:p-5 rounded-md border-[1px] border-gray-800 text-white mobile-p:w-[100%] mobile-p:p-0">
            <i>{icone}</i>
            <h1>{tituloPadrao}</h1>
            <p>{texto}</p>
            <a href={link}>{textoLink}</a>
        </div>
    )
}
export const CardPadrao = ({icone, tituloPadrao, texto, link, textoLink}) => {
    return (
        <div>
            <i>{icone}</i>
            <h1>{tituloPadrao}</h1>
            <p>{texto}</p>
            <a href={link}>{textoLink}</a>
        </div>
    )
}
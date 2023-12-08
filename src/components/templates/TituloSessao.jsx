export const TituloSessao = ({nomeSessao, titulo}) => {
    return (
        <>
            <h2 className="text-azulPadrao font-serif font-semibold  text-lg">{nomeSessao}</h2>
            <h1 className="text-azulPadrao font-serif font-bold text-2xl">{titulo}</h1>
        </>
    )
}
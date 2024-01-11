export const TituloSessao = ({nomeSessao, titulo}) => {
    return (
        <div className="text-center w-full border-1">
            <h2 className="text-azulPadrao text-[#6ec1e5] font-mono font-semibold  text-lg tracking-widest">{nomeSessao}</h2>
            <h1 className="text-azulPadrao  text-white font-serif text-[2.25rem] mobile-p:text-4xl mt-1">{titulo}</h1>
        </div>
    )
}
import { BotaoPadrao } from "./templates/BotaoPadrao"
import { TituloSessao } from "./templates/TituloSessao"

export const Banner = () => {
    return (
        <div className="sessaoBanner h-screen w-full max-w-[75.875rem] m-auto bg-[url('src/assets/bannerteste.jpg')] bg-no-repeat bg-cover">
            <div className="overlay h-screen w-full bg-black/80 text-white flex flex-col justify-center items-center gap-5">
            <TituloSessao nomeSessao={'ORGANIZE-SE'} titulo={'Organize a sua vida utilizando nossa plataforma'} />
            <BotaoPadrao textoBotao={'Entre em contato'}/>
            </div>
        </div>
    )
}
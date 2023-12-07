import { BotaoPadrao } from "./BotaoPadrao"

export const Banner = () => {
    return (
        <div className="overlay">
            <h2>ORGANIZE-SE</h2>
            <h1>Organize a sua vida utilizando nossa plataforma</h1>
            <BotaoPadrao textoBotao={'Entre em contato'}/>
        </div>
    )
}
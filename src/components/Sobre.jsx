import { BotaoPadrao } from "./templates/BotaoPadrao"
import { TituloSessao } from "./templates/TituloSessao"

export const Sobre = () => {
    return (
        <div className="flex mt-10 w-full max-w-[75.875rem] m-auto bg-gray-1000 border-[1px] border-gray-800 mobile-p:flex-col mobile-p:p-5" >
            <figure className="w-[30%]  pl-5 flex justify-center items-center mobile-p:w-[100%] mobile-p:pl-0">
                <img className="mobile:w-250px" src="src/assets/imagem_portifolio.png" alt="" />
            </figure>
            <div className="w-[70%] p-20 mobile-p:w-[100%] mobile-p:p-5 justify-center items-center flex flex-col">
                <TituloSessao nomeSessao={'SOBRE'} titulo={'O organize-se'} />
                <p className="text-white text-justify mt-5 mb-6">
                O Organize-se é uma plataforma concebida para impulsionar o seu desenvolvimento pessoal. A nossa abordagem é gamificada, proporcionando uma experiência envolvente enquanto oferece diversas funcionalidades para tornar a jornada do desenvolvimento pessoal mais acessível.
                <br />
                <br />
                Com o nosso sistema de controle financeiro, você ganha total domínio sobre o destino do seu dinheiro, aprendendo a poupar de maneira eficaz. Além disso, a funcionalidade de listas permite que você estabeleça metas pessoais, e nós estamos aqui para orientá-lo a alcançá-las. Por último, mas igualmente crucial, apresentamos o nosso relógio Pomodoro, um aliado valioso durante os estudos e a realização de tarefas. Este recurso proporciona assistência essencial nos momentos cruciais dessas atividades importantes.
                </p>
                <BotaoPadrao textoBotao={'Quero me inscrever'}/>
            </div>
        </div>
    )
}
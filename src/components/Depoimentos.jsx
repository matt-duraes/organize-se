import { CardPadrao } from "./templates/CardPadrao"
import { TituloSessao } from "./templates/TituloSessao"

export const Depoimentos = () => {
    return (
        <div className="w-full min-h-[460px]  m-auto bg-gray-1000 mt-20 mb-20 p-5 pt-5 pb-11">
            <div className="text-center w-full py-10 max-w-[75.875rem] m-auto">
                <h2 className="text-azulPadrao text-blue-400 font-mono font-semibold  text-lg tracking-widest">DEPOIMENTOS</h2>
                <h1 className="text-azulPadrao  font-serif text-6xl mobile-p:text-4xl text-white">Ouça nossos clientes</h1>
            </div>
            <div className="bloco_card flex gap-5  max-w-[75.875rem] m-auto mobile-p:flex-col mobile-p:p-5">
                <CardPadrao 
                    icone={'5 start'} 
                    link={'https://google.com'}
                    textoLink={'teste'}
                    texto={'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'}
                    tituloPadrao={'ANTONIO alves'}
                />
                <CardPadrao 
                    icone={'5 start'} 
                    link={'https://google.com'}
                    textoLink={'teste'}
                    texto={'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'}
                    tituloPadrao={'ANTONIO alves'}
                />
                <CardPadrao 
                    icone={'5 start'} 
                    link={'https://google.com'}
                    textoLink={'teste'}
                    texto={'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'}
                    tituloPadrao={'ANTONIO alves'}
                />
            </div>
        </div>
    )
}
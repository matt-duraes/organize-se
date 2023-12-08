import { CardPadrao } from "./templates/CardPadrao"
import { TituloSessao } from "./templates/TituloSessao"

export const Servicos = () => {
    return (
        <div className="mt-10 w-full max-w-[75.875rem] mobile-p:w-[90%] mobile-p:rounded-md m-auto bg-gray-1000 p-20 border-[1px] border-gray-800 mobile-p:p-8" >
            <TituloSessao nomeSessao={'SERVIÇOS'} titulo={'Conheça os nossos serviços'} />
            <div className="bloco_card flex gap-5 mt-5 mobile-p:flex-col mobile-p:w-[100%]">
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
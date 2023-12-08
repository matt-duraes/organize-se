import { CardPadrao } from "./templates/CardPadrao"
import { TituloSessao } from "./templates/TituloSessao"

export const Depoimentos = () => {
    return (
        <div className="sessaoDepoimentos">
            <TituloSessao nomeSessao={'DEPOIMENTOS'} titulo={'Ouça nossos clientes'} />
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
    )
}
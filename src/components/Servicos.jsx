import { CardPadrao } from "./templates/CardPadrao"
import { TituloSessao } from "./templates/TituloSessao"

export const Servicos = () => {
    return (
        <div className="sessaoServicos">
            <TituloSessao nomeSessao={'SERVIÇOS'} titulo={'Conheça os nossos serviços'} />
            <div>
                <CardPadrao 
                    icone={'test'}
                    titulo={'Financeiro'}
                    texto={'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'}
                    link={'https://google.com'}
                    textoLink={'teste'}
                />
                <CardPadrao 
                    icone={'test'}
                    titulo={'Financeiro'}
                    texto={'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'}
                    link={'https://google.com'}
                    textoLink={'teste'}
                />
                <CardPadrao 
                    icone={'test'}
                    titulo={'Financeiro'}
                    texto={'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'}
                    link={'https://google.com'}
                    textoLink={'teste'}
                />
            </div>
        </div>
    )
}
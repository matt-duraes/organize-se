import { Clock, ListChecks, Money } from "@phosphor-icons/react"
import { CardPadrao } from "./templates/CardPadrao"
import { TituloSessao } from "./templates/TituloSessao"

export const Servicos = () => {
    return (
        <div className="mt-10 w-full max-w-[75.875rem] mobile-p:w-[90%] mobile-p:rounded-md m-auto bg-gray-1000 p-20 border-[1px] border-gray-800 mobile-p:p-8" >
            <TituloSessao nomeSessao={'SERVIÇOS'} titulo={'Conheça os nossos serviços'} />
            <div className="bloco_card flex gap-5 mt-5 mobile-p:flex-col mobile-p:w-[100%]">
                <CardPadrao 
                    icone={<Money size={32} />} 
                    tituloPadrao={'Gerenciador de Finanças'}
                    texto={'Com o nosso gerenciador de finanças você vai conseguir acompanhar todos os seus gastos e botar sua vida'}
                />
                <CardPadrao 
                    icone={<ListChecks size={32} />} 
                    tituloPadrao={'Gerenciador de Tarefas'}
                    texto={'Organize suas tarefas e tenha um controle do que deve ser feito no seu dia a dia com o nosso to-do list'}
                />
                <CardPadrao 
                    icone={<Clock size={32} />} 
                    tituloPadrao={'Relógio Pomodoro'}
                    texto={'O nosso relógio pomodoro vai te auxiliar a executar suas tarefas e ter controle do que foi ou não foi feito'}
                />
            </div>
        </div>
    )
}
import { BotaoPadrao } from "./templates/BotaoPadrao"
import { TituloSessao } from "./templates/TituloSessao"

export const Sobre = () => {
    return (
        <div className="flex mt-10 w-full max-w-[75.875rem] m-auto bg-gray-1000 border-[1px] border-gray-800 mobile-p:flex-col mobile-p:p-5" >
            <figure className="w-[30%] flex justify-center items-center mobile-p:w-[100%]">
                <h1 className="text-white">IMAGEM</h1>
            </figure>
            <div className="w-[70%] p-20 mobile-p:w-[100%] mobile-p:p-5">
                <TituloSessao nomeSessao={'SOBRE'} titulo={'Lorem ipsum dolor sit amet'} />
                <p className="text-white text-justify mt-10 mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nemo, exercitationem accusamus, commodi ex possimus    nihil ut voluptates nam accusantium sit illo tempora adipisci odio ducimus autem quae atque reprehenderit?
                    Natus delectus neque unde asperiores, ea animi voluptatem praesentium nam aspernatur dicta maxime maiores expedita adipisci tenetur labore, provident ut illo ex, qui pariatur perferendis? Aperiam ipsum exercitationem consectetur dolores.
                    Earum quisquam, dignissimos harum error iste accusamus obcaecati voluptate quas. Maiores dolore debitis adipisci enim accusantium, non, illum expedita commodi cumque, voluptate magni voluptas reiciendis perspiciatis iure vel laboriosam ipsa.
                    Architecto saepe, non veritatis recusandae quia in nobis doloremque ab iste praesentium tenetur? Expedita fugiat nam quidem, voluptates exercitationem nemo temporibus saepe officia culpa odio praesentium nihil in aspernatur ullam?
                </p>
                <BotaoPadrao textoBotao={'Entre em contato'} />
            </div>
        </div>
    )
}
import { BotaoPadrao } from "./templates/BotaoPadrao"
import { TituloSessao } from "./templates/TituloSessao"

export const Sobre = () => {
    return (
        <>
            <figure>
                <h1>IMAGEM</h1>
            </figure>
            <div>
                <TituloSessao nomeSessao={'SOBRE'} titulo={'Lorem ipsum dolor sit amet'} />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nemo, exercitationem accusamus, commodi ex possimus    nihil ut voluptates nam accusantium sit illo tempora adipisci odio ducimus autem quae atque reprehenderit?
                    Natus delectus neque unde asperiores, ea animi voluptatem praesentium nam aspernatur dicta maxime maiores expedita adipisci tenetur labore, provident ut illo ex, qui pariatur perferendis? Aperiam ipsum exercitationem consectetur dolores.
                    Earum quisquam, dignissimos harum error iste accusamus obcaecati voluptate quas. Maiores dolore debitis adipisci enim accusantium, non, illum expedita commodi cumque, voluptate magni voluptas reiciendis perspiciatis iure vel laboriosam ipsa.
                    Architecto saepe, non veritatis recusandae quia in nobis doloremque ab iste praesentium tenetur? Expedita fugiat nam quidem, voluptates exercitationem nemo temporibus saepe officia culpa odio praesentium nihil in aspernatur ullam?
                </p>
                <BotaoPadrao textoBotao={'Entre em contato'} />
            </div>
        </>
    )
}
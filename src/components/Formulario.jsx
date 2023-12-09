import { useState } from "react"
import { TituloSessao } from "./templates/TituloSessao"
import { useForm } from "react-hook-form"

export const Formulario = () => {
    const {register, handleSubmit, watch} = useForm()
    
    function enviarForm (data) {
        alert(`${data.nome}, recebemos o seu formulário, em breve entraremos em contato!`)
    }
    const email = watch('email');
    return (
        <div className="m-auto mb-16 p-5">
            <TituloSessao nomeSessao={'CONTATO'} titulo={'Entre em contato conosco'} />
            <form onSubmit={handleSubmit(enviarForm)} className="flex flex-col gap-5  w-2/3 m-auto items-center px-10 mt-5 text-white mobile-p:w-[100%] ">
                <input className="w-[500px] cursor-pointer mobile-p:w-[100%] bg-gray-900 border-b-[1px] focus:outline-none m-1 focus:border-b-blue-1000 pl-5 py-3 border-gray-800"  type="text" name="nome" id="nome" placeholder="Seu Nome" {...register('nome', {valueAsNumber: false})}
                />

                <input className="w-[500px] cursor-pointer mobile-p:w-[100%] bg-gray-900 border-b-[1px] focus:outline-none m-1 focus:border-b-blue-1000 pl-5 py-3 border-gray-800" type="text" name="email" id="email" placeholder="Seu E-mail" {...register('email')}/>

                <input className="w-[500px] cursor-pointer mobile-p:w-[100%] bg-gray-900 border-b-[1px] focus:outline-none m-1 focus:border-b-blue-1000 pl-5 py-3 border-gray-800" type="text" name="mensagem" id="mensagem" placeholder="MENSAGEM" {...register('mensagem')} />

                <input className="bg-blue-400 cursor-pointer hover:bg-blue-500 w-[350px] h-[50px] border-[1px] border-gray-800 text-xl text-white rounded-md mt-5 mobile-p:w-[100%]" type="submit" value="Enviar" disabled={!email}/>
            </form>
        </div>

    )
}
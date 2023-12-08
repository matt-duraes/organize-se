export const Formulario = () => {
    return (
        <form>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" />

            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />

            <label htmlFor="mensagem">Mensagem</label>
            <input type="text" name="mensagem" id="mensagem" />

            <input type="submit" value="Enviar" />
        </form>
    )
}
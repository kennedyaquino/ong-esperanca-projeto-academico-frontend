import {
    criarProjetos
} from "./projetos.js";


import {
    obterTotalColaboradores
} from "./storage.js";


const paginas = {

    inicio: `
        <section id="sobre">

            <div class="container">

                <h2>
                    Sobre a ONG
                </h2>

                <img
                    src="../imagens/ong.jpg"
                    alt="Voluntários da ONG realizando uma ação social"
                >

                <p>
                    Nossa organização desenvolve projetos
                    voltados ao apoio de pessoas em situação
                    de vulnerabilidade social.

                    Através da união entre voluntários,
                    colaboradores e parceiros, buscamos
                    gerar oportunidades e melhorar a
                    qualidade de vida da comunidade.
                </p>

                <p class="total-colaboradores">

                    Colaboradores cadastrados:

                    <strong
                        id="total-colaboradores"
                    >
                        0
                    </strong>

                </p>

            </div>

        </section>


        <section id="contato">

            <div class="container">

                <h2>
                    Entre em contato
                </h2>

                <address>

                    <p>
                        <strong>
                            Telefone:
                        </strong>

                        <a href="tel:+5511999999999">
                            (11) 99999-9999
                        </a>
                    </p>


                    <p>
                        <strong>
                            E-mail:
                        </strong>

                        <a
                            href="mailto:contato@ongesperanca.org"
                        >
                            contato@ongesperanca.org
                        </a>
                    </p>


                    <p>
                        <strong>
                            Endereço:
                        </strong>

                        São Paulo - SP
                    </p>

                </address>

            </div>

        </section>
    `,


    projetos: `
        <section>

            <div class="container">

                <h2>
                    Projetos e iniciativas solidárias
                </h2>

                <p>
                    Conheça algumas das iniciativas
                    desenvolvidas pela ONG Esperança.
                </p>

                <div class="projetos">
                </div>

            </div>

        </section>
    `,


    cadastro: `
        <section>

            <div class="container">

                <h2>
                    Cadastre-se como colaborador
                </h2>

                <p>
                    Preencha o formulário abaixo
                    para participar das nossas
                    iniciativas.
                </p>


                <div
                    class="alerta alerta-info"
                    role="alert"
                >

                    <strong>
                        Seja um colaborador!
                    </strong>

                    Preencha corretamente os dados
                    abaixo para participar das
                    iniciativas da ONG Esperança.

                </div>


                <form
                    id="form-cadastro"
                    novalidate
                >

                    <div class="campo">

                        <label for="nome">
                            Nome completo
                        </label>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                            minlength="3"
                            autocomplete="name"
                            placeholder="Digite seu nome completo"
                        >

                    </div>


                    <div class="campo">

                        <label for="cpf">
                            CPF
                        </label>

                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            required
                            pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                            placeholder="000.000.000-00"
                        >

                    </div>


                    <div class="campo">

                        <label for="telefone">
                            Telefone
                        </label>

                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            required
                            pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                            placeholder="(00) 00000-0000"
                        >

                    </div>


                    <div class="campo">

                        <label for="email">
                            E-mail
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            autocomplete="email"
                            placeholder="seuemail@exemplo.com"
                        >

                    </div>


                    <div class="campo">

                        <label for="cep">
                            CEP
                        </label>

                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            required
                            pattern="[0-9]{5}-[0-9]{3}"
                            placeholder="00000-000"
                        >

                    </div>


                    <div class="campo">

                        <label for="cidade">
                            Cidade
                        </label>

                        <input
                            type="text"
                            id="cidade"
                            name="cidade"
                            required
                            autocomplete="address-level2"
                            placeholder="Digite sua cidade"
                        >

                    </div>


                    <fieldset>

                        <legend>
                            Como deseja colaborar?
                        </legend>


                        <label>

                            <input
                                type="radio"
                                name="tipo_colaborador"
                                value="voluntario"
                                required
                            >

                            Voluntário

                        </label>


                        <label>

                            <input
                                type="radio"
                                name="tipo_colaborador"
                                value="doador"
                            >

                            Doador

                        </label>


                        <label>

                            <input
                                type="radio"
                                name="tipo_colaborador"
                                value="parceiro"
                            >

                            Parceiro

                        </label>

                    </fieldset>


                    <div class="campo">

                        <label for="mensagem">
                            Mensagem
                        </label>

                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows="5"
                            placeholder="Conte como gostaria de contribuir"
                        ></textarea>

                    </div>


                    <button type="submit">
                        Realizar cadastro
                    </button>

                </form>


                <dialog
                    id="modal-sucesso"
                    class="modal-exemplo"
                >

                    <h3>
                        Cadastro realizado!
                    </h3>

                    <p>
                        Obrigado pelo interesse
                        em colaborar com a
                        ONG Esperança.
                    </p>

                    <button
                        id="fechar-modal"
                        type="button"
                    >
                        Fechar
                    </button>

                </dialog>

            </div>

        </section>
    `
};


export function obterRotaAtual() {
    return (
        window.location.hash
            .replace("#", "") ||
        "inicio"
    );
}


export function navegar(rota) {
    window.location.hash = rota;
}


function atualizarTotalColaboradores() {
    const elemento =
        document.querySelector(
            "#total-colaboradores"
        );


    if (!elemento) {
        return;
    }


    elemento.textContent =
        obterTotalColaboradores();
}


export function carregarPagina(rota) {
    const conteudo =
        document.querySelector(
            "#conteudo"
        );


    if (!conteudo) {
        console.error(
            "Elemento #conteudo não encontrado."
        );

        return;
    }


    const pagina = paginas[rota];


    if (!pagina) {

        conteudo.innerHTML = `
            <section>

                <div class="container">

                    <h2>
                        Página não encontrada
                    </h2>

                    <p>
                        O conteúdo solicitado
                        não está disponível.
                    </p>

                    <a
                        href="#inicio"
                        data-rota="inicio"
                        class="botao"
                    >
                        Voltar ao início
                    </a>

                </div>

            </section>
        `;

        return;
    }


    conteudo.innerHTML = pagina;


    /*
     * Executa ações específicas
     * depois que cada página foi
     * inserida no DOM.
     */

    if (rota === "projetos") {
        criarProjetos();
    }


    if (rota === "inicio") {
        atualizarTotalColaboradores();
    }
}
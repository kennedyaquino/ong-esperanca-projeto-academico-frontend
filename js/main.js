import {
    carregarPagina,
    navegar,
    obterRotaAtual
} from "./router.js";


import {
    validarCampo,
    processarFormulario,
    fecharModal
} from "./formulario.js";


function iniciarAplicacao() {
    const rota =
        obterRotaAtual();


    carregarPagina(
        rota
    );


    console.log(
        "ONG Esperança iniciada."
    );

    console.log(
        "Rota atual:",
        rota
    );
}


/* ==============================
   NAVEGAÇÃO
================================= */

document.addEventListener(
    "click",
    function (event) {

        const link =
            event.target.closest(
                "[data-rota]"
            );


        if (link) {

            event.preventDefault();


            const rota =
                link.dataset.rota;


            navegar(
                rota
            );

            return;
        }


        /*
         * Fechamento do modal
         */

        if (
            event.target.matches(
                "#fechar-modal"
            )
        ) {
            fecharModal();
        }

        if (event.target.matches("#alternar-contraste")) {
            const botao = event.target;

            document.body.classList.toggle(
                "alto-contraste"
            );

            const ativo = document.body.classList.contains(
                "alto-contraste"
            );

            botao.setAttribute(
                "aria-pressed",
                ativo.toString()
            );

            botao.textContent = ativo
                ? "Contraste padrão"
                : "Alto contraste";
        }
    }
);


/* ==============================
   ALTERAÇÃO DE ROTA
================================= */

window.addEventListener(
    "hashchange",
    function () {

        const rota =
            obterRotaAtual();


        carregarPagina(
            rota
        );

    }
);


/* ==============================
   VALIDAÇÃO EM TEMPO REAL
================================= */

document.addEventListener(
    "input",
    function (event) {

        const campo =
            event.target;


        if (
            !campo.matches(
                "#form-cadastro input, " +
                "#form-cadastro textarea"
            )
        ) {
            return;
        }


        /*
         * Radio buttons são
         * tratados no submit.
         */

        if (
            campo.type === "radio"
        ) {
            return;
        }


        /*
         * Mensagem é opcional.
         */

        if (
            campo.id === "mensagem" &&
            campo.value.trim() === ""
        ) {
            campo.classList.remove(
                "campo-erro",
                "campo-sucesso"
            );

            return;
        }


        validarCampo(
            campo
        );

    }
);


/* ==============================
   FORMULÁRIO
================================= */

document.addEventListener(
    "submit",
    function (event) {

        const formulario =
            event.target;


        if (
            !formulario.matches(
                "#form-cadastro"
            )
        ) {
            return;
        }


        /*
         * Impede o recarregamento
         * da SPA.
         */

        event.preventDefault();


        const sucesso =
            processarFormulario(
                formulario
            );


        if (sucesso) {

            console.log(
                "Colaborador cadastrado com sucesso."
            );

        }

    }
);


/* ==============================
   INICIALIZAÇÃO
================================= */

document.addEventListener(
    "DOMContentLoaded",
    iniciarAplicacao
);
import {
    salvarColaborador
} from "./storage.js";


function mostrarErro(campo, mensagem) {
    campo.classList.add("campo-erro");

    campo.classList.remove(
        "campo-sucesso"
    );

    const container =
        campo.closest(".campo");

    if (!container) {
        return;
    }

    let mensagemErro =
        container.querySelector(
            ".mensagem-erro"
        );

    if (!mensagemErro) {
        mensagemErro =
            document.createElement("small");

        mensagemErro.classList.add(
            "mensagem-erro"
        );

        container.appendChild(
            mensagemErro
        );
    }

    mensagemErro.textContent = mensagem;
}


function mostrarSucesso(campo) {
    campo.classList.remove(
        "campo-erro"
    );

    campo.classList.add(
        "campo-sucesso"
    );

    const container =
        campo.closest(".campo");

    if (!container) {
        return;
    }

    const mensagemErro =
        container.querySelector(
            ".mensagem-erro"
        );

    if (mensagemErro) {
        mensagemErro.remove();
    }
}


export function validarCampo(campo) {
    const valor = campo.value.trim();


    if (campo.required && valor === "") {
        mostrarErro(
            campo,
            "Este campo é obrigatório."
        );

        return false;
    }


    if (
        campo.id === "nome" &&
        valor.length < 3
    ) {
        mostrarErro(
            campo,
            "O nome deve possuir pelo menos 3 caracteres."
        );

        return false;
    }


    if (!campo.checkValidity()) {
        let mensagem =
            "O valor informado está em formato inválido.";


        if (campo.id === "cpf") {
            mensagem =
                "Informe o CPF no formato 000.000.000-00.";
        }


        if (campo.id === "telefone") {
            mensagem =
                "Informe o telefone no formato (00) 00000-0000.";
        }


        if (campo.id === "email") {
            mensagem =
                "Informe um endereço de e-mail válido.";
        }


        if (campo.id === "cep") {
            mensagem =
                "Informe o CEP no formato 00000-000.";
        }


        mostrarErro(
            campo,
            mensagem
        );

        return false;
    }


    mostrarSucesso(campo);

    return true;
}


function validarTipoColaborador(formulario) {
    const selecionado =
        formulario.querySelector(
            "input[name='tipo_colaborador']:checked"
        );

    const fieldset =
        formulario.querySelector(
            "fieldset"
        );


    const mensagemAnterior =
        fieldset.querySelector(
            ".mensagem-erro"
        );


    if (!selecionado) {

        fieldset.classList.add(
            "fieldset-erro"
        );


        if (!mensagemAnterior) {
            const mensagem =
                document.createElement("small");

            mensagem.classList.add(
                "mensagem-erro"
            );

            mensagem.textContent =
                "Selecione uma forma de colaboração.";

            fieldset.appendChild(
                mensagem
            );
        }


        return false;
    }


    fieldset.classList.remove(
        "fieldset-erro"
    );


    if (mensagemAnterior) {
        mensagemAnterior.remove();
    }


    return true;
}


function criarColaborador(formulario) {
    const tipo =
        formulario.querySelector(
            "input[name='tipo_colaborador']:checked"
        );


    return {
        nome:
            formulario.nome.value.trim(),

        cidade:
            formulario.cidade.value.trim(),

        tipoColaborador:
            tipo.value,

        dataCadastro:
            new Date().toLocaleDateString(
                "pt-BR"
            )
    };
}


function abrirModal() {
    const modal =
        document.querySelector(
            "#modal-sucesso"
        );


    if (!modal) {
        return;
    }


    if (
        typeof modal.showModal ===
        "function"
    ) {
        modal.showModal();
    }
}


export function fecharModal() {
    const modal =
        document.querySelector(
            "#modal-sucesso"
        );


    if (
        modal &&
        typeof modal.close ===
        "function"
    ) {
        modal.close();
    }
}


export function processarFormulario(
    formulario
) {
    const campos =
        formulario.querySelectorAll(
            ".campo input, .campo textarea"
        );


    let formularioValido = true;


    campos.forEach(campo => {

        /*
         * A mensagem é opcional,
         * portanto não precisamos
         * rejeitar textarea vazio.
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


        if (!validarCampo(campo)) {
            formularioValido = false;
        }

    });


    if (
        !validarTipoColaborador(
            formulario
        )
    ) {
        formularioValido = false;
    }


    if (!formularioValido) {
        return false;
    }


    const colaborador =
        criarColaborador(
            formulario
        );


    salvarColaborador(
        colaborador
    );


    formulario.reset();


    /*
     * Remove os estados verdes
     * após limpar o formulário.
     */
    campos.forEach(campo => {
        campo.classList.remove(
            "campo-sucesso",
            "campo-erro"
        );
    });


    abrirModal();


    return true;
}
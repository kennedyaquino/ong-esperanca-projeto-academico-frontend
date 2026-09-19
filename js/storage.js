const CHAVE_STORAGE = "colaboradores";


export function recuperarColaboradores() {
    try {
        const dados = localStorage.getItem(CHAVE_STORAGE);

        if (!dados) {
            return [];
        }

        return JSON.parse(dados);
    } catch (erro) {
        console.error(
            "Erro ao recuperar colaboradores:",
            erro
        );

        return [];
    }
}


export function salvarColaborador(colaborador) {
    const colaboradores = recuperarColaboradores();

    colaboradores.push(colaborador);

    localStorage.setItem(
        CHAVE_STORAGE,
        JSON.stringify(colaboradores)
    );
}


export function obterTotalColaboradores() {
    return recuperarColaboradores().length;
}
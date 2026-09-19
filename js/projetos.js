const projetos = [
    {
        titulo: "Projeto Educação",

        descricao:
            "Promovemos atividades educacionais e oferecemos " +
            "apoio para crianças e jovens da comunidade.",

        badge: "Projeto ativo",

        classeBadge: "badge-verde"
    },

    {
        titulo: "Ação Social",

        descricao:
            "Desenvolvemos campanhas para arrecadação e " +
            "distribuição de alimentos e produtos essenciais.",

        badge: "Arrecadação aberta",

        classeBadge: "badge-laranja"
    },

    {
        titulo: "Campanha do Agasalho",

        descricao:
            "Arrecadamos roupas e cobertores para auxiliar " +
            "famílias durante os períodos de baixas temperaturas.",

        badge: "Campanha ativa",

        classeBadge: "badge-azul"
    },

    {
        titulo: "Voluntariado",

        descricao:
            "Conectamos voluntários às nossas ações, permitindo " +
            "que cada pessoa contribua de acordo com suas " +
            "habilidades e disponibilidade.",

        badge: "Aceitando voluntários",

        classeBadge: "badge-verde"
    }
];


export function criarProjetos() {
    const container = document.querySelector(".projetos");

    if (!container) {
        return;
    }

    const cards = projetos.map(projeto => `
        <article>

            <span class="badge ${projeto.classeBadge}">
                ${projeto.badge}
            </span>

            <h3>
                ${projeto.titulo}
            </h3>

            <p>
                ${projeto.descricao}
            </p>

            <a
                href="#cadastro"
                data-rota="cadastro"
            >
                Quero ajudar
            </a>

        </article>
    `).join("");

    container.innerHTML = cards;
}
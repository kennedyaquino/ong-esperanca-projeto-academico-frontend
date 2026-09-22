# ONG Esperança

Projeto acadêmico de desenvolvimento web criado para representar uma organização não governamental fictícia denominada **ONG Esperança**.

A aplicação apresenta informações sobre a instituição e seus projetos sociais, além de permitir o cadastro de pessoas interessadas em colaborar com suas iniciativas.

---

## 📋 Sobre o projeto

O projeto ONG Esperança foi desenvolvido com o objetivo de aplicar conceitos fundamentais de desenvolvimento Front-end, iniciando com HTML e CSS e evoluindo posteriormente para uma Single Page Application (SPA) utilizando JavaScript.

A aplicação permite navegar entre diferentes conteúdos sem a necessidade de recarregar completamente a página.

O projeto também utiliza validação de formulários, manipulação dinâmica do DOM, armazenamento local e modularização do código JavaScript.

---

## 🚀 Funcionalidades

A aplicação possui as seguintes funcionalidades:

- Página inicial com apresentação da ONG;
- Exibição das informações de contato;
- Exibição dinâmica dos projetos sociais;
- Cards de projetos gerados através de JavaScript;
- Navegação no formato Single Page Application (SPA);
- Navegação utilizando `window.location.hash`;
- Formulário para cadastro de colaboradores;
- Validação dos campos em tempo real;
- Mensagens de erro inseridas dinamicamente no DOM;
- Feedback visual para campos válidos e inválidos;
- Seleção do tipo de colaboração;
- Modal de confirmação após cadastro;
- Persistência dos colaboradores no `localStorage`;
- Recuperação das informações armazenadas;
- Exibição da quantidade de colaboradores cadastrados;
- Layout responsivo para diferentes tamanhos de tela;
- Código JavaScript dividido em módulos ES6.

---

## 🛠️ Tecnologias utilizadas

### HTML5

Utilizado para criação da estrutura semântica da aplicação.

Principais recursos utilizados:

- `header`;
- `nav`;
- `main`;
- `section`;
- `article`;
- `form`;
- `fieldset`;
- `dialog`;
- atributos de acessibilidade;
- validações nativas de formulário.

### CSS3

Responsável pela identidade visual e responsividade.

Foram utilizados:

- CSS Variables;
- Flexbox;
- CSS Grid;
- Media Queries;
- estados `hover`, `focus` e `active`;
- componentes responsivos;
- estilos de validação;
- modal;
- badges;
- alertas.

### JavaScript ES6+

Responsável pela camada de interação da aplicação.

Foram utilizados:

- DOM API;
- `querySelector()`;
- `querySelectorAll()`;
- `createElement()`;
- `innerHTML`;
- Template Literals;
- Arrays;
- `map()`;
- eventos;
- delegação de eventos;
- `preventDefault()`;
- `window.location.hash`;
- `localStorage`;
- `JSON.stringify()`;
- `JSON.parse()`;
- ES6 Modules;
- `import`;
- `export`.

### Git e GitHub

Utilizados para controle de versão e organização do desenvolvimento.

Foram aplicados conceitos de:

- GitFlow;
- branches;
- commits;
- Pull Requests;
- Issues;
- Milestones;
- Releases;
- Semantic Versioning.

---

## 📁 Estrutura do projeto

```text
ong-esperanca/
│
├── html/
│   └── index.html
│
├── css/
│   └── style.css
│
├── imagens/
│   └── ong.jpg
│
├── js/
│   ├── main.js
│   ├── router.js
│   ├── projetos.js
│   ├── formulario.js
│   └── storage.js
│
└── README.md
```

---

## 🧩 Organização do JavaScript

O JavaScript foi dividido utilizando **ES6 Modules**, seguindo o princípio de separação de responsabilidades.

### `main.js`

Ponto de entrada da aplicação.

Responsável por:

- inicialização;
- captura dos eventos;
- navegação;
- submissão do formulário;
- comunicação entre os demais módulos.

### `router.js`

Responsável pelo sistema de navegação da SPA.

Controla:

- rotas;
- `window.location.hash`;
- renderização das páginas;
- tratamento de rotas inexistentes.

### `projetos.js`

Responsável pela geração dinâmica dos projetos.

Utiliza:

- arrays;
- `map()`;
- Template Literals;
- `innerHTML`.

### `formulario.js`

Responsável pelo formulário.

Contém:

- validações;
- mensagens de erro;
- feedback visual;
- processamento do cadastro;
- controle do modal.

### `storage.js`

Responsável pela persistência de informações.

Utiliza:

- `localStorage`;
- `JSON.stringify()`;
- `JSON.parse()`.

---

## 💾 Persistência de dados

Os dados necessários para demonstração são armazenados através da Web Storage API.

Exemplo:

```javascript
localStorage.setItem(
    "colaboradores",
    JSON.stringify(colaboradores)
);
```

Para recuperar:

```javascript
const colaboradores = JSON.parse(
    localStorage.getItem("colaboradores")
);
```

Por se tratar de um projeto acadêmico Front-end, o `localStorage` é utilizado apenas para demonstração de persistência no navegador.

Dados sensíveis, como CPF, não são persistidos.

---

## ▶️ Executando o projeto localmente

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entrar na pasta

```bash
cd ong-esperanca
```

### 3. Abrir no VS Code

```bash
code .
```

### 4. Iniciar um servidor local

O projeto utiliza **ES6 Modules**, portanto é recomendado executá-lo através de um servidor HTTP local.

Uma opção é utilizar a extensão **Live Server** do Visual Studio Code.

No VS Code:

1. Abra a pasta `html`;
2. Clique com o botão direito em `index.html`;
3. Selecione **Open with Live Server**.

O navegador abrirá um endereço semelhante a:

```text
http://127.0.0.1:5500/html/index.html
```

---

## 🌐 Rotas da SPA

A navegação utiliza hashes para representar as páginas.

### Início

```text
#inicio
```

### Projetos

```text
#projetos
```

### Cadastro

```text
#cadastro
```

Exemplo:

```text
http://127.0.0.1:5500/html/index.html#projetos
```

A alteração da rota não exige o recarregamento completo da aplicação.

---

## 🌿 Estratégia de branches

O projeto utiliza uma organização baseada em **GitFlow**.

### `main`

Contém versões estáveis e preparadas para entrega.

### `develop`

Branch utilizada para integração das funcionalidades durante o desenvolvimento.

### `feature/*`

Branches utilizadas para desenvolver funcionalidades isoladamente.

Exemplos:

```text
feature/spa
feature/validacao-formulario
feature/local-storage
feature/modularizacao-js
```

Fluxo utilizado:

```text
feature/*
    ↓
develop
    ↓
main
```

---

## 🏷️ Versionamento

O projeto utiliza **Semantic Versioning (SemVer)**:

```text
MAJOR.MINOR.PATCH
```

Exemplo:

```text
v1.7.1
```

Onde:

- **MAJOR** — alterações incompatíveis ou grandes mudanças estruturais;
- **MINOR** — inclusão de novas funcionalidades;
- **PATCH** — correções de bugs e pequenos ajustes.

---

## 📝 Padrão de commits

As mensagens de commit procuram indicar claramente a finalidade da alteração.

Exemplos:

```text
feat: implementa navegação SPA

feat: adiciona validação do formulário

feat: adiciona persistência com localStorage

refactor: modulariza JavaScript utilizando ES6 Modules

fix: corrige navegação e eventos dinâmicos da SPA
```

Os principais prefixos utilizados são:

| Prefixo | Finalidade |
|---|---|
| `feat` | Nova funcionalidade |
| `fix` | Correção de problema |
| `refactor` | Reorganização do código sem alterar sua finalidade |
| `docs` | Alteração na documentação |
| `style` | Alterações de formatação ou estilo |

---

## 🔖 Releases

A evolução principal do projeto foi organizada nas seguintes versões:

```text
v1.0.0 - Estrutura inicial da ONG Esperança
v1.1.0 - Design System e responsividade
v1.2.0 - Componentes visuais e feedback
v1.3.0 - Navegação SPA
v1.4.0 - Templates dinâmicos
v1.5.0 - Validação do formulário
v1.6.0 - Persistência com localStorage
v1.7.0 - Modularização JavaScript
v1.7.1 - Correções da SPA
```

---

## 🧪 Testes e depuração

Durante o desenvolvimento foram utilizadas as ferramentas do navegador para testar e diagnosticar a aplicação.

Entre elas:

- Console;
- Elements;
- Network;
- Application;
- Debugger/Sources.

Foram realizados testes relacionados a:

- entradas inválidas;
- navegação entre rotas;
- rotas inexistentes;
- eventos em elementos dinâmicos;
- persistência no `localStorage`;
- mensagens de validação;
- comportamento da aplicação sem conexão.

---

## ♿ Acessibilidade

O projeto utiliza algumas práticas básicas de acessibilidade, como:

- HTML semântico;
- atributos `alt` em imagens;
- associação entre `label` e campos;
- navegação identificada com `aria-label`;
- feedback visual de foco;
- contraste entre texto e fundo;
- estrutura organizada de títulos.

---

## 🎯 Objetivo acadêmico

O desenvolvimento deste projeto permitiu aplicar conceitos de:

- estruturação semântica;
- estilização responsiva;
- manipulação do DOM;
- programação orientada a eventos;
- validação de formulários;
- persistência local;
- desenvolvimento de SPA;
- modularização JavaScript;
- depuração;
- controle de versão com Git.

O projeto representa a evolução de uma página web estática para uma aplicação Front-end modular e interativa.

---

## 👨‍💻 Autor

Projeto desenvolvido para fins acadêmicos na área de **Análise e Desenvolvimento de Sistemas**.
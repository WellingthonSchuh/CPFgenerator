# 🔢 CPFgenerator

## 📌 Descrição
Projeto desenvolvido para gerar números de **CPF válidos** automaticamente.  
Apesar de ser simples visualmente, é um dos projetos mais complexos até agora, pois utiliza **HTML, CSS, JavaScript, Webpack e Babel** em conjunto.  
Ao abrir o site, o usuário recebe um número de CPF válido gerado dinamicamente.

---

## 📂 Estrutura do projeto
- **docs/**
  - `index.html`
  - **Assets/**
    - `bundle.js`
    - `bundle.js.map`
- **src/**
  - `index.js`
  - **Assets/**
    - `modelo.css`
  - **modules/**
    - `geracpf.js`
    - `validacpf.js`
- **node_modules/** → dependências instaladas via npm
- `.gitignore`
- `package-lock.json`
- `package.json`
- `webpack.config.js`

---

## ⚙️ Funcionalidades
- Geração de números de CPF válidos.  
- Validação de CPF através do módulo `validacpf.js`.  
- Modularização do código com `import` e `export`.  
- Empacotamento do projeto com **Webpack**.  
- Transpilação com **Babel** para compatibilidade.  
- Estilização com CSS (`modelo.css`).  

---

## 🛠️ Tecnologias utilizadas
- **HTML5** → estrutura da página  
- **CSS3** → estilização visual  
- **JavaScript (ES6+)** → lógica de geração e validação de CPF  
- **Webpack** → empacotamento e criação do `bundle.js`  
- **Babel** → transpilar código moderno para navegadores  
- **Node.js + npm** → gerenciamento de dependências  

---

## 📸 Preview
![Gerador de CPF](./cpfgenerator.jpg)

---

## 🚀 Como visualizar
Acesse o site:
- https://wellingthonschuh.github.io/CPFgenerator/

Ou

Para rodar localmente:

1. Baixe ou clone este repositório:
   - Clique em **Code > Download ZIP** e extraia os arquivos  
   - ou use o comando:
     ```bash
     git clone https://github.com/WellingthonSchuh/CPFgenerator.git
     ```

2. Instale as dependências:
   ```bash
   npm install

3. Gere o bundle com o Webpack:
   ```bash
   npx webpack
   
4. Abra o arquivo `docs/index.html` em qualquer navegador.

---

## 📚 Aprendizados
- **Geração/validação de CPF:** lógica para criar CPFs válidos e conferir dígitos verificadores  
- **Modularização:** uso de `import` e `export` entre `geracpf.js`, `validacpf.js` e `index.js`  
- **Empacotamento:** criação de `bundle.js` e `bundle.js.map` com **Webpack**  
- **Transpilação:** configuração do **Babel** para compatibilidade com navegadores  
- **Organização:** separação entre `src`, `docs/assets` e dependências  

---

## 👨‍💻 Autor
Feito por **Wellingthon Schuh**  
🔗 [LinkedIn](https://www.linkedin.com/in/wellingthonschuh)


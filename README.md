



# 📚 Bookstore Manager CLI

Sistema de gerenciamento de livraria desenvolvido em **Node.js**, **TypeScript** e **PostgreSQL**, utilizando arquitetura em camadas (Controller, Service e Repository).

O projeto permite gerenciar autores, livros, clientes e empréstimos, incluindo controle automático de estoque durante empréstimos e devoluções.

---

## 🚀 Tecnologias

- Node.js
- TypeScript
- PostgreSQL
- pg
- dotenv
- Git
- GitHub

---

## 📂 Estrutura do Projeto

```
src/
├── config/
├── controllers/
├── entities/
├── repositories/
├── services/
└── index.ts
```

---

## 📌 Funcionalidades

### 👨‍💼 Autores

- ✅ Cadastrar autor
- ✅ Listar autores
- ✅ Buscar autor por ID
- ✅ Atualizar autor
- ✅ Excluir autor

---

### 📚 Livros

- ✅ Cadastrar livro
- ✅ Listar livros
- ✅ Buscar livro por ID
- ✅ Atualizar livro
- ✅ Excluir livro
- ✅ Controle de estoque

---

### 👥 Clientes

- ✅ Cadastrar cliente
- ✅ Listar clientes
- ✅ Buscar cliente por ID
- ✅ Atualizar cliente
- ✅ Excluir cliente

---

### 📖 Empréstimos

- ✅ Realizar empréstimo
- ✅ Validar disponibilidade do livro
- ✅ Atualizar estoque automaticamente
- ✅ Registrar devolução
- ✅ Alterar status para **DEVOLVIDO**
- ✅ Repor estoque automaticamente

---

## 🛠️ Instalação

Clone o repositório:

```bash
git clone https://github.com/carioca1965/bookstore-manager-cli.git
```

Entre na pasta:

```bash
cd bookstore-manager-cli
```

Instale as dependências:

```bash
npm install
```

---

## ⚙️ Configuração

Crie um arquivo `.env`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=bookstore
DB_USER=postgres
DB_PASSWORD=sua_senha
```

---

## ▶️ Executando

```bash
npm run dev
```

---

## 🗄️ Banco de Dados

O projeto utiliza PostgreSQL.

Execute o script SQL para criar as tabelas antes de iniciar a aplicação.

---

## 📖 Arquitetura

O projeto utiliza arquitetura em camadas:

```
Controller
      │
      ▼
Service
      │
      ▼
Repository
      │
      ▼
PostgreSQL
```

Essa arquitetura facilita manutenção, testes e evolução da aplicação.

---

## 📸 Exemplo

```
=======================================
      BOOKSTORE MANAGER CLI
=======================================

✅ PostgreSQL conectado com sucesso!

📚 Empréstimo realizado com sucesso!

📖 Livro devolvido com sucesso!
```

---

## 📈 Próximas melhorias

- Listagem completa de empréstimos
- Consultas utilizando JOIN
- API REST com Express
- Testes automatizados
- Swagger
- Docker

---

## 👨‍💻 Autor

**Carlos Eduardo Pereira Pedroza**

- GitHub: https://github.com/carioca1965
- LinkedIn: https://www.linkedin.com/in/carlos-eduardo-tec

---

## 📄 Licença

Projeto desenvolvido para fins de estudo e portfólio.

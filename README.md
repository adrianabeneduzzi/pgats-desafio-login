# 🔐 Desafio de Lógica: Sistema de Login

Este projeto consiste num sistema de autenticação modularizado, desenvolvido para validar a lógica de acesso de utilizadores com diferentes estados:

- ✅ Ativo
- ❌ Inexistente
- 🔑 Senha incorreta
- ⏳ Credenciais expiradas

---

## 🚀 Como Executar o Projeto

### 1️⃣ Instalar as dependências

```bash
npm install
```

### 2️⃣ Executar os testes automatizados

```bash
npm test
```

---

## ✅ Requisitos e Cenários de Teste

A função `fazerLogin()` foi implementada para cobrir os seguintes requisitos:

### ✅ Sucesso

Retorna:

```txt
Login realizado com sucesso
```

Quando o email e a senha coincidem com os dados da base.

---

### ⏳ Credenciais Expiradas

Retorna:

```txt
Renove suas credenciais
```

Caso o utilizador tenha:

```js
expirado: true
```

---

### ❌ Utilizador Não Encontrado

Retorna erro caso o email informado não exista no sistema.

---

### 🔑 Senha Incorreta

Retorna:

```txt
Credenciais incorretas
```

Caso o email exista, mas a senha esteja errada.

---

## 🛠️ Tecnologias Utilizadas

### Linguagem
- JavaScript

### Ambiente

![CI](https://github.com/adrianabeneduzzi/pgats-desafio-login/actions/workflows/ci.yml/badge.svg)

- Node.js

### Framework de Testes
- Mocha

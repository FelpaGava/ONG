# API da ONG

Projeto simples com uma API Express e uma página em Vite+ que exibe a resposta de `GET /api/health`.

## Requisitos

- Node.js 24 e npm.

## Como executar

Abra um terminal na pasta `API` e instale as dependências:

```powershell
npm.cmd install
Copy-Item .env.example .env
```

O arquivo `.env` define `API_PORT`, que por padrão é `3001`. Se alterar a porta, reinicie a API e o Vite. O arquivo `.env` não deve ser enviado ao Git.

No primeiro terminal, inicie a API:

```powershell
npm.cmd run api
```

Em outro terminal, também na pasta `API`, inicie a página:

```powershell
npm.cmd run dev
```

Abra no navegador o endereço informado pelo Vite. A página consulta a API pelo proxy de desenvolvimento e exibe, quando ela está disponível:

```json
{ "status": "ok" }
```

Também é possível acessar a rota diretamente em `http://localhost:3001/api/health`, usando a porta configurada em `.env`.

Para gerar a versão de produção da página:

```powershell
npm.cmd run build
```

O proxy configurado funciona no servidor de desenvolvimento do Vite; uma publicação da página precisa encaminhar `/api` para a API separadamente.

Em outros sistemas, use `npm` no lugar de `npm.cmd` e `cp .env.example .env` para criar o arquivo de ambiente.

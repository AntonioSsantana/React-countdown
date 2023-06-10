# React Countdown

Este é um projeto em JavaScript utilizando React que implementa um temporizador.

## Funcionalidades

- Configuração de horas, minutos e segundos para o temporizador.
- Iniciar o temporizador.
- Reiniciar o temporizador.

## Dependências

```json
"dependencies": {
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.11.2"
  }
```

## Configuração do Ambiente de Desenvolvimento

1. Certifique-se de ter o Node.js instalado em seu sistema.

2. Clone este repositório para o seu ambiente local.

3. Navegue até o diretório do projeto no terminal.

4. Execute o comando `npm install` para instalar todas as dependências listadas no arquivo `package.json`.

5. Após a conclusão da instalação das dependências, execute o comando `npm run dev` para iniciar o servidor de desenvolvimento.

6. O servidor de desenvolvimento será iniciado e você poderá acessar o aplicativo em seu navegador através do endereço `http://localhost:3000`.

## Scripts

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria uma versão otimizada para produção do aplicativo.
- `npm run lint`: Executa a verificação de linting no código utilizando o ESLint.
- `npm run preview`: Inicia um servidor local para pré-visualizar a versão de produção do aplicativo.

```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  }
```
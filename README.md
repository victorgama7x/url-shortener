# Encurtador de URL

Encurtador de url feito exclusivamente utilizando bibliotecas nativas do Node, como: crypto, sqlite e http

## Requisitos:

- [Node 22+](https://nodejs.org/en)
- [GIT](https://git-scm.com/)

## Como rodar:

1. Clone o projeto:

```bash
git clone https://github.com/victorgama7x/url-shortener
```

2. Entre na pasta e rode a aplicação:

```bash
cd url-shortener
npm run dev
```

## Como utilizar:

- Utilize o método **POST** na rota `/shorten` e passe a URL que deseja encurtar

```bash
Example:
    POST http://localhost:3000/shorten
    Content-Type: application/json

    {
        "url": "https://suaUrlAqui"
    }
```

- Copie a URL gerada e utilize o navegador para acessar

## Sobre o projeto:

Com o desejo de entender melhor como o Node.js funciona por trás dos panos, decidi ler um pouco sobre sua documentação. Então, resolvi criar um projeto simples utilizando apenas o Node.js, sem nenhuma biblioteca ou framework externo.

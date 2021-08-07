# Prova 2
![img](readme-img/enunciado.png)

## Inicializando o desenvolvimento e a escolha das ferramentas

1. Um projeto em Node.js foi inicializa com com o comando ```npm init```.

2. Tendo o gerenciador de dependências Yarn já instalado globalmente, o *framework* Express foi instalado com o comando ```yarn add express```.

3. O TypeScript foi instalado com o comando ```yarn add --dev typescript```.

4. O linter para o TypeScript foi instalado com o comando ```yarn add --dev tslint```.

5. Tipos adicionais foram instalados com o comando ```yarn add --dev @types/node @types/express```.

6. Para atualização *live* foram adicionadas as bibliotecas nodemon e ts-node com o comando ```yarn add --dev nodemon ts-node```.

7. Foi utilizado o ORM Prisma para a persistência de dados.

## Endpoints

Foram implementados os seguintes *endpoins* expostos na porta 8080:

### ```/create-venda```

Recebe requisição com o método **POST** para criar uma nova tupla de dados na tabela **vendas**. O **body** da requisição deve conter um objeto no seguinte formato:

```TypeScript
{
  funcionario: string;
  regiao: string;
  trimestre: string;
  cota: number;
  vendas: number;
}
```
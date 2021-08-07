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

### POST - ```/create-venda```

Recebe requisição com o método **POST** para criar uma nova tupla na tabela **vendas**. O **body** da requisição deve conter um objeto no seguinte formato:

```TypeScript
{
  funcionario: string;
  regiao: string;
  trimestre: string;
  cota: number;
  vendas: number;
}
```

Em caso de sucesso, retorna status **201** e um objeto contendo os dados salvos com o id da nova tupla.

### PUT - ```/update-venda/:id```

Recebe requisição com o método **PUT** para atualizar um ou mais campos de uma tupla na tabela **vendas**. A requisição deve levar o id da tupla a ser atualizada em um *path parameter*, como no exemplo abaixo:

```http://localhost:8080/update-venda/20```

Além disso, a requisição deve conter um **body** com um objeto contendo os campos a serem atualizados e seus valores, como abaixo:

```JSON
{
  "regiao:": "Sul",
  "trimestre": "2020-4"
}
```

Em caso de sucesso, retorna status **200** e um objeto contendo os dados atualizados.

### DELETE - ```/delete-venda/:id```

Recebe requisição com método **DELETE** para excluir uma tupla da tabela **vendas**. A requisição deve levar o id da tupla a ser excluída em um *path parameter*, como no exemplo abaixo:

```http://localhost:8080/delete-venda/20```

Em caso de sucesso, retorna status **204**.

### GET monitoramento por funcionário - ```/monitor-func/:func```

Recebe requisição com método **GET** para recuperar tuplas referentes a um funcionário. A requisição deve levar o nome do funcionário em um *path parameter*, como no exemplo abaixo:

```http://localhost:8080/monitor-func/Jonas```

Em caso de sucesso, retorna status **200** e um vetor contendo objetos correspondentes a todas as tuplas referentes ao funcionário selecionado.

### GET monitoramento por região - ```/monitor-reg/:reg```

Recebe requisição com método **GET** para recuperar tuplas referentes a uma região. A requisição deve levar o nome da região em um *path parameter*, como no exemplo abaixo:

```http://localhost:8080/monitor-reg/Norte```

Em caso de sucesso, retorna status **200** e um vetor contendo objetos correspondentes a todas as tuplas referentes à região selecionada.

### GET monitoramento por trimestre - ```/monitor-tri/:tri```

Recebe requisição com método **GET** para recuperar tuplas referentes a um trimestre. A requisição deve levar o nome do trimestre em um *path parameter*, como no exemplo abaixo:

```http://localhost:8080/monitor-tri/2021-3```

Em caso de sucesso, retorna status **200** e um vetor contendo objetos correspondentes a todas as tuplas referentes ao trimestre selecionado.

### GET relatótio geral - ```/all```

Recebe requisição com método **GET** para recuperar todas as tuplas da tabela **vendas**.

Em caso de sucesso, retorna status **200** e um vetor contendo objetos correspondentes a todas as tuplas da tabela **vendas**.
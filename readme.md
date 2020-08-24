# TESTE AXUR

Teste para o processo seletivo de `back-end developer` da [Axur](https://axur.com/pt/) desenvolvido por Thiago Barbosa.

## 🔗 Requerimentos

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/gettingstarted/)

## 📥 Instalação

Rode a aplicação localmente utilizando docker-compose:

```shell
docker-compose up --build
```

A aplicação ficará disponível por padrão na porta `3000` localmente.

## 🛠️ Configuração

Para configurar a aplicação basta editar o arquivo `docker-compose.yml` passando os dados necessários para cada variável:

- `APP_PORT` => Porta onde a aplicação irá rodar
- `APP_API_KEY` => API Key fornecida pela HubSpot 
- `APP_NOME_CAND` => Primeiro nome do candidato
- `APP_SOBREN_CAND` => Sobrenome do candidato
- `APP_HUBSPOT_DELAY` => Delay (em millisegundos) aplicado entre cada operação de cadastro enviada para a hubspot

> Não colocar aspas nos valores nem adicionar espaço entre o atribuidor `=` seguir o padrão `VARIAVEL=VALOR DA VARIAVEL`
caso a `APP_PORT` seja alterada, é necessário atualizar também a seção `ports` do `docker-compose.yml` para condizer com os novos valores

## 📁 Endpoints

| Caminho     | Método | Status Code | Descricao                                                 |
| :---------- | :----: | :---------: | :-------------------------------------------------------- |
| `/domains` | `GET`  |     200     | Retorna todos os domínios e suas respectivas quantidades. |

#### Paginação
>A paginação implementada neste projeto não utiliza a [paginação oferecida pela hubspot](https://legacydocs.hubspot.com/docs/methods/lists/get_list_contacts) visto que a mesma além de fazer com que as quantidades de dominios sejam diferentes dependendo da pagina, também exigiria devolver o campo `vidOffset` para o usuario para que ele controle a utilização das páginas.
Assim sendo, optei por fazer uma query completa no endpoint da hubpost e paginar os resultados APÓS o tratamento dos mesmos na API, o que faz com que não exista um ganho considerável 
de performance ao utilizar a paginação. Ainda assim a paginação poderia vir a ser util em um cenário ficticio onde não seja desejável trazer a query completa para a aplicação consumindo a API.

Para utilizar a paginação basta passar dois [query parameters](https://branch.io/glossary/query-parameters/) no request `/domains`:
- `page` => Número da página que se quer acessar
- `perPage` => Quantidade de resultados por página

Caso os parametros sejam omitidos a aplicação retorna a query completa.

## 📄 Logs
Além de exibir os logs no console em runtime, a aplicação também armazena os logs em uma pasta `logs` na raíz da aplicação. Esta pasta é linkada com o container através de volumes, fazendo com que os logs do container sejam repassados para a máquina local sem a necessidade de nenhuma ação externa.

## 👁️ Observações

- O arquivo `contatos.csv` foi movido para a pasta `desafio/data` por questões de organização

- Eu planejava utilizar [promise.all()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) para cadastrar todos os usuários, mas visto que a Hubspot possui
  ratelimit acabei optando por mandar um request por vez e adicionando um delay entre cada um, o valor
  do delay pode ser alterado no aquivo docker-compose.yml na propriedade "APP_HUBSPOT_DELAY"

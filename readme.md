# TESTE AXUR

Teste para o processo seletivo de `back-end developer` da [Axur](https://axur.com/pt/).

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
-` APP_NOME_CAND` => Primeiro nome do candidato
- `APP_SOBREN_CAND` => Sobrenome do candidato
- `APP_HUBSPOT_DELAY` => Delay (em millisegundos) aplicado entre cada operação de cadastro enviada para a hubspot

> Não colocar aspas nos valores nem adicionar espaço entre o atribuidor `=` seguir o padrão `VARIAVEL=VALOR DA VARIAVEL`

## 📁 Endpoints
|Caminho|Método|Status Code|Descricao|
|:---|:----:|:---------:|:----------|
|`/contacts`|`GET`|200|Retorna todos os domínios e suas respectivas quantidades.|

## 👁️ Observações
- O arquivo `contatos.csv` foi movido para a pasta `desafio/data` por questões de organização

- Eu planejava utilizar [promise.all()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) para cadastrar todos os usuários, mas visto que a Hubspot possui 
  ratelimit acabei optando por mandar um request por vez e adicionando um delay entre cada um, o valor 
  do delay pode ser alterado no aquivo docker-compose.yml na propriedade "APP_HUBSPOT_DELAY"

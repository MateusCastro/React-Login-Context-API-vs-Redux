# React login: Context vs Redux

Esse projeto foi criado para estudar a diferença entre Context e Redux no gerenciamento do estado da aplicação.

---

## Como instalar

Entre nas pastas dos projetos:

```
cd context-api ou cd redux
```

Instale as dependências:

```
npm install ou yarn install
```

Rode o projeto

```
npm start
```

---

## Os projetos

Os dois projetos usam a mesma estrutura, com exceção da forma como o estado da aplicação está configurado, claro.

As aplicações têm duas telas, a de Login e a Home. Se o usuário estiver autenticado (essa informação virá do estado da aplicação) ele é redirecionado para a Home, caso contrário ele vai ser redirecionado para a tela de Login.

### Context

Context (faz parte do pacote React) disponibiliza uma forma de passar dados entre a árvore de componentes sem precisar passar props manualmente em cada nível.

Em uma aplicação típica do React, os dados são passados de cima para baixo (de pai para filho) via props. Mas isso pode dar um pouco de trabalho em certos tipos de props (como preferências locais ou tema de UI), que são utilizadas por muitos componentes dentro da aplicação. Contexto (context) fornece a forma de compartilhar dados como esses, entre todos componentes da mesma árvore de componentes, sem precisar passar explicitamente props entre cada nível.

Caso você use o Context na posição mais alta da árvore de elementos, você usará como estado da aplicação.

#### Estrutura de pastas

```
projeto
└───src
    └───contexts
        └───auth.tsx
```

### Redux

Redux é um padrão e biblioteca para gerenciar e atualizar o estado do aplicativo, usando eventos chamados "actions". Ele serve como um armazenamento centralizado para o estado que precisa ser usado em todo o seu aplicativo, com regras que garantem que o estado só possa ser atualizado de maneira previsível.

#### Estrutura de pastas

```
projeto
└───src
    └───store
        └───index.tsx (configuração do Redux)
        └───persistReducers.tsx
        └───modules
            └───rootReducer.ts
            └───user
                └───actions.ts
                └───index.ts (reducer)
                └───actions.ts
```

Para saber mais sobre o Redux, acesse a documentação do cliclando [aqui.](https://redux.js.org/basics/basic-tutorial)

### Conclusão

A necessidade da aplicação é armazenar dados referente ao usuário e token. Para aplicações que não precisa de muitas informações no estado e nem precisa de normalização de dados, não tem necessidade de implementar o Redux, a Context API está bem madura e atende a necessidade da maioria do casos.

A melhor alternativa foi usar a Context API, além de fazer parte do pacote React e não precisar de dependências de terceiros, foi preciso a criação de apenas 1 arquivo, deixando o projeto mais simples e mais fácil para manutenção. Para persistir os dados, foi utilizado o localStorage API.

O Redux pode ser uma melhor alternativa se a aplicação precisar de grande quantidade de informações no estado, tem muita interação do estado em tela ou necessita de normalização dos dados.

Para usar o Redux na aplicação, foi necessário instalar 3 bibliotecas de terceiros, o redux, react-redux e o redux-persist. No caso, para fazer o login não fiz requisição na API, mas se precisasse iria ter que instalar mais outra biblioteca, o redux-saga e se quisesse simplificar a configuração do redux, poderia utilizar a biblioteca [redux-toolkit](https://redux-toolkit.js.org/), totalizando 5 bibliotecas de terceiros.

Para configurar o redux foi preciso criar um estrutura mais complexa com 6 arquivos. Criar uma simples funcionalidade requer mexer em 2 a 3 arquivos diferentes, trazendo uma complexibilidade desnecessária para a aplicação. Dentro da própria documentação do redux tem a seguinte mensagem: "Se você não tem certeza que precisa utilizar o Redux, não use".

---

## Referências

[Context - documentação oficial do React](https://pt-br.reactjs.org/docs/context.html)

[Documentação oficial do Redux](https://redux.js.org/)

[Redux FAQ: When should I use Redux?](https://redux.js.org/faq/general#when-should-i-use-redux)

[You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)

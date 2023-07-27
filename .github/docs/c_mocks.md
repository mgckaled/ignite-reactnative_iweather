# Parte 3 - Mocks

## Conceitos

### Definição - Rocketseat

Permite substituir um objeto real e criar uma simulação durante a execução de testes. É usado para isolar o código que está sendo testado, fornecendo um comportamento predefinido e para não depender de fatores externos.

### Definição - ChatGPT 3.5

Em desenvolvimento de software, o termo "mock" (ou "mock object") é uma técnica comumente utilizada em testes de aplicativos. Mocks são objetos simulados que têm a finalidade de representar o comportamento de objetos reais de forma controlada durante a execução dos testes.

Quando você está testando um aplicativo, pode haver dependências externas que não são fáceis de usar em um ambiente de teste. Essas dependências podem incluir, por exemplo, acesso a bancos de dados, serviços web ou dispositivos de hardware. Ao utilizar mocks, você pode criar versões simuladas dessas dependências, o que permite isolar o componente que está sendo testado, garantindo que ele funcione corretamente sem depender da disponibilidade ou comportamento real dessas dependências externas.

Vantagens de usar mocks em testes:

1. **Controle**: Com mocks, você pode controlar os comportamentos específicos que deseja simular para garantir que todos os cenários relevantes sejam testados de forma previsível.

2. **Independência**: Ao isolar o componente em teste das dependências reais, você pode executar os testes independentemente de outras partes do sistema.

3. **Velocidade**: Utilizar mocks pode acelerar os testes, pois não há necessidade de acessar recursos externos ou executar operações complexas durante a fase de teste.

4. **Reprodutibilidade**: Os testes com mocks geralmente são mais consistentes, uma vez que você controla os comportamentos simulados de forma precisa.

5. **Testar cenários difíceis de reproduzir**: Algumas situações, como falhas de rede ou erros em sistemas externos, podem ser difíceis de reproduzir em um ambiente de teste real. Com mocks, você pode facilmente simular essas condições e verificar como o sistema se comporta.

Embora os mocks sejam úteis em muitos casos, é importante lembrar que eles devem ser usados com cuidado. Testes com mocks precisam ser cuidadosamente projetados para refletir o comportamento real das dependências que estão sendo simuladas. Caso contrário, os testes podem se tornar ineficazes e levar a falsos resultados. Além disso, em alguns casos, é melhor realizar testes de integração que envolvam as dependências reais para garantir a validade e a eficácia dos testes em um ambiente mais próximo do mundo real.

## JEST

### Função `fn()`

O `jest.fn()` é uma função fornecida pelo framework de testes JavaScript chamado Jest. Sua função principal é criar uma função simulada, também conhecida como "função espiã" ou "spy function", que pode ser usada para rastrear chamadas, argumentos e retornos dessa função durante a execução dos testes.

Aqui estão algumas das principais funcionalidades e usos do `jest.fn()`:

1. **Rastreamento de chamadas**: O `jest.fn()` permite rastrear quantas vezes uma função foi chamada durante os testes. Isso é útil para verificar se determinadas funções estão sendo invocadas como esperado.

2. **Rastreamento de argumentos**: Além de rastrear a quantidade de vezes que a função foi chamada, você pode verificar quais argumentos foram passados em cada chamada. Isso permite verificar se os argumentos são corretos em diferentes cenários de teste.

3. **Definir retornos**: Ao criar um mock com `jest.fn()`, você pode especificar valores de retorno que a função deve fornecer quando é chamada. Isso é útil para simular o comportamento de funções que retornam resultados diferentes com base nos argumentos.

4. **Implementar comportamentos simulados**: Você pode usar o `jest.fn()` para criar implementações simuladas de funções reais que podem ser usadas em substituição às funções originais durante os testes.

Exemplo de uso:

```javascript
// Função que será espiada
function add(a, b) {
  return a + b;
}

// Criando uma função simulada (espionando a função "add")
const mockAdd = jest.fn();

// Definindo retorno simulado
mockAdd.mockReturnValue(10);

// Usando a função simulada em um teste
console.log(mockAdd(2, 3)); // Saída: 10

// Verificando quantas vezes a função simulada foi chamada
console.log(mockAdd.mock.calls.length); // Saída: 1

// Verificando os argumentos passados na chamada da função simulada
console.log(mockAdd.mock.calls[0]); // Saída: [2, 3]
```

algumas funcionalidades adicionais que que o `jest.fn()` oferece:

1. **Criando um mock (função simulada)**:
   O `jest.fn()` é usado para criar uma função simulada que rastreia informações sobre suas chamadas, argumentos e retornos. Isso permite a criação de funções simuladas que podem substituir as funções reais durante os testes, isolando o comportamento que está sendo testado.

2. **Retornos simulados**:
   Com o `jest.fn()`, você pode definir valores de retorno para a função simulada usando os métodos `mockReturnValue()`, `mockResolvedValue()`, `mockRejectedValue()`, entre outros. Isso permite que você especifique o comportamento simulado da função de acordo com cenários específicos de teste.

3. **Verificando chamadas**:
   O mock criado com `jest.fn()` registra informações sobre suas chamadas, permitindo que você verifique quantas vezes foi chamado usando `mock.calls.length`, e também quais argumentos foram passados em cada chamada usando `mock.calls[index]`.

4. **Limpando o mock**:
   É possível limpar as informações de chamadas do mock com `mock.mockClear()`. Isso é útil quando você deseja limpar os registros antes de realizar um novo conjunto de testes.

5. **Verificando se foi chamado**:
   O método `mock.calls.length` pode ser usado para verificar se a função simulada foi chamada um número esperado de vezes. Você também pode usar `mock.calls` para verificar os argumentos passados em cada chamada.

6. **Verificando se foi chamado com argumentos específicos**:
   O `jest.fn()` oferece uma função `mock.calls` que permite verificar se a função foi chamada com argumentos específicos. Isso é útil para garantir que a função está sendo invocada corretamente nos testes.

7. **Simulando comportamentos diferentes**:
   Dependendo dos argumentos passados, você pode configurar o `jest.fn()` para retornar valores diferentes para diferentes cenários de teste, simulando diferentes comportamentos da função.

Exemplo de uso adicional:

```javascript
// Criando uma função simulada
const mockFunc = jest.fn();

// Definindo diferentes retornos simulados com base nos argumentos
mockFunc.mockReturnValueOnce(42).mockReturnValueOnce(100).mockReturnValue(200);

// Teste
console.log(mockFunc()); // Saída: 42
console.log(mockFunc()); // Saída: 100
console.log(mockFunc()); // Saída: 200
console.log(mockFunc()); // Saída: 200

// Verificando a quantidade de chamadas
console.log(mockFunc.mock.calls.length); // Saída: 4

// Verificando os argumentos passados nas chamadas
console.log(mockFunc.mock.calls); // Saída: [[], [], [], []]
```

No exemplo acima, criamos uma função simulada chamada `mockFunc`. Definimos diferentes retornos simulados para cada chamada usando `mockReturnValueOnce()`. Depois disso, especificamos o valor de retorno padrão para qualquer chamada subsequente usando `mockReturnValue()`. O resultado é que a função simulada retornará valores diferentes dependendo de quantas vezes foi chamada.

O `jest.fn()` é uma ferramenta poderosa para simular e verificar o comportamento de funções em testes, permitindo que você isole partes do código para verificar sua funcionalidade de forma controlada e previsível.

### Função `expect().toBeCalledWith()`

é usada para verificar se uma função mock (simulada) foi chamada com argumentos específicos durante um teste.

Quando você está testando uma função que chama outras funções como parte do seu comportamento, é comum usar mocks para substituir essas funções e garantir que elas foram chamadas corretamente com os argumentos esperados.

Aqui está como a função `expect().toBeCalledWith()` funciona:

1. `expect`: Esta parte inicia a asserção para verificar se algo aconteceu corretamente durante o teste.

2. `()` : As chamadas de função mock são colocadas dentro dos parênteses.

3. `toBeCalledWith()`: Esta é a função de correspondência que especifica o que você espera que a função mock tenha sido chamada. Ela aceita os argumentos esperados que você quer verificar.

Exemplo de uso:

Suponha que você tenha a seguinte função que você deseja testar:

```js
// mathFunctions.js

function add(a, b) {
  return a + b;
}
```

E você está testando a função abaixo que usa a função `add()`:

```js
// calculator.js

const mathFunctions = require('./mathFunctions');

function calculator(a, b) {
  return mathFunctions.add(a, b);
}
```

Agora, em seus testes usando Jest, você pode fazer o seguinte:

```js
// calculator.test.js

const mathFunctions = require('./mathFunctions');
const calculator = require('./calculator');

// Mock a função add para evitar chamadas reais durante o teste
jest.mock('./mathFunctions');

test('calculator function calls add with correct arguments', () => {
  calculator(2, 3);

  // Verificar se a função add foi chamada com os argumentos corretos
  expect(mathFunctions.add).toBeCalledWith(2, 3);
});
```

Neste exemplo, a função `calculator(2, 3)` é chamada, e o teste verifica se a função `add()` dentro do módulo `mathFunctions` foi chamada exatamente com os argumentos `2` e `3`. Se a função `add()` não for chamada ou for chamada com argumentos diferentes, o teste falhará.

Essa é uma das muitas funções úteis fornecidas pelo Jest para facilitar a escrita de testes em JavaScript e verificar o comportamento do seu código de forma confiável.

### Função `jest.spyOn()`

É utilizada nos testes automatizados para criar "espiões" (ou "espies") em funções ou métodos específicos de objetos. Esses espiões permitem rastrear chamadas, acessos e comportamentos dessas funções durante a execução dos testes.

Quando você utiliza o `jest.spyOn()`, você pode substituir temporariamente a implementação original de uma função por uma simulação ou por um mock (simulação controlada) para observar o seu comportamento. Isso é especialmente útil quando você deseja verificar se uma função foi chamada com os argumentos corretos, quantas vezes foi chamada ou até mesmo substituir o seu retorno para fins de teste.

Aqui está um exemplo simples de como o `jest.spyOn()` pode ser usado:

Suponhamos que temos o seguinte módulo em um arquivo chamado `calculator.js`:

```javascript
// calculator.js
const Calculator = {
  add: (a, b) => a + b,
};
export default Calculator;
```

Em um teste utilizando o Jest, podemos criar um espião para a função `add` do objeto `Calculator` da seguinte forma:

```javascript
import Calculator from './calculator';

test('Testando função add', () => {
  const spyAdd = jest.spyOn(Calculator, 'add');
  const result = Calculator.add(2, 3);

  expect(spyAdd).toHaveBeenCalled();
  expect(spyAdd).toHaveBeenCalledWith(2, 3);
  expect(result).toBe(5);

  // Restaurar a função original após o teste.
  spyAdd.mockRestore();
});
```

Neste exemplo, o `jest.spyOn()` cria um espião para a função `add` do objeto `Calculator`. Isso nos permite verificar se a função foi chamada e se foi chamada com os argumentos corretos. Após o teste, é importante restaurar a função original usando `spyAdd.mockRestore()` para que outros testes não sejam afetados.

Em resumo, o `jest.spyOn()` é uma ferramenta poderosa para testar comportamentos de funções e métodos em testes automatizados, possibilitando a observação e verificação de como essas funções são utilizadas em um contexto controlado.

### Função `mockResolvedValue()`

Em testes com Jest, o `mockResolvedValue()` é uma função utilizada para simular o comportamento de uma função assíncrona que retorna uma Promise, substituindo sua implementação original por uma resolução de Promise controlada.

Quando trabalhamos com funções assíncronas que retornam Promises, é comum usar o `mockResolvedValue()` para criar um mock (simulação) que permite definir o valor retornado pela Promise durante os testes. Isso é especialmente útil quando queremos testar como nosso código reage a diferentes cenários, garantindo que ele funcione corretamente mesmo quando a função assíncrona retorna resultados específicos.

Vamos ver um exemplo para entender melhor:

Suponha que temos um módulo chamado `api.js`, que possui uma função assíncrona que faz uma requisição HTTP para uma API externa e retorna uma Promise com os dados:

```javascript
// api.js
import axios from 'axios';

const fetchDataFromAPI = async () => {
  const response = await axios.get('https://example-api.com/data');
  return response.data;
};

export default fetchDataFromAPI;
```

Agora, queremos testar um módulo chamado `dataProcessor.js`, que utiliza a função `fetchDataFromAPI()` para processar os dados e retornar um resultado específico. Vamos criar um teste para isso usando o `mockResolvedValue()`:

```javascript
// dataProcessor.js
import fetchDataFromAPI from './api';

const processAndFormatData = async () => {
  const data = await fetchDataFromAPI();
  // Processamento e formatação dos dados...
  return processedData;
};

export default processAndFormatData;
```

Aqui está o teste usando o Jest e o `mockResolvedValue()`:

```javascript
import processAndFormatData from './dataProcessor';
import fetchDataFromAPI from './api';

jest.mock('./api'); // Mockando o módulo 'api.js'

test('Testando processamento de dados', async () => {
  // Definindo o valor que a função fetchDataFromAPI deve retornar (aqui usamos um valor fictício para o teste)
  fetchDataFromAPI.mockResolvedValue({ id: 1, name: 'Produto A', price: 10 });

  const result = await processAndFormatData();

  // Realize os testes adequados no resultado esperado após o processamento...

  // Restaurar a implementação original após o teste.
  fetchDataFromAPI.mockRestore();
});
```

No exemplo acima, usamos `fetchDataFromAPI.mockResolvedValue({ id: 1, name: 'Produto A', price: 10 })` para definir que, quando a função `fetchDataFromAPI()` for chamada, ela deve retornar a Promise resolvida com os dados especificados (o objeto `{ id: 1, name: 'Produto A', price: 10 }`).

Assim, podemos controlar o comportamento da função assíncrona `fetchDataFromAPI` durante o teste, garantindo que nosso módulo `dataProcessor.js` seja testado de forma isolada e consistente, independentemente da resposta real da API externa.

## React Native Testing Library

### Função `fireEvent()`

O `fireEvent` no React Native Testing Library é uma função que permite simular eventos em elementos durante os testes automatizados. Com ele, você pode emular a ocorrência de eventos como cliques, toques, digitação de teclas, entre outros, em componentes renderizados, possibilitando testar a resposta do componente a esses eventos.

Essa função é especialmente útil para testar a interatividade de componentes, garantindo que eles respondam corretamente às ações dos usuários, como toques em botões, inserção de texto em campos de entrada e assim por diante.

O `fireEvent` é uma parte essencial do processo de testes, pois permite que você avalie se as funcionalidades do componente estão funcionando conforme o esperado, sem a necessidade de interagir manualmente com a interface do usuário para realizar testes repetitivos.

A sintaxe geral para usar o `fireEvent` é a seguinte:

```jsx
import { render, fireEvent } from '@testing-library/react-native';
import MyComponent from '../path/to/MyComponent';

test('Exemplo de teste usando fireEvent', () => {
  const { getByTestId } = render(<MyComponent />);

  // Seleciona o elemento com testID "myButton" e dispara um evento de pressionar nele
  const myButtonElement = getByTestId('myButton');
  fireEvent.press(myButtonElement);

  // Realiza outras verificações após o evento ser disparado
});
```

No exemplo acima, estamos usando o `fireEvent` para simular um evento de pressionar o botão com o `testID` "myButton" em nosso componente `MyComponent`. Isso permitirá testar como o componente responde quando o botão é pressionado.

Além do `press`, o `fireEvent` suporta outros tipos de eventos, como `change`, `submit`, `blur`, `focus`, `input`, entre outros. Cada tipo de evento é útil para simular diferentes interações do usuário e testar o comportamento do componente em várias situações.

Em resumo, o `fireEvent` no React Native Testing Library é uma ferramenta poderosa para simular eventos em componentes renderizados durante os testes automatizados. Ele ajuda a garantir que a interatividade do componente esteja funcionando corretamente, possibilitando testar várias funcionalidades sem a necessidade de interações manuais repetitivas.

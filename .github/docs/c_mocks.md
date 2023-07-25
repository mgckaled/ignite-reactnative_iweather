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

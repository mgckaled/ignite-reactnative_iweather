# Parte 2 - Teste de Componentes

## Conceitos

Tal como os teste unitários, unidades também devem ser testadas. Essas unidades são componentes que compõe a interface da nossa aplicação.

## React Native Testing Library

É uma biblioteca que fornece utilitários e funções para interagir e testar componentes simulando o comportamento do usuário, e verificando o estado e a aparência da interface do usuário resultante.

### Propriedade `testID`

A propriedade `testID` em componentes de React Native é utilizada para facilitar a escrita de testes automatizados (testes de UI, por exemplo) e para fins de acessibilidade.

Quando desenvolvemos aplicações React Native, é importante garantir que a interface do usuário (UI) funcione corretamente e que eventuais mudanças no código não quebrem recursos já implementados. Os testes automatizados desempenham um papel crucial nesse processo, pois permitem verificar se a aplicação está se comportando como esperado em diferentes cenários.

A propriedade `testID` é uma maneira de marcar componentes com um identificador exclusivo, o que permite que os testes acessem facilmente esses elementos específicos na interface do usuário durante a execução dos testes automatizados.

Além disso, a propriedade `testID` também é útil para melhorar a acessibilidade do aplicativo, permitindo que ferramentas de teste ou leitores de tela para usuários com deficiência visual possam identificar e interagir com os elementos da UI de forma mais precisa.

Aqui está um exemplo de como a propriedade `testID` pode ser usada em um componente de React Native:

```jsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MyComponent = () => {
  return (
    <View>
      <Text testID="myText">Hello, world!</Text>
      <TouchableOpacity testID="myButton" onPress={() => console.log('Button pressed!')}>
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyComponent;
```

Neste exemplo, os componentes `Text` e `TouchableOpacity` têm atributos `testID` definidos como "myText" e "myButton", respectivamente. Isso permitirá que os testes automatizados localizem e interajam com esses elementos de maneira fácil e confiável.

Em resumo, a propriedade `testID` é uma prática recomendada para tornar seus testes automatizados mais robustos e para melhorar a acessibilidade do seu aplicativo React Native.

### Função `render()`

A função `render` do React Native Testing Library é usada para renderizar componentes React Native em um ambiente de teste. Essa função cria uma representação virtual do componente, permitindo que você acesse e interaja com o mesmo durante a execução dos testes automatizados.

A principal função do `render` é montar o componente em um ambiente controlado de teste, simulando o processo de renderização que ocorreria em um aplicativo React Native em execução. Isso permite que você execute testes no componente e verifique se ele está se comportando conforme o esperado, sem a necessidade de executar a aplicação completa.

O `render` retorna um objeto com várias propriedades e métodos úteis para interagir com o componente renderizado e testá-lo:

1. `result`: É o objeto retornado pelo `render`, contendo informações sobre o componente renderizado, como métodos para interagir com ele.

2. `result.getByTestId`: Uma função que permite selecionar elementos com base em seus atributos `testID`. Isso é útil para encontrar elementos específicos na interface do usuário durante o teste.

3. `result.getByText`: Uma função que permite selecionar elementos com base em seu conteúdo de texto. Essa função é útil quando você precisa encontrar elementos com um texto específico renderizado.

4. `result.getByType`: Uma função que permite selecionar elementos com base em seu tipo de componente (por exemplo, Text, View, TouchableOpacity, etc.). Isso é útil quando você deseja testar a presença ou a estrutura de certos tipos de elementos.

5. `result.queryBy...`, `result.getAllBy...`: Outras funções de seleção semelhantes ao `getBy...`, mas que retornam `null` ou um array vazio caso o elemento não seja encontrado, em vez de lançar um erro.

6. `result.debug`: Uma função que imprime informações detalhadas sobre o componente renderizado na saída do console, útil para depurar os testes.

7. Métodos para interagir com o componente, como `result.fireEvent`, `result.update`, entre outros.

Em resumo, a função `render` é essencial para testar componentes React Native usando o React Native Testing Library. Ela permite criar uma representação virtual do componente e disponibiliza métodos para interagir e verificar o comportamento do componente durante os testes automatizados, facilitando a validação de comportamentos e a detecção de problemas antes de implantar o código em um ambiente de produção.

### Método `debug()`

Para realizar testes em componentes do React Native utilizando o React Native Testing Library e depurar o código durante o processo, você pode utilizar o método `debug()` fornecido pela biblioteca de testes.

O método `debug()` é usado para imprimir na saída do console informações detalhadas sobre o estado atual de um componente renderizado pelo React Native Testing Library. Isso pode ser útil para visualizar a estrutura do componente, suas propriedades, estado e outros detalhes relevantes durante o processo de teste.

Para utilizar o `debug()`, siga os seguintes passos:

- Importe as funções necessárias no seu arquivo de teste. Geralmente, você precisa importar `render` da biblioteca de testes e os componentes que deseja testar.

```jsx
import { render } from '@testing-library/react-native';
import MyComponent from '../path/to/MyComponent';
```

- Escreva seus testes e utilize o método `debug()` para inspecionar o componente renderizado:

```jsx
test('Exemplo de teste usando debug()', () => {
  const { debug } = render(<MyComponent />);
  debug(); // Imprime informações detalhadas sobre o componente na saída do console.
  // Resto do código do teste
});
```

Quando você executar o teste, a função `debug()` imprimirá as informações do componente renderizado na saída do console. Essas informações podem incluir a estrutura do componente, o conteúdo renderizado, as propriedades passadas, o estado do componente e muito mais. Isso é especialmente útil para depurar problemas de renderização ou para entender melhor o comportamento do componente durante o teste.

Lembre-se de remover ou comentar o `debug()` após concluir o processo de depuração, uma vez que, em testes maiores, pode gerar uma grande quantidade de informações de saída.

Com o uso adequado do `debug()` em conjunto com outras funções da React Native Testing Library, você pode criar testes mais eficazes e identificar problemas em seus componentes do React Native de forma mais rápida e fácil.

### Propriedade `screen`

A propriedade `screen` no React Native Testing Library é um conjunto de funções utilitárias que fornecem uma abstração para interagir com os componentes renderizados durante os testes. É uma alternativa à utilização direta das funções retornadas pelo `render`, tornando o código dos testes mais legível e simplificado.

O `screen` é exportado do pacote `@testing-library/react-native` e contém as mesmas funções de seleção de elementos e interação fornecidas pelo objeto retornado pelo `render`. As principais funções disponíveis na propriedade `screen` incluem:

1. `screen.getByTestId`: Seleciona elementos com base em seus atributos `testID`. É usado para encontrar elementos específicos na interface do usuário durante o teste.

2. `screen.getByText`: Seleciona elementos com base em seu conteúdo de texto. É útil quando você precisa encontrar elementos com um texto específico renderizado. Admite _regex_

3. `screen.getByType`: Seleciona elementos com base em seu tipo de componente (por exemplo, Text, View, TouchableOpacity, etc.). É útil quando você deseja testar a presença ou a estrutura de certos tipos de elementos.

4. `screen.queryBy...`, `screen.getAllBy...`: Outras funções de seleção semelhantes ao `getBy...`, mas que retornam `null` ou um array vazio caso o elemento não seja encontrado, em vez de lançar um erro.

5. `screen.debug`: Imprime informações detalhadas sobre o componente renderizado na saída do console, útil para depurar os testes.

6. Métodos para interagir com o componente, como `screen.fireEvent`, `screen.update`, entre outros.

A vantagem de utilizar o `screen` é que ele oferece uma abordagem mais concisa e legível para escrever testes. Em vez de ter que usar a desestruturação do objeto retornado pelo `render` e chamar as funções por meio desse objeto, você pode acessar as funções diretamente a partir do `screen`, tornando o código dos testes mais limpo e compreensível.

Exemplo de como usar o `screen`:

```jsx
import { render, screen } from '@testing-library/react-native';
import MyComponent from '../path/to/MyComponent';

test('Exemplo de teste usando screen', () => {
  render(<MyComponent />);

  // Seleciona o elemento com testID "myText"
  const myTextElement = screen.getByTestId('myText');

  // Seleciona o botão com testID "myButton" e dispara um evento de pressionar nele
  const myButtonElement = screen.getByTestId('myButton');
  screen.fireEvent.press(myButtonElement);

  // Verifica se o texto "Hello, world!" está presente no componente
  expect(myTextElement).toHaveTextContent('Hello, world!');
});
```

Em resumo, o `screen` do React Native Testing Library é uma maneira conveniente e legível de interagir com os componentes renderizados durante os testes, tornando o processo de teste mais organizado e eficiente.

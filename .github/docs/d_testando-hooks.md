# Parte 3 - Testando Hooks

## Conceitos

- Tomar cuidado com os erros de testes com atualização de estado através do `useEffect()`

## JEST

## React Native Testing Library

### Função `renderHook()`

É uma função da biblioteca de testes Testing Library React Native. Sua função principal é permitir que você teste hooks personalizados em componentes React Native.

Com o `renderHook`, você pode simular a renderização de um componente que utiliza um hook específico e, em seguida, acessar e interagir com o resultado retornado pelo hook. Isso é útil para testar a lógica interna de um hook de forma isolada, sem precisar renderizar todo o componente que o utiliza.

Por exemplo, se você tem um hook personalizado que gerencia um estado ou uma funcionalidade específica em um componente React Native, pode usar o `renderHook` para garantir que o hook se comporte corretamente em diferentes cenários e condições.

O `renderHook` permite que você crie testes mais precisos e focados na lógica do hook, melhorando a qualidade e a confiabilidade dos seus testes em aplicações React Native.

### Opção `wrapper`

A função de wrapper é opcional e serve para simular o ambiente em que o hook é utilizado em um componente real. Isso pode ser útil quando o hook depende de algum contexto específico, como um provedor de estado ou um tema, que precisa ser fornecido durante os testes.

Vamos ver um exemplo de como utilizar a função de wrapper no `renderHook`. Suponha que você tem um hook chamado `useCustomHook` que depende de um provedor de estado `CustomContextProvider`. Seu teste pode ficar assim:

```jsx
import { renderHook } from '@testing-library/react-hooks';
import { CustomContextProvider } from '../path/to/customContext';
import useCustomHook from '../path/to/useCustomHook';

test('Testando o useCustomHook', () => {
  // Configuração do contexto necessário para o hook
  const wrapper = ({ children }) => (
    <CustomContextProvider>{children}</CustomContextProvider>
  );

  // Renderiza o hook dentro do contexto fornecido pelo wrapper
  const { result } = renderHook(() => useCustomHook(), { wrapper });

  // A partir daqui, você pode acessar e interagir com o resultado retornado pelo hook
  // e fazer asserções para garantir que o hook está se comportando como o esperado.
});

// OU...

import { renderHook } from '@testing-library/react-hooks';
import { CustomContextProvider } from '../path/to/customContext';
import useCustomHook from '../path/to/useCustomHook';

test('Testando o useCustomHook', () => {
  // Renderiza o hook dentro do contexto fornecido pelo CustomContextProvider
  const { result } = renderHook(() => useCustomHook(), {
    wrapper: CustomContextProvider,
  });

  // A partir daqui, você pode acessar e interagir com o resultado retornado pelo hook
  // e fazer asserções para garantir que o hook está se comportando como o esperado.
});
```

Com o wrapper, você pode garantir que o `useCustomHook` tenha acesso ao contexto fornecido pelo `CustomContextProvider`, possibilitando testar o hook em um cenário mais realista.

É importante mencionar que a utilização da função de wrapper vai depender das dependências e configurações do hook que está sendo testado. Nem sempre será necessário utilizá-la, mas ela está disponível para casos em que seja importante prover um contexto específico para o correto funcionamento do hook durante os testes.

### Funcões `waitFor()` e `act()`

Em testes com a Testing Library React Native, as funções `waitFor()` e `act()` são utilizadas para lidar com as operações assíncronas e para sincronizar o ciclo de vida dos componentes durante os testes.

- `waitFor()`: A função `waitFor()` é usada para aguardar que uma determinada condição seja atendida antes de continuar com os testes. Essa função é especialmente útil quando você tem operações assíncronas no seu código, como requisições de rede ou atualizações de estado que podem demorar um pouco para serem concluídas.

Por exemplo, se você está testando um hook que faz uma requisição assíncrona e quer garantir que os dados da requisição foram carregados corretamente antes de prosseguir com os testes, pode usar `waitFor()` para esperar que os dados estejam disponíveis:

```jsx
import { renderHook, act } from '@testing-library/react-hooks';
import useAsyncHook from '../path/to/useAsyncHook';

test('Testando useAsyncHook com requisição assíncrona', async () => {
  const { result, waitFor } = renderHook(() => useAsyncHook());

  // Ação que dispara a requisição assíncrona
  act(() => {
    result.current.fetchData();
  });

  // Espera que a requisição seja concluída e os dados estejam disponíveis
  await waitFor(() => expect(result.current.data).toBeDefined());

  // Faz asserções nos dados carregados pela requisição
  expect(result.current.data).toHaveLength(3);
});
```

- `act()`: A função `act()` é usada para envolver interações e atualizações de estado no componente testado. Isso é importante para garantir que todas as atualizações de estado assíncronas e efeitos colaterais sejam resolvidos corretamente antes de prosseguir com as asserções do teste.

No exemplo anterior, já utilizamos `act()` para garantir que a ação de disparar a requisição assíncrona seja realizada dentro do escopo da função `act()`. Assim, a Testing Library pode aguardar a resolução das operações assíncronas antes de prosseguir com a próxima etapa dos testes.

Ambas as funções, `waitFor()` e `act()`, são poderosas ferramentas para lidar com as complexidades dos testes envolvendo contextos e operações assíncronas. Elas ajudam a garantir que o estado do componente esteja atualizado e correto para asserções e evitam falsos positivos ou problemas de sincronização durante os testes.

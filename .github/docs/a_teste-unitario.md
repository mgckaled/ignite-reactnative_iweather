# Parte 1 - Teste Unitário

## Conceitos

O teste unitário testa as unidades ou funcionalides da aplicação isoladamente para verificar se funcionam corretamente.

### Vantagens

- Garantem a detecção precoce de erros (bugs e possíveis bugs).
- Melhoram a qualidade do software
- Facilitam a manutenção
- Economiza tempo e custo
- Documenta o comportamento esperado

## Boas Práticas

- Escolha nomes descritivos para suas descrições de teste
- Estruture hierarquicamente usando o `describe()` para agrupar testes relacionados
- Seja conciso e focado, mantendo cada teste direcionado a um único comportamento
- Evite aninhar demais os `describe()` para manter a legibilidade
- Mantenha os testes independentesp
- Mantenha os testes pequenos e rápidos para feedback rápido
- Use `<name>.test.ts` para nomeação dos arquivos de teste

## JEST

### Métodos `test()` e `it()`

Tanto o método `test()` quanto o `it()` são utilizados para definir testes no framework de testes Jest. Eles têm a mesma finalidade e, na prática, não há diferença funcional significativa entre eles. A diferença principal está na sintaxe e na preferência pessoal do desenvolvedor.

O método `test()` é uma função global fornecida pelo Jest para definir os testes. Ele recebe dois argumentos: uma descrição do teste (uma string que descreve o que o teste faz) e uma função contendo o código do teste.

O método `it()` é uma alias (ou seja, uma abreviação) para o método `test()`. Em essência, eles fazem exatamente a mesma coisa. A única diferença é que `it()` é fornecido para tornar os testes mais legíveis para aqueles que preferem uma sintaxe mais parecida com linguagem natural. A ideia é que você possa ler o teste como uma frase completa, como "it should do something" (deve fazer algo).

Independentemente de qual sintaxe você escolher, Jest irá executar seus testes da mesma forma e fornecer resultados claros sobre o sucesso ou falha de cada teste. A escolha entre `test()` e `it()` não afetará a qualidade ou efetividade dos testes em si. Portanto, você pode usar o que melhor se adequar ao seu estilo de codificação e ao de sua equipe.

### Método `expect()`

É uma parte fundamental do framework de testes Jest, amplamente utilizado para escrever testes em JavaScript e TypeScript. O Jest é uma ferramenta popular para testar aplicativos e bibliotecas JavaScript devido à sua simplicidade e recursos integrados, como detecção automática de testes e execução paralela. O método `expect()` permite que você avalie os resultados dos testes em relação ao comportamento esperado.

### Método `toBe()`

É usado para verificar igualdade estrita (===) entre o valor obtido no teste e o valor esperado. Isso significa que os valores devem ser do mesmo tipo e ter o mesmo conteúdo para o teste ser bem-sucedido. Lembre-se de que o `toBe()` verifica a igualdade estrita, portanto, se você estiver comparando objetos ou arrays, eles devem ser exatamente iguais, incluindo referência de memória, para o teste passar. Se você precisar verificar a igualdade de valores, mas não a igualdade estrita, o Jest também fornece outros métodos de correspondência (matchers), como `toEqual()` que verifica a igualdade profunda, ou `toBeCloseTo()` para comparações com números de ponto flutuante que podem ter imprecisões de arredondamento.

### Método `describe()`

O método  `describe()` é outra função importante fornecida pelo framework de testes Jest. Ele é usado para agrupar testes relacionados e criar uma estrutura mais organizada para os testes. O `describe()` ajuda a dividir e categorizar os testes em blocos, facilitando a leitura e a compreensão do que está sendo testado em diferentes partes do código.

```ts
describe("nome do conjunto", () {
  it("nome do teste X", () {
    // código de implementação
  })
  it("nome do teste Y", () {
    // código de implementação
  })
})
```

Além disso, você também pode usar outros `describe()` dentro de um `describe()`, criando assim uma hierarquia de agrupamentos para organizar ainda mais os testes.

Usar `describe()` não é obrigatório, mas é uma prática recomendada, especialmente quando você tem muitos testes e deseja organizar e estruturar melhor o código de teste para facilitar a manutenção e colaboração com outros desenvolvedores.

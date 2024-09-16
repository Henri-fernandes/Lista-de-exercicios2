// 1. Acessando Propriedades de Objetos
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "Prata"
};

console.log("Exercício 1 - Carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}
console.log("");

// 2. Verificando Propriedades
const livro = {
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    anoPublicacao: 1605,
    genero: "Romance"
};

let temEditora = false;
for (let prop in livro) {
    if (prop === 'editora') {
        temEditora = true;
    }
}

if (!temEditora) {
    livro.editora = "Desconhecida";
}
console.log("Exercício 2 - Livro:");
console.log(livro);
console.log("");

// 3. Filtrando Propriedades de Objetos
const produto = {
    nome: "Celular",
    preco: 1200,
    desconto: 100,
    garantia: 12
};

function filtrarPropriedades(obj, valorMinimo) {
    const novoObjeto = {};
    for (let prop in obj) {
        if (obj[prop] > valorMinimo) {
            novoObjeto[prop] = obj[prop];
        }
    }
    return novoObjeto;
}

console.log("Exercício 3 - Produto:");
console.log(filtrarPropriedades(produto, 100));
console.log("");

// 4. Iterando Sobre Arrays de Objetos
const pessoas = [
    { nome: "João", idade: 25, cidade: "São Paulo" },
    { nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
    { nome: "Pedro", idade: 40, cidade: "Salvador" }
];

console.log("Exercício 4 - Pessoas:");
for (let pessoa of pessoas) {
    console.log(`${pessoa.nome} tem ${pessoa.idade} anos e mora em ${pessoa.cidade}`);
}
console.log("");

// 5. Calculando Valores em Arrays de Objetos
const alunos = [
    { nome: "Ana", nota1: 8, nota2: 7 },
    { nome: "Carlos", nota1: 6, nota2: 5 },
    { nome: "Bianca", nota1: 9, nota2: 8 }
];

console.log("Exercício 5 - Alunos:");
for (let aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`${aluno.nome} - Média: ${media}`);
}
console.log("");

// 6. Filtrando Arrays de Objetos
const funcionarios = [
    { nome: "Lucas", cargo: "Gerente", salario: 5000 },
    { nome: "Julia", cargo: "Analista", salario: 3000 },
    { nome: "Marcos", cargo: "Desenvolvedor", salario: 2500 }
];

console.log("Exercício 6 - Funcionários:");
for (let funcionario of funcionarios) {
    if (funcionario.salario > 3000) {
        console.log(funcionario.nome);
    }
}
console.log("");

// 7. Modificando Objetos em um Array
const produtos = [
    { nome: "Notebook", preco: 3000, desconto: 0.1 },
    { nome: "Mouse", preco: 50, desconto: 0.05 },
    { nome: "Teclado", preco: 100, desconto: 0.1 }
];

console.log("Exercício 7 - Produtos com Desconto:");
produtos.forEach(produto => {
    const precoComDesconto = produto.preco * (1 - produto.desconto);
    console.log(`${produto.nome} - Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`);
});
console.log("");

// 8. Criando Novos Arrays a Partir de Objetos
const filmes = [
    { titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { titulo: "O Senhor dos Anéis", diretor: "Peter Jackson", anoLancamento: 2001 },
    { titulo: "Star Wars", diretor: "George Lucas", anoLancamento: 1977 }
];

const titulos = [];
filmes.forEach(filme => {
    titulos.push(filme.titulo);
});

console.log("Exercício 8 - Títulos dos Filmes:");
console.log(titulos);
console.log("");

// 9. Contabilizando Elementos com uma Condição
const clientes = [
    { nome: "Paulo", idade: 35, cidade: "Curitiba" },
    { nome: "Fernanda", idade: 25, cidade: "São Paulo" },
    { nome: "Roberto", idade: 40, cidade: "Rio de Janeiro" }
];

let contador = 0;
clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        contador++;
    }
});

console.log("Exercício 9 - Clientes com mais de 30 anos:");
console.log(`Número de clientes com mais de 30 anos: ${contador}`);
console.log("");

// 10. Criando Relatórios com Objetos e Arrays
const vendas = [
    { produto: "TV", quantidade: 2, valor: 1200 },
    { produto: "Celular", quantidade: 5, valor: 800 },
    { produto: "Notebook", quantidade: 1, valor: 3000 }
];

let totalVendas = 0;
vendas.forEach(venda => {
    totalVendas += venda.quantidade * venda.valor;
});

console.log("Exercício 10 - Valor total de Vendas:");
console.log(`Valor total de vendas: R$ ${totalVendas}`);
console.log("");

// 11. Agrupando Elementos com forEach
const pedidos = [
    { cliente: "Ana", produto: "Notebook", quantidade: 1 },
    { cliente: "João", produto: "Celular", quantidade: 3 },
    { cliente: "Ana", produto: "Mouse", quantidade: 2 }
];

const produtosPorCliente = {};

pedidos.forEach(pedido => {
    if (!produtosPorCliente[pedido.cliente]) {
        produtosPorCliente[pedido.cliente] = 0;
    }
    produtosPorCliente[pedido.cliente] += pedido.quantidade;
});

console.log("Exercício 11 - Quantidade total por Cliente:");
console.log(produtosPorCliente);
console.log("");

// 12. Atualizando um Array de Objetos
const estoque = [
    { produto: "TV", quantidade: 2, minimo: 3 },
    { produto: "Celular", quantidade: 5, minimo: 4 },
    { produto: "Notebook", quantidade: 1, minimo: 2 }
];

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2;
    }
});

console.log("Exercício 12 - Estoque Atualizado:");
console.log(estoque);
console.log("");

// 13. Implementando um Carrinho de Compras
const carrinho = {
    itens: [
        { nome: "Notebook", quantidade: 1, precoUnitario: 3000 },
        { nome: "Mouse", quantidade: 2, precoUnitario: 50 },
        { nome: "Teclado", quantidade: 1, precoUnitario: 100 }
    ]
};

let totalCarrinho = 0;
carrinho.itens.forEach(item => {
    totalCarrinho += item.quantidade * item.precoUnitario;
});

console.log("Exercício 13 - Valor Total do Carrinho:");
console.log(`Valor total do carrinho: R$ ${totalCarrinho}`);
console.log("");

// 14. Manipulando Objetos Complexos
const empresa = {
    departamentos: [
        {
            nome: "TI",
            funcionarios: ["João", "Ana"]
        },
        {
            nome: "RH",
            funcionarios: ["Carlos", "Beatriz"]
        }
    ]
};

console.log("Exercício 14 - Funcionários e Departamentos:");
for (let departamento of empresa.departamentos) {
    for (let funcionario of departamento.funcionarios) {
        console.log(`${funcionario} trabalha no departamento de ${departamento.nome}`);
    }
}
console.log("");

// 15. Filtrando e Somando Valores
const transacoes = [
    { tipo: "entrada", valor: 100 },
    { tipo: "saída", valor: 50 },
    { tipo: "entrada", valor: 200 },
    { tipo: "saída", valor: 30 }
];

let saldoFinal = 0;
transacoes.forEach(transacao => {
    if (transacao.tipo === "entrada") {
        saldoFinal += transacao.valor;
    } else {
        saldoFinal -= transacao.valor;
    }
});

console.log("Exercício 15 - Saldo Final:");
console.log(`Saldo final: R$ ${saldoFinal}`);

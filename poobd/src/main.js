let conn = require(./condb);

let Pizza = require(./model/Pizza);

async function insert(object) {
    let res = await Pizza.create(object)
    console.log(res);
}

 let p1 = {nome: "Frampiry",  valor:"22,00 reais", tamanho: "Pequena"};
 let p2 = {nome: "Calapiry",  valor:"25,00 reais", tamanho: "Pequena"};
 let p3 = {nome: "Portuguesa",  valor:"25,00 reais", tamanho: "Pequena"};
 let p4 = {nome: "Mussarela",  valor:"22,00 reais", tamanho: "Pequena"};
 let p5 = {nome: "Vegetariana",  valor:"22,00 reais", tamanho: "Pequena"};
 inserir(p1, p2, p3, p4, p5);

async function search() {
    let result = await Pizza.findAll();
    console.log(result);
}
search(); 
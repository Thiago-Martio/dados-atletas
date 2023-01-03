//definição da classe Atleta
class Atleta{
    constructor(nome, idade, peso, altura, notas){ //recebe os valores informados na criação da instancia e os atribui a ela
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria(idade){ //verifica e retorna qual a categoria a partir de uma idade fornecida
        if(idade >= 9 && idade <= 11){
            return "Infantil";
        }else if(idade >= 12 && idade <=13){
            return "Juvenil";
        }else if(idade >= 14 && idade <= 15){
            return "Intermediário";
        }else if(idade >= 16 && idade <= 30){
            return "Adulto";
        }else{
            return "Sem categoria";
        }
    }
    calculaIMC(peso, altura){ //calcula e retorna o imc a partir de uma peso e altura fornecidos
        return peso / (altura * altura);
        
    }
    calculaMediaValida(notas){//calcula e retorna a média válida(considerando apenas as 3 notas do meio)
        let notasValidas = notas.sort().slice(1, 4); //atribui à variável um novo array ordenado, sem a maior e menor nota
        let soma = notasValidas.reduce(function(total, atual) {//faz a redução do array usando soma
            total += atual;
            return total;
          }, 0);
        return soma / notasValidas.length;
    }

    obtemNomeDoAtleta(){
        return `Nome: ${this.nome}`;
    }
    obtemIdadeDoAtleta(){
        return `Idade: ${this.idade}`;
    }
    obtemPesoDoAtleta(){
        return `Peso: ${this.peso}`;
    }
    obtemNotasAtleta(){
        return `Notas: ${this.notas}`;
    }
    obtemCategoria(){
        return `Categoria: ${this.calculaCategoria(this.idade)}`;
    }
    obtemIMC(){
        return `IMC: ${this.calculaIMC(this.peso, this.altura)}`;
    }
    obtemMediaValida(){
        return `Média Válida: ${this.calculaMediaValida(this.notas)}`;
    }

}


// Declaração de uma instancia de Atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeDoAtleta());
console.log(atleta.obtemIdadeDoAtleta());
console.log(atleta.obtemPesoDoAtleta());
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoria());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());
/*    saída esperada:
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 8.766666666666666 */
class Pessoa {
    nome
    idade
    profissao

    constructor(nome, idade, profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao

    }    
}
 
class Cliente extends Pessoa {
    telefone
    email
    clienteDesde

    constructor(nome, idade, profissao, telefone, email, clienteDesde){
        super(nome, idade, profissao)
        this.telefone = telefone
        this.email = email
        this.clienteDesde = clienteDesde
        
    }
}



class Produto {
    nome
    preco
    quantidade

    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;   
    }

vender(quantidadeVendida){
    if(this.quantidade >= quantidadeVendida){
        this.quantidade - quantidadeVendida
        console.log(`Venda realizada, ${quantidadeVendida} canetas vendidas. ${this.quantidade} canetas em estoque`);
    }else{
        console.log(`estoque insuficiente`)
    }

}
repor(quantidadeReposta){
    this.quantidade += quantidadeReposta
}

mostrarEstoque(){
    console.log(`O  produto ${this.nome} possui ${this.quantidade} unidade disponíveis em estoque`);
}
    
atualizarPreco(novoValor){
    preco += novoValor

}
}
const produto1 = new Produto("caneta", 2, 100)



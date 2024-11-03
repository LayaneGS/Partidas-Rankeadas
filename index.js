function quantidadeDeVitoria(vitorias, derrotas){

    let resultado = vitorias - derrotas;

    if (resultado >= 10){
        return "Ferro";
    } else if(resultado >= 11 && resultado <= 20){
        return "Bronze";
    } else if(resultado >= 21 && resultado <= 20){
        return "Prata";
    } else if(resultado >= 51 && resultado <= 80){
        return "Ouro";
    } else if(resultado >= 81 && resultado <= 90){
        return "Diamante";
    } else if (resultado >= 91 && resultado <= 100){
        return "Lendario";
    } else {
        return "Imortal";
    }
         
}

let vitorias = 10;
let derrotas = 20;

console.log("O Herói tem saldo de " + vitorias + "está no nível de " + resultado);
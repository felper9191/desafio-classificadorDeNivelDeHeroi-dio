let nomeDoHeroi = "Felipe";
let quantidadeDeExperiencia = 50199;
let nivelDoHeroi = "";

    if (quantidadeDeExperiencia < 1000) {       
        nivelDoHeroi = "Ferro";
    } else if (quantidadeDeExperiencia >= 1001 && quantidadeDeExperiencia <= 2000) {
        nivelDoHeroi = "Bronze";
	} else if (quantidadeDeExperiencia >= 2001 && quantidadeDeExperiencia <= 5000) {
        nivelDoHeroi = "Prata";
    } else if (quantidadeDeExperiencia >= 5001 && quantidadeDeExperiencia <= 7000) {
        nivelDoHeroi = "Ouro";
    } else if (quantidadeDeExperiencia >= 7001 && quantidadeDeExperiencia <= 8000) {
        nivelDoHeroi = "Platina";
    } else if (quantidadeDeExperiencia >= 8001 && quantidadeDeExperiencia <= 9000) {
        nivelDoHeroi = "Ascendente";
    } else if (quantidadeDeExperiencia >= 9001 && quantidadeDeExperiencia <= 10000) {
        nivelDoHeroi = "Imortal";
    } else if (quantidadeDeExperiencia >= 10001) {
        nivelDoHeroi = "Radiante";
    }

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi + ".");
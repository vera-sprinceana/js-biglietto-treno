//quanti chilometri vuole percorrere?
let chilometri= prompt("quanti chilometri vuole percorrere");
console .log (chilometri);
document.getElementById("chilometri").innerHTML=chilometri;

//quanti anni ha?
const età= prompt("quanti anni ha?");
console .log (età);
document.getElementById("età").innerHTML=età;
//calcolo del prezzo in base ai km (0.21 € al km)
prezzoAlKm=(0.21)
var prezzo=(chilometri) * (prezzoAlKm).toFixed(4);
console .log (prezzo); 
document.getElementById("prezzo").innerHTML=prezzo;
//sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65
sconto1=(20)
let prezzoScontato1 = ((prezzo / 100).toFixed(2) * (20))- (prezzo) ;
sconto2=(40)
let prezzoScontato2 = ((prezzo / 100).toFixed(2) * (40)) - (prezzo);

if(età < 18){
    prezzoScontato1
    console .log (prezzoScontato1);
    document.getElementById("prezzoScontato1").innerHTML=prezzoScontato1;
}else if (età => 65){
    prezzoScontato2
    console .log (prezzoScontato2);
    document.getElementById("prezzoScontato2").innerHTML=prezzoScontato2;
}else (età > 18);{
    prezzo
}
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo
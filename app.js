import myReclutas from "./components/myReclutas.js";

let datareclutas = 'http://localhost:4500/reclutas';
myReclutas.reculta(datareclutas);

const botones = document.querySelector('.filtros')
botones.addEventListener("click", e =>{
    let btnMenores = document.querySelector('.btn-menores')
    let btnMeses = document.querySelector('.btn-meses')
    if(e.target === btnMenores){
        console.log("menores");
        let datareclutas = 'http://localhost:4500/reclutas?edad_lte=18';
        myReclutas.reculta(datareclutas);
    } else if(e.target === btnMeses){
        console.log("meses");
    }
})
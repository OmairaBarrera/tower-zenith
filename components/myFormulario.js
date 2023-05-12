let form = document.querySelector(".from-recluta")
addEventListener("submit", async e =>{
    if(e.target === form){
        e.preventDefault();
        try{
            await fetch(`http://localhost:4500/reclutas`,{
                method: "POST",
                body: JSON.stringify({
                    nombre: e.target.nombre.value,
                    edad: Number(e.target.edad.value),
                    telefono: Number(e.target.telefono.value),
                    email: e.target.email.value,
                    direccion: e.target.direccion.value,
                    f_nacimiento: e.target.nacimiento.value,
                    n_identificacion: Number(e.target.identificacion.value),
                    f_ingreso: e.target.ingreso.value,
                    teamId: 1
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } catch(error){
            console.log(error);
        }
    }
})
let wsReclutas = {

    async dataFech (url){
        const resuls = fetch(url);
        let response = await resuls
        let data = await response.json()
        return data
    },
    async reclutas(data){
        let reclutas = await this.dataFech(data);
        return this.reclutaDibujar(reclutas);
    },
    async reclutaDibujar(data){
        return `
        <table class="tabla">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th># Identificacion</th>
                    <th>Edad</th>
                    <th>Telefono</th>
                    <th>Team</th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody> 
                ${data.map((val,id)=>`
                <tr>
                    <td>${val.nombre}</td> 
                    <td>${val.n_identificacion}</td>
                    <td>${val.edad}</td>
                    <td>${val.telefono}</td>
                    <td>${val.teamId}</td>
                    <td><img src="./asset/img/actualizar.png"/></td>
                    <td><img src="./asset/img/eliminar.png"/></td>
                </tr>`
                ).join("")};
            </tbody>
        </table>`
    }
}

self.addEventListener("message", async(e)=>{
    postMessage(await wsReclutas[`${e.data.module}`](e.data.data));
})
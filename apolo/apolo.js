let data = "http://localhost:4500/team/3/reclutas";

const resuls = fetch(data);
let response = await resuls
let recluSputnik = await response.json()
let tabla = document.querySelector(".info-tabla");
tabla.innerHTML = "";
tabla.insertAdjacentHTML('beforeend',
    `
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
                ${recluSputnik.map((val,id)=>`
                <tr>
                    <td>${val.nombre}</td> 
                    <td>${val.n_identificacion}</td>
                    <td>${val.edad}</td>
                    <td>${val.telefono}</td>
                    <td>${val.teamId}</td>
                    <td><img src="../asset/img/actualizar.png"/></td>
                    <td><img src="../asset/img/eliminar.png"/></td>
                </tr>`
                ).join("")};
            </tbody>
        </table>`
);
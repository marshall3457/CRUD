const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());


const crearCliente = (nombre,email) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify({nombre,email, id: uuid.v4()})
    })
}


const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
    })
}

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => 
    respuesta.json());
}

const actualizarCliente = (nombre,email,id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre, email})  //Para convertilo en una cadena json osea un objeto ya que no lee string normales,
    })                                          //En el contexto de la función actualizarCliente, se utiliza JSON.stringify para convertir el objeto {nombre, email} en una cadena JSON. Esto se debe a que el cuerpo (body) de la solicitud HTTP debe ser una cadena, y no un objeto JavaScript.
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err))

}


export const clientService = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,

};





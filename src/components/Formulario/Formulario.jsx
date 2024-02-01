import React, { useState } from 'react'

export const Formulario = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    email: ''
  });

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Datos del formulario:', formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Apellido:
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Dirección:
        <input
          type="text"
          name="direccion"
          value={formData.direccion}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <button type="submit">Enviar</button>
    </form>
  )
}

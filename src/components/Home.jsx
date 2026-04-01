import React, { useEffect, useRef, useState } from 'react'

const Home = () => {
  const [items, setItems] = useState([])
  const [newItemName, setNewItemName] = useState('')
  const [newItemPriority, setNewItemPriority] = useState(1)
  const API_URL =
    window.location.hostname === 'localhost'
      ? 'http://localhost:5000/items'
      : 'https://mern-backend-sm.vercel.app/items'
  const [editingId, setEditingId] = useState(null) // Guardará el ID del item que estamos editando
  const buttonRef = useRef(null) // Creamos la percha para el botón

  // Read: obtener todos los items
  const fetchItems = async () => {
    try {
      const res = await fetch(API_URL)
      const data = await res.json()
      // Ordenamos los items por prioridad
      // data.item porque así lo definí en mi server.js
      const sortedItems = (data.item || []).sort(
        (a, b) => a.priority - b.priority,
      )
      setItems(sortedItems)
    } catch (error) {
      console.error('Error fetching: ', error)
    }
  }

  // Update: prepara para actualizar un item
  const prepareEdit = (item) => {
    setNewItemName(item.name) // Ponemos el nombre actual en el input
    setNewItemPriority(item.priority) // Ponemos la prioridad actual en el input
    setEditingId(item._id) // Guardamos el ID para saber cuál vamos a utilizar
  }

  // Resetea el formulario
  const resetForm = () => {
    setNewItemName('') // Limpiar input
    setNewItemPriority(1) // Reset a valor por defecto
    setEditingId(null) // Limpiar modo edición
  }

  // Create y Update: enviar nuevo item al backend
  const handleSubmit = async () => {
    if (!newItemName) return // No enviar si está vacío

    const method = editingId ? 'PUT' : 'POST'
    const url = editingId ? `${API_URL}/${editingId}` : API_URL

    try {
      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newItemName,
          priority: Number(newItemPriority), // Aseguramos que sea número
        }),
      })
      if (res.ok) {
        resetForm()
        fetchItems() // Recargar Lista

        // Esto quita la iluminación
        if (buttonRef.current) {
          buttonRef.current.blur()
        }
      }
    } catch (error) {
      console.error('Error creando item: ', error)
    }
  }

  // Delete: eliminar un item
  const deleteItem = async (id) => {
    const confirmed = window.confirm(
      '¿Estás seguro de que quieres eliminar este item?',
    )
    if (!confirmed) return // Si no confirma su intención de eliminar, no lo elimina
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        // Pedir la lista actualizada al servidor
        fetchItems()
      }
    } catch (error) {
      console.error('Error eliminando item: ', error)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <main style={{ padding: '20px' }}>
      <h1>Práctica MERN: Lista de Tareas</h1>

      {/* Formulario simple */}
      <div
        style={{
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Nueva tarea..."
          style={{ padding: '6px' }}
        />
        <label
          htmlFor="priority-select"
          style={{ fontSize: '14px', fontWeight: 'bold' }}
        >
          Nivel de Prioridad:
        </label>
        <select
          id="priority-select"
          value={newItemPriority}
          onChange={(e) => setNewItemPriority(e.target.value)}
          style={{ padding: '6px', cursor: 'pointer' }}
        >
          <option value={1}>Prioridad 1 (Alta)</option>
          <option value={2}>Prioridad 2 (Media)</option>
          <option value={3}>Prioridad 3 (Baja)</option>
        </select>
        {/* Cambiamos el texto del botón según el estado */}
        <button ref={buttonRef} onClick={handleSubmit}>
          {editingId ? 'Guardar' : 'Agregar'}
        </button>
        {editingId && (
          <button
            onClick={() => {
              resetForm()
            }}
            style={{ marginLeft: '5px' }}
          >
            Cancelar
          </button>
        )}
      </div>

      {/* Listado de Items */}
      <ul style={{ listStyle: 'none', padding: 0, minHeight: '300px' }}>
        {items.map((item) => (
          <li
            key={item._id}
            style={{
              marginBottom: '8px',
              border: '1px solid #444',
              padding: '8px',
              borderRadius: '6px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span>{item.name}</span>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '15px' }}
              >
                <span>
                  Prioridad:{' '}
                  <strong style={{ color: '#00d1b2' }}>{item.priority}</strong>
                </span>
                <button
                  onClick={() => prepareEdit(item)}
                  style={{ marginLeft: '10px' }}
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteItem(item._id)}
                  style={{ cursor: 'pointer', color: '#ff8080' }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home

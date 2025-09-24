export const ENDPOINTS = {
  vehiculos: {
    consultarTodos: '/Vehiculos/ConsultarTodos',
    consultarPorId: (id: number) => `/Vehiculos/Consultar/${id}`,
    registrar: '/Vehiculos/Registrar',
    actualizar: '/Vehiculos/Actualizar',
    eliminar: (id: number) => `/Vehiculos/Eliminar?id=${id}` 
  }
};

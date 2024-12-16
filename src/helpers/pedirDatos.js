import data from "../data/data.json"



export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(  () => {
        resolve(data);
    }, 500)
})
}

export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {
    // Busca el item en los datos usando el id que se pasa como argumento
    const item = data.find((el) => el.id === id);
    
    if (item) {
      resolve(item);  // Si el item existe, lo devuelve
    } else {
      reject({ error: "No se encontró el producto" });  // Si no lo encuentra, rechaza la promesa
    }
  });
};
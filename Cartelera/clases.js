let obtenerCartelera = async ()=>{
    await fetch("pelis.json")
    .then((res)=>res= res.json())
    .then((res)=>res=res)
}
let data
obtenerCartelera()
console.log(data)
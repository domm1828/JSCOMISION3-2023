/** peticiones http fetch */
const url ="https://dummyjson.com/";
const leerJson = async () =>{
    const response = await fetch("https://dummyjson.com/products/1",{method:"GET"});
    const data = await response.json();
    console.log(data);
}
//leerJson();

const allProductos = async () =>{
    const response = await fetch(url+"products");
    const data = await response.json();
    console.log(data);
    document.querySelector("#allProductos").innerHTML ="";
    data.products.forEach(element => {
        document.querySelector("#allProductos").innerHTML += cardProduct(element);
    });
}

const cardProduct = (products) =>{
    return `<div class="col-3">
                <div class="card" >
                    <img src="${products.thumbnail}" class="img-fluid card-img-top" alt="${products.title}">
                    <div class="card-body">
                    <h5 class="card-title">${products.title}</h5>
                    <p class="card-text">${products.description}</p>
                    <button type="button"  onclick="oneProduct(${products.id})" class="btn btn-primary">Ver Productos</button>
                    </div>
                </div>
            </div>`;
}
allProductos();

const filtar = async () =>{
    buscar = document.getElementById("filter").value

    if(buscar.trim().length >= 3 ){
        const response = await fetch(url+"products/search?q="+buscar);
        const data = await response.json();
        console.log(data);
        document.querySelector("#allProductos").innerHTML ="";
        data.products.forEach(element => {
            document.querySelector("#allProductos").innerHTML += cardProduct(element);
        });
    }
    
}

const oneProduct= (id)=>{
    console.log(id)

}

/** C=>POST  R=>GET U=>PUT D=>DELETE */
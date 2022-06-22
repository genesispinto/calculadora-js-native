const productos = [{
        id: 1,
        nombre: 'Paños absorventes',
        precio: 1000,
        imagen: '/img/producto1.jpeg'
    },
    {
        id: 2,
        nombre: 'Comida',
        precio: 25000,
        imagen: '/img/producto2.jpeg'
    },
    {
        id: 3,
        nombre: 'Champu',
        precio: 3000,
        imagen: '/img/producto3.jpeg'
    },
    {
        id: 4,
        nombre: 'Cepillo',
        precio: 4000,
        imagen: '/img/producto4.jpeg'
    }
]

let root = document.getElementById("root");
let carro = document.getElementById("carro");
let total = document.getElementById("total");
mostrarProductos = () => {
    productos.forEach(element => {
        const div = document.createElement("div");
        div.id = "producto" + element.id;
        root.appendChild(div);
        const img = document.createElement("img");
        img.src = element.imagen;
        alt = "imagen" + element.id;
        div.appendChild(img);
        div.innerHTML += element.nombre;
        div.innerHTML += "Precio" + element.precio;
        let i = 0
        const btn = document.createElement("input");
        btn.type = "button";
        btn.id = "btn" + element.id;
        btn.value = '+';
        div.appendChild(btn);
        const cont = document.createElement("input");
        cont.type = "text";
        cont.id = "cont" + element.id;
        cont.value = "0";
        div.appendChild(cont);
        const tProducto = document.createElement("p");
        tProducto.id = "total" + element.id;
        carro.appendChild(tProducto);
        btn.addEventListener("click", () => {
            i = i + 1;
            cont.value = i;
            let totalp = cont.value * element.precio;
            tProducto.innerText = cont.value + "x $" + element.precio + "= " + totalp;

        });

    })

}
mostrarProductos();

const btnFinalizarCompra = document.createElement("input");
btnFinalizarCompra.id = "btnFinal";
btnFinalizarCompra.type = "button";
btnFinalizarCompra.value = "Finalizar compra";
total.insertAdjacentElement("beforeend", btnFinalizarCompra);



creaCarrito = () => {

    const cont1 = document.getElementById("cont1").value;
    const cont2 = document.getElementById("cont2").value;
    const cont3 = document.getElementById("cont3").value;
    const cont4 = document.getElementById("cont4").value;

    let sumaProducto1 = parseInt(cont1) * productos[0].precio;
    let sumaProducto2 = parseInt(cont2) * productos[1].precio;
    let sumaProducto3 = parseInt(cont3) * productos[2].precio;
    let sumaProducto4 = parseInt(cont4) * productos[3].precio;
    let sumaTotal = sumaProducto1 + sumaProducto2 + sumaProducto3 + sumaProducto4;

    const total = document.createElement("input");
    total.id = "total";
    total.type = "text";
    total.value = sumaTotal;
    carro.appendChild(total);

}
btnFinalizarCompra.addEventListener("click", creaCarrito);
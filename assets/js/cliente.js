class cliente{
    constructor(nombre, apellido, edad, direccion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
        this.obtenerNombre = () => { this.nombre = prompt("Ingrese su Nombre")};
        this.obtenerApellido = () => { this.apellido = prompt("Ingrese su Apellido") };
        this.obtenerEdad = () => { this.edad = prompt("Ingrese su Edad") };
        this.obtenerDireccion = () => { this.direccion = prompt("Ingrese su Dirección") };
    }
}



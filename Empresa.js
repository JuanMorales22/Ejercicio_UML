class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrar(){
        console.log(`Nombre: ${this.nombre} Edad: ${this.edad}`);
    }
}

class Empleado{
    constructor(sueldo_bruto, persona){
        this.sueldo_bruto = sueldo_bruto;
        // Herencia de la clase persona
        this.persona = persona;
    }

    calcular_salario_neto(){
        this.sueldo_neto = (this.sueldo_bruto / 1.20).toFixed(2);
    }

    mostrar_Empleado(){
        console.log(`Nombre: ${this.persona.nombre}, Edad: ${this.persona.edad} Sueldo Bruto: ${this.sueldo_bruto} Neto: ${this.sueldo_neto}`);
    }
}
// const persona = new Persona('Jose', 20);
// const salario = new Empleado(2450000, persona);
// salario.calcular_salario_neto();
// salario.mostrar_Empleado();


class Directivo {
    constructor(categoria, estado){
        this.categoria = categoria;
    }

    mostrarDirectivo(){

    }
}

class Cliente {
    constructor(telefono){
        this.telefono = telefono;
    }
}
class Empresa {
    constructor(nombreEmpresa){
        this.nombreEmpresa = nombreEmpresa;
    }
}
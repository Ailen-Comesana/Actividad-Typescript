import { Persona } from "./Persona"

export class Autor implements Persona{
    nombre: string
    apellido: string
    nacionalidad:string
    constructor(nombre:string, apellido:string, nacionalidad:string){
        this.nombre= nombre
        this.apellido= apellido
        this.nacionalidad= nacionalidad
    }
}


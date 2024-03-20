import { Autor } from "./Autor";
import { Libro } from "./Libro";

export class LibroImpreso implements Libro{
    titulo: string
    autor: Autor
    genero: string;

    constructor(titulo:string, autor:Autor,genero:string){
        this.titulo= titulo;
        this.autor= autor;
        this.genero=genero
    }

    obtenerResumen(): string {
        return `${this.titulo}-${this.autor.nombre} ${this.autor.apellido} ${this.genero}`
    }
}
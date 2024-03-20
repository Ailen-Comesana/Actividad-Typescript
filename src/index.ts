import { Autor } from "./entities/Autor";
import { Biblioteca } from "./entities/Biblioteca";
import { LibroImpreso } from "./entities/LibroImpreso";


const autor1 = new Autor("Jane","Austen","Britanica")
const autor2 = new Autor(" William","Shakespeare","Britanico")
const autor3 = new Autor("León", "Tolstói","Ruso")
const autor4 = new Autor("Louisa May" ,"Alcott", "Estadounidense")
const autor5 = new Autor("Oscar" ,"Wilde","Irlandes")


const libro1 = new LibroImpreso("Orgullo y Prejuicio", autor1, "-Novela")
const libro2 = new LibroImpreso("Romeo y Julieta", autor2, "-Tragedia")
const libro3 = new LibroImpreso("Ana Karenina", autor3, "-Novela")
const libro4 = new LibroImpreso("Mujercitas", autor4, "-Novela")
const libro5 = new LibroImpreso("El retrato de Dorian Gray", autor5, "-Novela")

const biblioteca = new Biblioteca()
biblioteca.agregarLibro(libro1)
biblioteca.agregarLibro(libro2)
biblioteca.agregarLibro(libro3)
biblioteca.agregarLibro(libro4)
biblioteca.agregarLibro(libro5)

biblioteca.mostrarCatalogo()
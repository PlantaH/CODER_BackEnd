class Libro{
    constructor(nombre, autor) {
        this.nombre = nombre;
        this.autor = autor;         
    } 
}

class Usuario {
    constructor(nombre, apellido,libros,mascotas) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
        
    }

    getFullName(){
        return (`Tu nombre es ${this.nombre} ${this.apellido}`)
    }

    addMascota(mascota){
        this.mascotas = [...this.mascotas,mascota]
    }

    countMascotas(){
        return (`Cantidad de mascotas  ${this.mascotas.length}`)
    }

    addBook(nombre,autor){
        this.libros = [...this.libros,new Libro(nombre,autor)]
    }

    getBookNames(){
        return (`Tenes estos libros ${this.libros.map((libro) => libro.nombre )}`)
    }   
    
}

let book =  Array(new Libro('El señor de los anillos','Tolkien'))

let user = new Usuario('hernan','dupuy',book,['perro','gato','tortuga'])

console.log(user.getFullName())

console.log(user.countMascotas())

user.addMascota('canario')

console.log(user.countMascotas())

user.addBook('El tunel','Sabato')
user.addBook('Rayuela','Cortazar')

console.log(user.getBookNames())
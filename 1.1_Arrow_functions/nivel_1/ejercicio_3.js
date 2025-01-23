// Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});

class persona {
    constructor(name) {
        this.name = name;
    }
    greet = () => {return `Hola ${this.name}`;
    }
}

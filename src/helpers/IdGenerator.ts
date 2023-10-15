export function generateId(){
    let id = ''

    function gerarNumeroAleatorio() {
        return Math.floor(Math.random() * 9000) + 1000;
    }
        const indice1 = Math.floor(Math.random() * 26);
        const indice2 = Math.floor(Math.random() * 26);
        
        const caractere1 = String.fromCharCode(65 + indice1);
        const caractere2 = String.fromCharCode(65 + indice2);
        
        let char = caractere1 + caractere2;


        id = char + gerarNumeroAleatorio()

    return id 
}

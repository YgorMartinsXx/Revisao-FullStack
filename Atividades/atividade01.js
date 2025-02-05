function contaPalavras(texto) {
    const novotexto = texto.match(/(\b[^\s]+\b)/g);
    let dictionary = {};

    if (novotexto) {
        for (let word of novotexto) {
            if (!(word in dictionary)) {
                dictionary[word] = 1;
            } else {
                dictionary[word] += 1;
            }
        }
    }

    return dictionary;
}
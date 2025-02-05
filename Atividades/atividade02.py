def conta_palavras(texto):
    novotexto = texto.split()
    cnt = {}
    for word in novotexto:
        if word not in cnt:
            cnt[word] = 1
        else:
            cnt[word] += 1
    return cnt
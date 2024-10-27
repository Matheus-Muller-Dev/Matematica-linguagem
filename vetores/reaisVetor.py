linha = input();
itens = linha.split();
vetor = list(map(float, itens));
tam = len(vetor);
for i in range(tam) :
    print("%2d | %4.1f" % (i,vetor[i]));
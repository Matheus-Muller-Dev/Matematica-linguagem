linha = input("digite dois valores, um interiro e um ponto flutuante, separados por espaço: ");
itens = linha.split();
n, val = int(itens[0]), float(itens[1]);
print("n=%d, val=%f.2f" % (n,val));

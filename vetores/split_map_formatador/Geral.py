linha = input("Digite um inteiro e um float separados por espaço: ")
n, val = map(float, linha.split())

print("n=%d, val%.2f" % (n, val))
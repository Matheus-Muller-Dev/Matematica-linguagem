numeros = ["1", "2", "3"]
numeros_int = list(map(int, numeros))
print(numeros_int)

numeros2 = [1, 2, 3]
dobrados = list(map(lambda x: x * 2, numeros2))
print(dobrados)
import math

# Coeficientes da equação quadrática
a = 2
b = 5
c = 3

# Calculando o discriminante
delta = b**2 - 4*a*c

# Verificando se o discriminante é negativo, zero ou positivo
if delta > 0:
    # Duas raízes reais
    raiz1 = (-b + math.sqrt(delta)) / (2*a)
    raiz2 = (-b - math.sqrt(delta)) / (2*a)
    print(f"As raízes da equação são: {raiz1} e {raiz2}")
elif delta == 0:
    # Uma raiz real (dupla)
    raiz = -b / (2*a)
    print(f"A equação tem uma raiz dupla: {raiz}")
else:
    # Raízes complexas
    parte_real = -b / (2*a)
    parte_imaginaria = math.sqrt(-delta) / (2*a)
    print(f"As raízes da equação são complexas: {parte_real} + {parte_imaginaria}i e {parte_real} - {parte_imaginaria}i")

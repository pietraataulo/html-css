soma = 0
qtd = 0

for i in range(1, 101):
    if (i % 2 == 0):
        soma += i
        qtd += 1
media = soma / qtd
print(soma)
print(f'A média dos pares de 1 até 100 é: {media}')



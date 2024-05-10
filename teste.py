total = 0
while True:
    while True:
        sabor = input('Digite o sabor (CP/AC): ')
        if sabor == 'AC' or sabor == 'CP':
            break
        else:
            print('Sabor inválido. Tente novamente')
            continue
    while True:
        tamanho = input('Digite o tamanho (P/M/G): ')

        if tamanho in ['P', 'M', 'G']:
            break
        else:
            print('Tamanho inválido, tente novamente')
            continue

    # validação   
    preco = 0        
    if sabor == 'CP':

        sabor = 'Cupuaçu'
        if tamanho == 'P':
            preco = 9
            total += preco
        elif tamanho == 'M':
            preco = 14
            total += preco
        else:
            preco = 18
            total += preco
    else:
        sabor == 'Açaí'
        if tamanho == 'P':
            preco = 11
            total += preco
        elif tamanho == 'M':
            preco = 16
            total += preco
        else:
            preco: int = 20
    print(f'Você selecionou um {sabor} e {tamanho}: R$ {preco:.2f}')

    # continuar 
    continuar = input('Deseja mais alguma coisa? (S/N): ')
    if continuar == 'S':
        continue
    elif continuar == 'N':
        break
total = total + preco
print(f'O valor total a ser pago: R$ {total:.2f}')





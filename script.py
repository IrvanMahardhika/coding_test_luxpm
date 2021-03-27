oddNumbers = []
number = 1
while len(oddNumbers) < 20:
    if number % 2 != 0:
        oddNumbers.append(number)
    number += 1

print(oddNumbers)
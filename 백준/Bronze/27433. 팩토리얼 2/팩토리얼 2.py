n = int(input())

def factorial(n):
    # base case
    if n <= 1:
        return 1

    return n * factorial(n - 1)

print(factorial(n))
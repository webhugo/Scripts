# Function for nth Fibonacci number

FibArray = [1,2]

def fibonacci(n):
    if n<0:
        print("Incorrect input")
    elif n<=len(FibArray):
        return FibArray[n-1]
    else:
        temp_fib = fibonacci(n-1)+fibonacci(n-2)
        FibArray.append(temp_fib)
        return temp_fib



# Driver Program

print(fibonacci(100))
def a(step):
    if step < 0:
        return 0
    elif step==0 or step == 1:
        return 1
    else:
        return a(step-1) + a(step-2)
print(a(100))
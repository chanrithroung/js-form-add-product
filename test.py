# def even_number(a):
#     return a % 2 == 0
    
# print(even_number(int(input("Enter a number : "))))


# def factorial(n):
#     n = abs(n)
#     fac = 1
#     for i in range(1, n+1):
#         fac *= i
#     return fac

# print(factorial())

# a = "a", "b", "c"
# print(type(a))



# def my_max(a, b, c):
#     return a if b<a>c else b if a<b>c else c

# print(my_max(50, 50, 50))


# add = lambda a, b: a + b

# print(add(30, 50))

# function_name = lambda params: expression


leap_year = lambda year: year % 400 == 0 or year % 4 == 0 and year % 100 != 0
print(leap_year(2025))
from math import *
# This is the section where I learn how to code in python
#Finally found a good YouTube course
print("Hello, World!")
# name = "Kelvin"
# print(f"Welcome to Python, {name}!")
phrase = "shhh"
print("Edeh should", phrase)

#This is a comment, it's not executed by the interpreter
character_name = "Kelvin"
programming_language = "Python"
print(character_name , "is learning", programming_language)
sentence = "DOMba oof"
print(sentence.replace("oof","not real"))

answer = (10 % 3)#mod operator it spits the remainder of first number divided by second number
print(str(answer) + " is the answer for the problem")
# name = input("Enter your name:")
# age = input("Enter your age:")
# print("Hello " + name + "!" "and you are " + age)

#When you collect userdata its accepted as string you have to make sure your value is a number or integer or float from your code so they dont concatenate and float for decimal
# num1 = input("Enter a number: ")
# result = float(num1) + float(num2)
# print(result) 
# num2 = input("Enter another number: ")

# coordinates = (10,20,40,80)
# print(coordinates[3])#tuples cannot be be changed

#Functions in Python
def say_Hi():
    print("Hello User")
say_Hi() 

def cube(num):
    return num*num*num

print(cube(3))

is_male = True
is_tall = True

if is_male and is_tall:
    print("You are a tall male, Nice!")
 
else:
    print("You are either  male not  tall or both.")
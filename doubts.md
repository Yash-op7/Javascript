in oops:
2. is there a way to see what properties and methods are accessible through super.something, this gives error: console.log(super) inside the work() method.
3. lets say we have 3 classes which are inheriting from one another, class CloudEngineer inherits from class Engineer, and class Engineer inherits from class Person, in both Engineer and Person classes there is a method defined called eat(), but its not present in class CloudEngineer, when i want to access the parent of cloudEngineer's eat() method in the cloudEngineer class, i can just do this.eat() or super.eat(), but how do i get the parent's parent's defintion of eat() in cloudEngineer, i was not able to do super.super.eat();
4. can we do the following things in js which are possible in python:
obj = {'name': 'tom', 'age':20}
for k, v in obj.items():
    print(k, v)
arr = [1, 2, 3]
for idx, val in enumerate(arr):
    print(idx, val)
x, y = 10, 20
print(f'{x = } and {y = }')     # x = 10 and y = 20
5. All ways to write functions, function parameters, default parameters, args and kwargs similar to python 
6. Similar to python dict, are there methods like
dict1.get(key, default)
"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
const ObjectOrientedProgramming = () => {
  const [ShowSection, setShowSection] = useState(false);

  return (
    <div className="mx-auto max-w-[68rem] p-4 w-full">
      <button
        className={`flex flex-row items-start justify-between text-2xl  md:min-w-[33.3rem] min-w-[29rem]
        font-bold text-center p-3 hover:bg-slate-800 rounded-md transition duration-300 border-b-2 border-b-slate-400`}
        onClick={() => setShowSection(!ShowSection)}
      >
        Object-Oriented Programming
        {!ShowSection ? (
          <FaCaretDown size={24} className="ml-8" />
        ) : (
          <FaCaretUp size={24} className="ml-8" />
        )}
      </button>
      <div
        className={`${
          !ShowSection ? "hidden" : "visible"
        } indent-10 mb-8  mt-3`}
      >
        <p className="mb-4">
          Object-Oriented Programming (OOP) is a programming paradigm that
          emphasizes the use of objects, which are instances of classes, to
          represent and manipulate data. Here are some of the key concepts in
          OOP:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li className="mb-2">
            <strong>Classes:</strong> A class is a blueprint for creating
            objects that defines their properties and methods.
          </li>
          <li className="mb-2">
            <strong>Objects:</strong> An object is an instance of a class that
            contains data and methods.
          </li>
          <li className="mb-2">
            <strong>Attributes:</strong> Attributes are the data stored inside
            an object that define its state.
          </li>
          <li className="mb-2">
            <strong>Methods:</strong> Methods are functions that belong to a
            class and can modify the object's state or perform actions.
          </li>
          <li className="mb-2">
            <strong>Inheritance:</strong> Inheritance is a mechanism for
            creating new classes from existing ones by inheriting their
            attributes and methods.
          </li>
          <li className="mb-2">
            <strong>Polymorphism:</strong> Polymorphism is the ability of
            objects to take on different forms or have multiple behaviors
            depending on the context in which they are used.
          </li>
        </ul>
        <h3 className="text-lg font-bold mb-2">Creating a Class</h3>
        <p className="mb-4">
          To create a class in Python, you use the <code>class</code> keyword
          followed by the name of the class. Here's an example of a simple class
          that represents a bank account:
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 leading-7">
          <code>
            class BankAccount:
            <br />
            &nbsp; def __init__(self, account_number, balance):
            <br />
            &nbsp; &nbsp; self.account_number = account_number <br />
            &nbsp; &nbsp; self.balance = balance <br />
            <br />
            &nbsp; def deposit(self, amount): <br />
            &nbsp; &nbsp; self.balance += amount <br />
            <br />
            &nbsp; def withdraw(self, amount): <br />
            &nbsp; &nbsp; if amount &lt;= self.balance: <br />
            &nbsp; &nbsp; &nbsp; self.balance -= amount <br />
            &nbsp; &nbsp; else:
            <br />
            &nbsp; &nbsp; &nbsp; print("Insufficient funds") <br />
            <br />
            &nbsp; def get_balance(self): <br />
            &nbsp; &nbsp; return self.balance
            <br />
            <br />
            my_account = BankAccount("123456789", 1000) <br />
            my_account.deposit(500) <br />
            my_account.withdraw(2000)
            <br />
            <br />
            print(my_account.get_balance()) # Output: 1500
          </code>
        </pre>
        <p className="mb-4">
          In this example, we define a class called <code>BankAccount</code>{" "}
          that has four methods: <code>__init__</code>, <code>deposit</code>,{" "}
          <code>withdraw</code>, and <code>get_balance</code>. The{" "}
          <code>__init__</code> method is a special method that is called when
          an object is created from the class and is used to initialize the
          object's attributes. The other three methods are used to modify the
          object's state by depositing or withdrawing money and getting the
          account balance.
        </p>

        <h2 className="mx-3 text-xl font-bold py-5 indent-0">Concepts : </h2>

        <h3 className="text-lg font-bold mb-2">Encapsulation</h3>
        <p className="mb-4">
          Encapsulation is the concept of hiding the internal details of an
          object from the outside world and providing a public interface for
          interacting with the object. This is achieved in OOP through the use
          of access modifiers, such as public, private, and protected. These
          access modifiers control which parts of an object can be accessed from
          outside the object's class. In Python, access modifiers are
          implemented using underscores before the attribute or method name.
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 leading-7 overflow-auto">
          <code className="">
            class Dog: <br />
            &nbsp; def __init__(self, name, age): <br />
            &nbsp; &nbsp; self.name = name <br />
            &nbsp; &nbsp; self.age = age <br />
            &nbsp; def bark(self): <br />
            &nbsp; &nbsp; print("Woof!") <br />
            my_dog = Dog("Rufus", 3) <br />
            my_dog.bark() # Output: "Woof!"
          </code>
        </pre>
        <h3 className="text-lg font-bold mb-2">Abstraction</h3>
        <p className="mb-4">
          Abstraction is the concept of simplifying complex systems by breaking
          them down into smaller, more manageable parts. In OOP, abstraction is
          achieved by defining abstract classes and interfaces. An abstract
          class is a class that cannot be instantiated on its own and must be
          subclassed to be used. An interface is a collection of abstract
          methods that define a contract for classes that implement the
          interface. Python does not have built-in support for interfaces, but
          they can be emulated using abstract base classes.
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 leading-7 overflow-auto">
          <code className="">
            class Car: <br />
            &nbsp; def start(self): <br />
            &nbsp; &nbsp; pass <br />
            &nbsp; def stop(self): <br />
            &nbsp; &nbsp; pass <br />
            class Honda(Car):
            <br />
            &nbsp; def start(self): <br />
            &nbsp; &nbsp; print("Starting Honda") <br />
            &nbsp; def stop(self): <br />
            &nbsp; &nbsp; print("Stopping Honda") <br />
            my_honda = Honda()
            <br />
            my_honda.start() # Output: "Starting Honda" <br />
            my_honda.stop() # Output: "Stopping Honda"
          </code>
        </pre>
        <h3 className="text-lg font-bold mb-2">Polymorphism in Python</h3>
        <p className="mb-4">
          Polymorphism is the ability of objects to take on multiple forms or
          have multiple behaviors depending on the context in which they are
          used. In Python, polymorphism is achieved through the use of duck
          typing, which is a concept that allows objects to be used as if they
          are of a certain type based on their behavior, rather than their
          class. For example, if an object has a method called "quack", it can
          be used as if it were a duck object, even if it is not actually a
          duck.
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 leading-7 overflow-auto">
          <code className="">
            class Animal: <br />
            &nbsp; def make_sound(self): <br /> &nbsp; &nbsp; pass <br />
            class Cat(Animal): <br />
            &nbsp; def make_sound(self): <br />
            &nbsp; &nbsp; print("Meow") <br />
            class Dog(Animal):
            <br />
            &nbsp; def make_sound(self): <br />
            &nbsp; &nbsp; print("Woof") <br />
            def animal_sounds(animal): <br />
            &nbsp; animal.make_sound() <br />
            my_cat = Cat() <br />
            my_dog = Dog() <br />
            animal_sounds(my_cat) # Output: "Meow" <br />
            animal_sounds(my_dog) # Output: "Woof"
          </code>
        </pre>
        <h3 className="text-lg font-bold mb-2">Inheritance in Python</h3>
        <p className="mb-4">
          Inheritance is the concept of creating a new class from an existing
          class by inheriting its attributes and methods. In Python, inheritance
          is implemented using the syntax{" "}
          <code>class ChildClass(ParentClass):</code>. The child class inherits
          all the attributes and methods of the parent class and can also define
          its own attributes and methods. Inheritance is useful for creating
          classes that share common functionality, such as different types of
          animals or vehicles.
        </p>
        <pre className="bg-gray-800 rounded p-4 mb-4 text-sm indent-0 leading-7 overflow-auto">
          <code className="">
            class Vehicle: <br />
            &nbsp; def __init__(self, make, model, year): <br />
            &nbsp; &nbsp; self.make = make <br />
            &nbsp; &nbsp; self.model = model <br />
            &nbsp; &nbsp; self.year = year <br />
            &nbsp; def start(self): <br />
            &nbsp; &nbsp; print("Starting vehicle") <br />
            class Car(Vehicle): <br />
            &nbsp; def stop(self): <br />
            &nbsp; &nbsp; print("Stopping car") <br />
            my_car = Car("Honda", "Civic", 2022) <br />
            print(my_car.make) # Output: "Honda" <br />
            print(my_car.model) # Output: "Civic" <br />
            print(my_car.year) # Output: 2022 <br />
            my_car.start() # Output: "Starting vehicle" <br />
            my_car.stop() # Output: "Stopping car"
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ObjectOrientedProgramming;

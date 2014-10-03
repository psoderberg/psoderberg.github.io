---
layout: post
title:  "Week 6 Technical Blog - Classes vs Modules"
date:   2014-09-17 04:21:04
categories: DBC Blog
---
Classes vs Modules
What are these? How do they work?

Classes
Ruby is object-oriented and has single inheritance.  This means that when a class is created, variables and methods can be generated within that class.  But there are many built-in classes, such as Arrays, instances of which inherit properties from the class.

One idea is that if you're not instances within a class, you probably don't need to make a class.

 Modules
 A module, from ruby-docs, is a collection of methods and constants.  What's missing here is instances.  Some builtin modules include Math and Enumerables, which are collections of methods. These can be implemented using require in the or include in a class

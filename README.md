# AngularJS Unit Converter [![Build Status](https://travis-ci.org/alexandernst/angular-unit-converter.svg?branch=master)](https://travis-ci.org/alexandernst/angular-unit-converter)
AngularJS directive that converts to/from metric units using $parser and $formatters

## How does it works

The idea behind this directive is to take a model's value and convert it from one unit to another,
say from `cm` to `mm`, without changing the value itself, only the view value. Of course, the reverse
way is supported too, aka parsing the view value and setting the model value.

This is very helpful when you want to represent a value in a different unit and let the user interact
with it.

## Demo

[Plnkr demo](http://plnkr.co/edit/7NDpRAbGHi4FfvN4SQ5B?p=preview)

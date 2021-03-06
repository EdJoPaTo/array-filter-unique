# array-filter-unique
[![NPM Version](https://img.shields.io/npm/v/array-filter-unique.svg)](https://www.npmjs.com/package/array-filter-unique)
[![node](https://img.shields.io/node/v/array-filter-unique.svg)](https://www.npmjs.com/package/array-filter-unique)
[![Dependency Status](https://david-dm.org/EdJoPaTo/array-filter-unique/status.svg)](https://david-dm.org/EdJoPaTo/array-filter-unique)
[![Dev Dependency Status](https://david-dm.org/EdJoPaTo/array-filter-unique/dev-status.svg)](https://david-dm.org/EdJoPaTo/array-filter-unique?type=dev)

> JavaScript array.filter() compatible unique filter

As all unique libraries are used as a function and not within the easily stackable and immutable arr.format() style I made my own.

## Install

```
$ npm install array-filter-unique
```


## Usage

```js
const arrayFilterUnique = require('array-filter-unique');

['a', 'a', 'b', 'c']
  .filter(arrayFilterUnique());
//=> ['a', 'b', 'c']

[{name: 'Alice', …}, {name: 'Peter', …}, {name: 'Alice', …}}]
  .filter(arrayFilterUnique(o => o.name));
//=> [{name: 'Alice', …}, {name: 'Peter', …}]
```


## API

### arrayFilterUnique([selector])

#### selector

Type: `item => string`

Select what to check in the given item

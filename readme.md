# array-filter-unique [![Build Status](https://travis-ci.com/EdJoPaTo/array-filter-unique.svg?branch=master)](https://travis-ci.com/EdJoPaTo/array-filter-unique)

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

### arrayFilterUnique([selector], [last])

#### selector

Type: `item => string`

Select what to check in the given item

#### last

Type: `boolean`<br>
Default: `false`

Use the last occurence of the matching item instead of the first one.

Useful with sorted inputs.
For example time sorted objects containing position and temperature when you want the latest temperature for each position.


## License

MIT © [Edgar Toll](https://edjopato.de)

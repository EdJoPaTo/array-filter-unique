# array-filter-unique

[![NPM Version](https://img.shields.io/npm/v/array-filter-unique.svg)](https://www.npmjs.com/package/array-filter-unique)
[![node](https://img.shields.io/node/v/array-filter-unique.svg)](https://www.npmjs.com/package/array-filter-unique)
[![JSR Version](https://jsr.io/badges/@edjopato/array-filter-unique)](https://jsr.io/@edjopato/array-filter-unique)
[![JSR Score](https://jsr.io/badges/@edjopato/array-filter-unique/score)](https://jsr.io/@edjopato/array-filter-unique/score)

> JavaScript array.filter() compatible unique filter

As all unique libraries are used as a function and not within the easily
stackable and immutable arr.format() style I made my own.

## Install

Node.js:

```bash
npm install array-filter-unique
```

Deno:

```bash
deno add @edjopato/array-filter-unique
```

## Usage

```ts
import { arrayFilterUnique } from "array-filter-unique";

['a', 'a', 'b', 'c']
  .filter(arrayFilterUnique());
//=> ['a', 'b', 'c']

[{name: 'Alice', …}, {name: 'Peter', …}, {name: 'Alice', …}}]
  .filter(arrayFilterUnique(o => o.name));
//=> [{name: 'Alice', …}, {name: 'Peter', …}]
```

## Migrate from v2 to v3

```diff
-const arrayFilterUnique = require('array-filter-unique');
+import {arrayFilterUnique} from 'array-filter-unique';

 someArray.filter(arrayFilterUnique());
```

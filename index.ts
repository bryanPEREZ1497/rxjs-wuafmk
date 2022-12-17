import './style.css';

import { of, map, Observable, tap, from } from 'rxjs';

const arr = [1, 2, 3];
const source = from(arr);

const tr = source.pipe(map((n) => n + 1));

const subscribe = tr.subscribe((r) => {
  arr.push(r);
});

console.log('subscribe', subscribe);

// arr
//   .map((n) => n + 1)
//   .map((n) => n + 1)
//   .forEach(n=>console.log('nu',n));

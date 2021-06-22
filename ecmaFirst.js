// const simple = require("./ecmaSecond")

// simple();
import {simple, simple2} from "./ecmaSecond.mjs";
import * as a from './ecmaSecond.mjs';

simple();
simple2();
console.log(a.simple())
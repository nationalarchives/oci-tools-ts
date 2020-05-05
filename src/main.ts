/*!
Copyright (c) 2020 The National Archives
 
Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import { BaseCoder} from "./base-coder"

//TODO(AR) finish implementing command line tool, simple example follows...
const hex: Array<String> = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

const input = 1234567
console.log(`input=${input}`)

const encoded = BaseCoder.encode(input, 16)
const encodedStr = encoded.map(i => { return hex[i] }).join('')
console.log(`encoded(hex)=${encodedStr}`)

const decoded = BaseCoder.decode(encodedStr, 16, character => { return hex.indexOf(character) })
console.log(`decoded(int)=${decoded}`)
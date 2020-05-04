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

export namespace BaseCoder {

    /**
     * Encode a Base10 integer value into BaseN.
     *
     * @param value the Base10 integer to encode
     * @param baseN the base into which to encode the integer
     *
     * @return A sequence of offsets into the baseN alphabet
     *         for the encoded integer
     *
     * @throws if {@code value} is less than zero.
     */
    export function encode(value: number, baseN: number): Array<number> {

        function encode(v: number, accum: Array<number>): Array<number> {
            if (v == 0 && accum.length > 0) {
                return accum
            } else if (v <= 1) {
                accum.unshift(v)
                return accum
            } else {
                let div = Math.floor(v / baseN)
                let mod = Math.floor(v % baseN)
                accum.unshift(mod)
                return encode(div, accum)
            }
        }

        if (value < 0) {
        throw new Error("Negative values cannot be encoded");
        }

        return encode(value, [])
    }

    /**
     * Decode a BaseN string into a Base10 integer.
     *
     * @param str the BaseN encoded string
     * @param baseN the base into which to encode the integer
     * @param characterToNumericValue a function that converts an encoded BaseN char to a numeric value
     *                                the function should return -1 if there is no possible conversion
     *
     * @throws if {@code value} is less than zero.
     */
    export function decode(str: String, baseN: number, characterToNumericValue: (character: String) => number): number {
        if (str.length == 0) {
            throw new Error("Cannot decode empty-string")
        }

        let numericValues = str.split('').map(character => {
        let numericValue = characterToNumericValue(character)
        if (numericValue < 0) {
            throw new Error(`Character '${character}' cannot be resolved to a numeric value`)
        }
        return numericValue
        })

        let vs = Array.from(Array(numericValues.length).keys()).map(i => {
            const exp = (numericValues.length - i) - 1
            return numericValues[i] * Math.floor(Math.pow(baseN, exp))
        })

        return vs.reduce((accum, x) => accum + x)
    }
}
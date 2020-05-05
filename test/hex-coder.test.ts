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

import { expect } from "chai";
import "mocha";
import { BaseCoder } from "../src/base-coder"

describe('BaseCoder - Hex', function() {
  
    describe("encode negative value", function() {
        it('should raise an error', function() {
            expect(() => encodeToHexStr(-1)).to.throw()
            expect(() => encodeToHexStr(-2)).to.throw()
        })
    })

    describe('encode small value to hex', function() {
        it('should return the correct encoded result', function() {
            expect(encodeToHexStr(0)).to.equal("0")
            expect(encodeToHexStr(1)).to.equal("1")
            expect(encodeToHexStr(2)).to.equal("2")
            expect(encodeToHexStr(3)).to.equal("3")
            expect(encodeToHexStr(4)).to.equal("4")
            expect(encodeToHexStr(5)).to.equal("5")
            expect(encodeToHexStr(6)).to.equal("6")
            expect(encodeToHexStr(7)).to.equal("7")
            expect(encodeToHexStr(8)).to.equal("8")
            expect(encodeToHexStr(9)).to.equal("9")
            expect(encodeToHexStr(10)).to.equal("A")
            expect(encodeToHexStr(11)).to.equal("B")
            expect(encodeToHexStr(12)).to.equal("C")
            expect(encodeToHexStr(13)).to.equal("D")
            expect(encodeToHexStr(14)).to.equal("E")
            expect(encodeToHexStr(15)).to.equal("F")
            expect(encodeToHexStr(16)).to.equal("10")
            expect(encodeToHexStr(17)).to.equal("11")
            expect(encodeToHexStr(18)).to.equal("12")
            expect(encodeToHexStr(19)).to.equal("13")
            expect(encodeToHexStr(20)).to.equal("14")
            expect(encodeToHexStr(21)).to.equal("15")
            expect(encodeToHexStr(22)).to.equal("16")
            expect(encodeToHexStr(23)).to.equal("17")
            expect(encodeToHexStr(24)).to.equal("18")
            expect(encodeToHexStr(25)).to.equal("19")
            expect(encodeToHexStr(26)).to.equal("1A")
            expect(encodeToHexStr(27)).to.equal("1B")
        })
      })

    describe('encode large value to hex', function() {
        it('should return the correct encoded result', function() {
            expect(encodeToHexStr(123)).to.equal("7B")
            expect(encodeToHexStr(255)).to.equal("FF")
            expect(encodeToHexStr(1234)).to.equal("4D2")
            expect(encodeToHexStr(4095)).to.equal("FFF")
            expect(encodeToHexStr(12345)).to.equal("3039")
            expect(encodeToHexStr(65535)).to.equal("FFFF")
            expect(encodeToHexStr(123456)).to.equal("1E240")
            expect(encodeToHexStr(1048575)).to.equal("FFFFF")
            expect(encodeToHexStr(1234567)).to.equal("12D687")
            expect(encodeToHexStr(16777215)).to.equal("FFFFFF")
            expect(encodeToHexStr(12345678)).to.equal("BC614E")
            expect(encodeToHexStr(268435455)).to.equal("FFFFFFF")
            expect(encodeToHexStr(123456789)).to.equal("75BCD15")
        })
    })

    describe('decode empty-string', function() {
        it('should raise an error', function() {
            expect(() => decodeFromHexStr("")).to.throw()
        })
    })

    describe('decode invalid char', function() {
        it('should raise an error', function() {
            expect(() =>  decodeFromHexStr("ABZA")).to.throw()
            expect(() =>  decodeFromHexStr("FG")).to.throw()
        })
    })

    describe('decode small value from hex', function() {
        it('should return the correct decoded result', function() {
            expect(decodeFromHexStr("0")).to.equal(0)
            expect(decodeFromHexStr("1")).to.equal(1)
            expect(decodeFromHexStr("2")).to.equal(2)
            expect(decodeFromHexStr("3")).to.equal(3)
            expect(decodeFromHexStr("4")).to.equal(4)
            expect(decodeFromHexStr("5")).to.equal(5)
            expect(decodeFromHexStr("6")).to.equal(6)
            expect(decodeFromHexStr("7")).to.equal(7)
            expect(decodeFromHexStr("8")).to.equal(8)
            expect(decodeFromHexStr("9")).to.equal(9)
            expect(decodeFromHexStr("A")).to.equal(10)
            expect(decodeFromHexStr("B")).to.equal(11)
            expect(decodeFromHexStr("C")).to.equal(12)
            expect(decodeFromHexStr("D")).to.equal(13)
            expect(decodeFromHexStr("E")).to.equal(14)
            expect(decodeFromHexStr("F")).to.equal(15)
            expect(decodeFromHexStr("10")).to.equal(16)
            expect(decodeFromHexStr("11")).to.equal(17)
            expect(decodeFromHexStr("12")).to.equal(18)
            expect(decodeFromHexStr("13")).to.equal(19)
            expect(decodeFromHexStr("14")).to.equal(20)
            expect(decodeFromHexStr("15")).to.equal(21)
            expect(decodeFromHexStr("16")).to.equal(22)
            expect(decodeFromHexStr("17")).to.equal(23)
            expect(decodeFromHexStr("18")).to.equal(24)
            expect(decodeFromHexStr("19")).to.equal(25)
            expect(decodeFromHexStr("1A")).to.equal(26)
            expect(decodeFromHexStr("1B")).to.equal(27)
        })
    })

    describe('decode large value from hex', function() {
        it('should return the correct decoded result', function() {
            expect(decodeFromHexStr("7B")).to.equal(123)
            expect(decodeFromHexStr("FF")).to.equal(255)
            expect(decodeFromHexStr("4D2")).to.equal(1234)
            expect(decodeFromHexStr("FFF")).to.equal(4095)
            expect(decodeFromHexStr("3039")).to.equal(12345)
            expect(decodeFromHexStr("FFFF")).to.equal(65535)
            expect(decodeFromHexStr("1E240")).to.equal(123456)
            expect(decodeFromHexStr("FFFFF")).to.equal(1048575)
            expect(decodeFromHexStr("12D687")).to.equal(1234567)
            expect(decodeFromHexStr("FFFFFF")).to.equal(16777215)
            expect(decodeFromHexStr("BC614E")).to.equal(12345678)
            expect(decodeFromHexStr("FFFFFFF")).to.equal(268435455)
            expect(decodeFromHexStr("75BCD15")).to.equal(123456789)
        })
    })
})

function encodeToHexStr(value: number) : String {
  const encoded = BaseCoder.encode(value, 16)

  //TODO(AR) implement proper Alphabet stuff
  const alphabet: Array<String> = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
  const encodedStr = encoded.map(i => { return alphabet[i] }).join('')
  return encodedStr

//   Alphabet.loadAlphabet(Right(IncludedAlphabet.HEX)) match {
//     case Right(alphabet) =>
//       Alphabet.toString(alphabet, encoded)
//     case Left(ioe) => throw ioe
//   }
}

function decodeFromHexStr(hex: String) : number {
    //TODO(AR) implement proper Alphabet stuff
  const alphabet: Array<String> = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
  
  const decoded = BaseCoder.decode(hex, 16, character => { return alphabet.indexOf(character) })
  return decoded;


//   Alphabet.loadAlphabet(Right(IncludedAlphabet.HEX)) match {
//     case Right(alphabet) =>
//       BaseCoder.decode(hex, 16, Alphabet.valueOf(alphabet, _))
//     case Left(ioe) => throw ioe
//   }
}


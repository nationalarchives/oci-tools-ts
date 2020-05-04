# Omega Catalog Identifier tools (TypeScript)
 
[![Build Status](https://travis-ci.com/nationalarchives/oci-tools-ts.png?branch=master)](https://travis-ci.com/nationalarchives/oci-tools-ts)
[![TypeScript 3.8](https://img.shields.io/badge/typescript-3.8-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
 
**Note**: There is also an alternative implementation in Scala available at:
https://github.com/nationalarchives/oci-tools-scala

This project is split into two parts:
1. a library ([`base-coder.ts`](https://github.com/nationalarchives/oci-tools-ts/blob/master/src/base-coder.ts))
which can be used in other projects.

2. a command line tool ([`main.ts`](https://github.com/nationalarchives/oci-tools-ts/blob/master/src/main.ts))
which is useful in itself and also serves as an example of using the `base-coder.ts` library.


## Examples of Command Line tool use
Encoding to Base16 (e.g. hexadecimal):
```bash
❯ npm run start encode --round-trip 16 123456 HEX
Input: 123456
Encoded: '1E240'
Round-trip decoded: '123456'
```

Encoding to GCR b25 (e.g. as used by DRI for digital records):
```bash
❯ npm run start encode --round-trip 25 123456 GCRb25
Input: 123456
Encoded: 'K5RJ'
Round-trip decoded: '123456'
```

Encoding to OCI b25 (e.g. as used by Project Omega):
```bash
❯ npm run start encode --round-trip 25 123456 OCIb25
Input: 123456
Encoded: '8WJ7'
Round-trip decoded: '123456'
```

### Compiling the Command Line tool
To build from source you will need the following pre-requisites:

1. NPM 6.14+.
2. NodeJs 10.16+

If you wish to compile the application you can run `npm run build`.

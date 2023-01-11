# swc-jest-decorators

Если `"decorators": true` и установлен `@swc/helpers`, то все работает.

```
 PASS  tests/test.spec.ts
  describe
    ✓ test (1 ms)
```

Если нет `@swc/helpers`:

```
 FAIL  tests/test1.spec.ts
  ● Test suite failed to run

    Cannot find module '@swc/helpers/lib/_ts_decorate.js' from 'tests/test1.spec.ts'

       8 |     expect(1).toEqual(1);
       9 |   })
    > 10 | });
         |              ^

      at Resolver._throwModNotFoundError (node_modules/jest-resolve/build/resolver.js:425:11)
      at _tsDecorate (tests/test1.spec.ts:10:18)
      at Object.Test (tests/test1.spec.ts:4:14)
```

Если `"decorators": false`:

```
 FAIL  tests/test1.spec.ts
  ● Test suite failed to run


      × Expression expected
       ╭─[/Users/vladimirvysokij/Documents/projects/swc-jest-decorators/tests/test1.spec.ts:1:1]
     1 │ import { Injectable } from '@nestjs/common';
     2 │ 
     3 │ @Injectable()
       · ─
     4 │ export class Test {}
     5 │ 
     6 │ describe('describe', () => {
       ╰────


    Caused by:
        Syntax Error

      at Compiler.transformSync (node_modules/@swc/core/index.js:241:29)
```


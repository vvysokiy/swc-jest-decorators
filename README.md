# swc-jest-decorators

## Установка

1. `npm install`
2. `npm run test`

## Кейсы

Если `"decorators": true`, установлен `@swc/helpers` и отключен `@effector/swc-plugin`, то все работает.

```
 PASS  tests/test.spec.ts
  describe
    ✓ test (1 ms)
```

Подключение `"@effector/swc-plugin": "0.0.7"` (раскомментировать в `.swcrc`)

```
 FAIL  tests/test.spec.tsrc/source_map.rs:1086:17
  ● Test suite failed to run

    failed to handle: position 0 does not resolve to a source location

      at Compiler.transformSync (node_modules/@swc/core/index.js:241:29)
```

Подключение `"@effector/swc-plugin": "0.0.8"` (раскомментировать в `.swcrc`)

```
 RUNS  tests/test.spec.ts
thread '<unnamed>' panicked at 'called `Result::unwrap()` on an `Err` value: LayoutError', /Users/k.mironov/.cargo/registry/src/github.com-1ecc6299db9ec823/rkyv-0.7.37/src/impls/core/mod.rs:265:36
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
thread '<unnamed>' panicked at 'failed to invoke plugin: failed to invoke plugin on 'Some("/Users/vladimirvysokij/Documents/projects/swc-jest-decorators/tests/test.spec.ts")'

Caused by:
    0: failed to invoke `@effector/swc-plugin` as js transform plugin at node_modules/@effector/swc-plugin/target/wasm32-wasi/release/effector_swc_plugin.wasm
    1: RuntimeError: call stack exhausted
 FAIL  tests/test.spec.tsunner/.cargo/registry/src/github.com-1ecc6299db9ec823/swc-0.241.5/src/plugin.rs:228:14
  ● Test suite failed to run

    failed to handle: failed to invoke plugin: failed to invoke plugin on 'Some("/Users/vladimirvysokij/Documents/projects/swc-jest-decorators/tests/test.spec.ts")'

    Caused by:
        0: failed to invoke `@effector/swc-plugin` as js transform plugin at node_modules/@effector/swc-plugin/target/wasm32-wasi/release/effector_swc_plugin.wasm
        1: RuntimeError: call stack exhausted
        2: stk_ovf

      at Compiler.transformSync (node_modules/@swc/core/index.js:241:29)
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


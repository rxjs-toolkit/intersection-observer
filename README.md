## INSTALLATION

**With npm:**

```typescript
npm install --save @rxjs-toolkit/intersection-observer
```

## SAMPLES

```typescript
import { RxIntersectionObserver } from '@rxjs-toolkit/intersection-observer';

let el = document.getElementById('one');

RxIntersectionObserver.observe(el)
  .subscribe(({isIntersecting}) => {
      console.log('isIntersecting', isIntersecting);
  })
```

## CONTRIBUTING

We'd love for you to contribute to our source code! We just ask to:

- Write tests for the new feature or bug fix that you are solving
- Ensure all tests pass before send the pull-request (Use: `npm test`)
- Pull requests will not be merged if:
  - has not unit tests
  - reduce the code coverage
  - not passing in the `npm test` task

## LICENSE

Copyright (c) 2024 Lucas Dornelas

Licensed under the MIT license.

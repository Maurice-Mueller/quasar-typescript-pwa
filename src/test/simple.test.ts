import { expect } from 'chai'
// import { suite, test} from 'mocha-typescript'

// import {ClassForTest} from '@/Vue-for-test.vue'
import Hello from '../main/components/Hello.vue'
//import Hello from '@/Hello.vue'

describe('TypeScript WebPack Starter Tests', () => {
    it('A good way to start building an awesome lib is by doing Unit Tests', () => {
      const clazz: Hello = new Hello()
      expect(clazz.sub(9, 7)).to.equals(2)
    })
})

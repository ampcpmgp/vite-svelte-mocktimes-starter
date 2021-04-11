import test from 'ava'
import { greeting } from './greetings'挨拶が出来る', t => {
  greeting.subscribe(value => {
    t.is(value, 'Hello world!')
  })
})

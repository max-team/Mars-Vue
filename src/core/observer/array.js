/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

import { def } from '../util/index'

const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)

const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator (...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    let obChanged = true
    let hasChanged = ob.__changed__
    ob.__changedKeys__ = ob.__changedKeys__ ? ob.__changedKeys__ : {}
    switch (method) {
      case 'push':
        inserted = args
        if (!hasChanged) {
          obChanged = false
          let len = inserted.length
          let startPos = this.length - len
          for (let i = 0; i < len; i++) {
            ob.__changedKeys__[startPos + i] = true
          }
        }
        break
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        if (!hasChanged && inserted.length === 1 && args[1] === 1) {
          obChanged = false
          ob.__changedKeys__[args[0]] = true
        }
        break
    }
    if (inserted) ob.observeArray(inserted)
    // notify change
    ob.dep.notify()
    if (obChanged) {
      ob.__changed__ = true
      delete ob.__changedKeys__
    }
    return result
  })
})

// import attrs from './attrs'
// import klass from './class'
// import events from './events'
// import domProps from './dom-props'
// import style from './style'
// import transition from './transition'

// export default [
//   attrs,
//   klass,
//   events,
//   domProps,
//   style,
//   transition
// ]

import {
  noop
} from 'shared/util'

import { inBrowser } from 'core/util/index'

const emptyMod = {
  create: noop,
  update: noop
}

const transition = inBrowser ? {
  create: noop,
  activate: noop,
  remove: noop
} : {}

export default [
  emptyMod, // attrs,
  emptyMod, // klass,
  emptyMod, // events,
  emptyMod, // domProps,
  emptyMod, // style,
  transition
]

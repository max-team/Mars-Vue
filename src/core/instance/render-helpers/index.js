/* @flow */
import { toString } from 'shared/util'
import { renderList } from './render-list'
import { resolveFilter } from './resolve-filter'
import { setFilterData } from './set-filter'
import { setPropsData } from './set-props'
import { bindObjectProps } from './bind-object-props'

export function installRenderHelpers (target: any) {
  target._s = toString
  target._l = renderList
  target._f = resolveFilter
  target._ff = setFilterData
  target._pp = setPropsData
  target._b = bindObjectProps
}

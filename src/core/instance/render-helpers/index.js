/* @flow */
import { renderList } from './render-list'
import { resolveFilter } from './resolve-filter'
import { setFilterData } from './set-filter'
import { bindObjectProps } from './bind-object-props'

export function installRenderHelpers (target: any) {
  target._l = renderList
  target._f = resolveFilter
  target._ff = setFilterData
  target._b = bindObjectProps
}

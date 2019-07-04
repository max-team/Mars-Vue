/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

import VNode from './vnode'

export const emptyNode = new VNode('', {}, [])

export function createPatchFunction () {
  return function patch (oldVnode, vnode) {
    if (vnode === null) { //destroy
        return
    }
    if (this.$options.mpType === 'page' || this.$options.mpType === 'component') {
        // 收集依赖
        // cloneWithData(this);
    }
  }

  function cloneWithData(vm) {
    // 确保当前 vm 所有数据被同步
    const dataKeys = [].concat(
        Object.keys(vm._data || {}),
        Object.keys(vm._computedWatchers || {}));

    const ret = dataKeys.reduce(function(ret, key) {
        ret[key] = vm[key];
        return ret
    }, Object.create(null));
    //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
    // Object.assign(ret, vm.$mp.data || {});
    return JSON.parse(JSON.stringify(ret))
  }
}

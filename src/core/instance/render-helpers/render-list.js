import {isObject} from 'core/util/index';

/**
 * Runtime helper for rendering v-for lists.
 *
 * @param {any} val val
 * @param {(val: any, keyOrIndex: string | number, index?: number) => void} render render
 */
export function renderList(val, render) {
    let keys, key
    if (Array.isArray(val) || typeof val === 'string') {
        for (let i = 0, l = val.length; i < l; i++) {
            // 只需要执行一下收集依赖，不需要返回任何东西，下同
            render(val[i], i);
        }
    }
    else if (typeof val === 'number') {
        for (let i = 0; i < val; i++) {
            render(i + 1, i);
        }
    }
    else if (isObject(val)) {
        keys = Object.keys(val);
        for (let i = 0, l = keys.length; i < l; i++) {
            key = keys[i];
            render(val[key], key, i);
        }
    }
}

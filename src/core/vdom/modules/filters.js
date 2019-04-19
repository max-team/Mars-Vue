/**
 * @file filters.js
 * @description bind vnode to vm for Mars filters
 * @author zhangwentao <winty2013@gmail.com>
 */

function bindFilter(vnode) {
    let {data, context} = vnode;
    if (data && data.f && data.f.fid !== undefined) {
        context._fData = context._fData || {};
        context._fData[data.f.fid] = vnode;
    }
}

function unbindFilter(vnode) {
    let {data, context} = vnode;
    if (data && data.f && data.f.fid !== undefined) {
        if (context._fData && context._fData[data.f.fid]) {
            context._fData[data.f.fid] = null;
        }
    }
}

export default {
    create (_, vnode) {
        bindFilter(vnode);
    },
    update (oldVnode, vnode) {
        bindFilter(vnode);

        let {data} = vnode;
        let {data: oldData} = oldVnode;
        let fid = data && data.f && data.f.fid;
        let oldfid = oldData && oldData.f && oldData.f.fid;
        if (fid !== oldfid) {
            unbindFilter(oldVnode);
        }
    },
    destroy (vnode) {
        unbindFilter(vnode);
    }
};
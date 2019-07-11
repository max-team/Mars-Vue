export function setFilterData(data, type) {
    const fid = data.fid;
    if (fid === undefined) {
        return;
    }
    this._fData = this._fData || {};

    const f = this._fData[fid] = {};

    if (type === 't') {
        const text = data.value;
        f._t = text;
        return;
    }

    if (type === 'p') {
        const props = data.value;
        f._p = {};
        Object.keys(props).forEach(key => {
            f._p[key] = props[key];
        });
        return props;
    }

    if (type === 'for') {
        f._for = data.value;
        return data.value;
    }

    if (type === 'if') {
        f._if = data.value;
        return data.value;
    }
}
export function setPropsData(propsData) {
    const {compId, _p} = propsData;
    if (compId) {
        this._pData = this._pData || {};
        if (_p) {
            delete propsData._p;
            Object.assign(propsData, _p);
        }
        this._pData[compId] = propsData;
    }
}
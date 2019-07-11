export function setPropsData(propsData) {
    const {compId} = propsData;
    if (compId) {
        this._pData = this._pData || {};
        this._pData[compId] = propsData;
    }
}
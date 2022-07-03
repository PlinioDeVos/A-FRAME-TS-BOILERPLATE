require('aframe');
require('aframe-extras');

function importAll(r: __WebpackModuleApi.RequireContext) {
    r.keys().forEach(r);
}
importAll(require.context('./components', false, /\.ts$/));
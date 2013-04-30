define(function (require, exports, module) {
var
EventEmitter = require('basestone@0.0.1/./emitter').EventEmitter,
value = require('basestone@0.0.1/./value').value,
object = require('basestone@0.0.1/./object').object,
array = require('basestone@0.0.1/./array').array,
map = require('basestone@0.0.1/./map').map,
set = require('basestone@0.0.1/./set').set,
structure = {
    set: require('basestone@0.0.1/./structure/set'),
    map: require('basestone@0.0.1/./structure/map')
}

module.exports = {
    EventEmitter: EventEmitter,
    value: value,
    object: object,
    array: array,
    map: map,
    set: set,
    structure: structure
}


})
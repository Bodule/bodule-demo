define(function (require, exports, module) {
var
util = require('basestone@0.0.1/../util')

function Node(data, parent, children) {
    this.data = data
    this.parent = parent || null
    this.children = children || []
}

function Tree(rootData) {
    this.root = new Node(rootData)
}

var proto = Tree.prototype

util.extend(proto, {
    addNode: function () {}
})



})
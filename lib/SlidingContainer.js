"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SlidingContainer = (function (_super) {
    __extends(SlidingContainer, _super);
    function SlidingContainer(props) {
        return _super.call(this, props) || this;
    }
    SlidingContainer.prototype.render = function () {
        return React.createElement("div", { className: "react-sliding-container" }, "Sliding container");
    };
    return SlidingContainer;
}(React.Component));
exports.default = SlidingContainer;
//# sourceMappingURL=SlidingContainer.js.map
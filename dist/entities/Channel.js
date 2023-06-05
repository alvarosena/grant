"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
const uuid_1 = require("uuid");
class Channel {
    constructor() {
        if (!this._id && !this.created_at) {
            this._id = (0, uuid_1.v4)();
            this.created_at = new Date();
        }
    }
}
exports.Channel = Channel;

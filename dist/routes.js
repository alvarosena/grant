"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const create_channel_controller_1 = require("./controllers/channel/create-channel-controller");
exports.router = (0, express_1.Router)();
const createChannelController = new create_channel_controller_1.CreateChannelController();
exports.router.use('/api/v1/channels', createChannelController.handle);

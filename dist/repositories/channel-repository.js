"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelRepository = void 0;
const Channel_1 = require("../entities/Channel");
class ChannelRepository {
    constructor() {
        this.channels = [];
    }
    static getInstance() {
        if (!ChannelRepository.INSTANCE) {
            ChannelRepository.INSTANCE = new ChannelRepository();
        }
        return ChannelRepository.INSTANCE;
    }
    create({ name, owner }) {
        const channel = new Channel_1.Channel();
        Object.assign(channel, {
            name,
            owner,
        });
        this.channels.push(channel);
        return channel;
    }
}
exports.ChannelRepository = ChannelRepository;

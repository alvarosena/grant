"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChannelUseCase = void 0;
class CreateChannelUseCase {
    constructor(channelRepository) {
        this.channelRepository = channelRepository;
    }
    run(props) {
        const channel = this.channelRepository.create({ name: props.name, owner: props.owner });
        return channel;
    }
}
exports.CreateChannelUseCase = CreateChannelUseCase;

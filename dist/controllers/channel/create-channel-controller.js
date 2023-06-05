"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChannelController = void 0;
const channel_repository_1 = require("../../repositories/channel-repository");
const create_channel_usecase_1 = require("../../use-cases/channel/create-channel-usecase");
class CreateChannelController {
    handle(req, res) {
        try {
            const { name, owner } = req.body;
            const channelRepository = channel_repository_1.ChannelRepository.getInstance();
            const createChannelUseCase = new create_channel_usecase_1.CreateChannelUseCase(channelRepository);
            const channel = createChannelUseCase.run({ name, owner });
            return res.status(201).json(channel);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.CreateChannelController = CreateChannelController;

import { Router } from 'express'
import { CreateChannelController } from './controllers/channel/create-channel-controller'
import {CreateMessageController} from './controllers/message/create-message-controller'
export const router = Router()
const createChannelController = new CreateChannelController()
const createMessageController = new CreateMessageController()

router.use('/api/v1/channels', createChannelController.handle)
router.use('/api/v1/messages/:channel_id', createMessageController.handle)
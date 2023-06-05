import { Router } from 'express'
import { CreateChannelController } from './controllers/channel/create-channel-controller'

export const router = Router()
const createChannelController = new CreateChannelController()

router.use('/api/v1/channels', createChannelController.handle)
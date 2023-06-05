import { Request, Response } from 'express'
import { ChannelRepository } from '../../repositories/channel-repository'
import { CreateChannelUseCase } from '../../use-cases/channel/create-channel-usecase'

export class CreateChannelController {
  handle(req: Request, res: Response) {
    try {
      const { name, owner } = req.body

      const channelRepository = ChannelRepository.getInstance()
      const createChannelUseCase = new CreateChannelUseCase(channelRepository)

      const channel = createChannelUseCase.run({ name, owner })

      return res.status(201).json(channel)
    } catch (err) {
      console.log(err)
    }
  }
}
import { Request, Response } from 'express'
import {MessageRepository} from '../../repositories/message-repository'
import {CreateMessageUseCase} from '../../use-cases/message/create-message-usecase'

export class CreateMessageController {
  handle(req: Request, res: Response) {
    try {
      const { channel_id } = req.params
      const { text, pic, user_id } = req.body

      const messageRepository = MessageRepository.getInstance()
      const createMessageUseCase = new CreateMessageUseCase(messageRepository)

      const message = createMessageUseCase.run({ text, pic, user_id, channel_id })

      return res.status(201).json(message)
    } catch (err) {
      return res.status(400).json(err)
    }
  }
}

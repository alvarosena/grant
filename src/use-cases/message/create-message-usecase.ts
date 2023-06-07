import { MessageRepository } from '../../repositories/message-repository'
import { io } from '../../app'

type Props = {
  text: string
  pic?: string
  user_id: string
  channel_id: string
}

export class CreateMessageUseCase {
  constructor(
    private messageRepository: MessageRepository
  ) {}

  run(props: Props) {
    const message = this.messageRepository.create({
      text: props.text,
      pic: props.pic,
      user_id: props.user_id,
      channel_id: props.channel_id
    })

    io.emit('newMessage', message)

    return message
  }
}
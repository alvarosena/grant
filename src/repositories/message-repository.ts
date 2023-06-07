import { Message } from '../entities/Message'

export type MessageData = {
  text: string
  pic?: string
  user_id: string
  channel_id: string
}

export class MessageRepository {
  private messages: Message[]

  private static INSTANCE: MessageRepository

  private constructor() {
    this.messages = []
  }

  public static getInstance(): MessageRepository{
    if(!MessageRepository.INSTANCE) {
      MessageRepository.INSTANCE = new MessageRepository()
    }
    return MessageRepository.INSTANCE
  }

  create({ text, pic, user_id, channel_id }: MessageData) {
    const message = new Message()

    Object.assign(message, {
      text,
      pic,
      user_id,
      channel_id,
    })

    this.messages.push(message)
    return message
  }
}
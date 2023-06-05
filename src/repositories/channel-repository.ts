import { Channel } from '../entities/Channel'

export type ChannelData = {
  name: string
  owner: string
} 

export class ChannelRepository {
  private channels: Channel[]

  private static INSTANCE: ChannelRepository

  private constructor() {
    this.channels = []
  }

  public static getInstance(): ChannelRepository{
    if(!ChannelRepository.INSTANCE) {
        ChannelRepository.INSTANCE = new ChannelRepository()
    }
    return ChannelRepository.INSTANCE
  }

  create({ name, owner }: ChannelData): Channel {
    const channel = new Channel()

    Object.assign(channel, {
      name, 
      owner,
    })

    this.channels.push(channel)
    return channel
  }
}
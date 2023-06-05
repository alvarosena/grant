import { ChannelRepository } from '../../repositories/channel-repository'

type Props = {
  name: string
  owner: string
}

export class CreateChannelUseCase {
  constructor(
    private channelRepository: ChannelRepository
  ) {}
  
  run(props: Props) {
    const channel = this.channelRepository.create({ name: props.name, owner: props.owner })
    return channel
  }
}
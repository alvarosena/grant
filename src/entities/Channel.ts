import { v4 as uuidv4 } from 'uuid'
import { User } from './User'
import { Message } from './Message'

export class Channel {
  _id?: string
  name: string
  invite_url?: string
  owner: string
  participants?: User[]
  messages?: Message[]
  created_at?: Date

  constructor() {
    if(!this._id && !this.created_at) {
      this._id = uuidv4()
      this.created_at = new Date()
    }
  }
}
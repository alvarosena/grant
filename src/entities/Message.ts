import { v4 as uuidv4 } from 'uuid'

export class Message {
  _id?: string
  text: string
  pic?: string
  user_id: string
  channel_id: string
  created_at?: Date

  constructor() {
    if(!this._id && !this.created_at) {
      this._id = uuidv4()
      this.created_at = new Date()
    }
  }
}
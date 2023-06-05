import { v4 as uuidv4 } from 'uuid'

export class User {
  _id?: string
  username: string
  pic?: string
  name?: string
  email: string
  created_at?: Date

  constructor() {
    if(!this._id && !this.created_at) {
      this._id = uuidv4()
      this.created_at = new Date()
    }
  }
}
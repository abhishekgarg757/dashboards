import { Widget } from './widget'

export interface Dashboard {
  id: string
  name: string
  widgets: Widget[]
}

export interface Widget {
  id: string
  title: string
  type: string
  dataSource: string
  layout: {
    x: number
    y: number
    w: number
    h: number
  }
}

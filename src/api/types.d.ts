export interface IArticleData {
  id: number
  status: string
  title: string
  abstractContent: string
  imageURL: string
  timestamp: string | number
  label: string[]
  disableComment: boolean
  author: string
  reviewer: string
  type: string
  pageviews: number
}

export interface IArticleAdd {
  title: string
  contentHTML: string
  contentVal: string
  // abstractContent: string
  // imageURL: string
  // timestamp: string | number
  // label: string[]
  // disableComment: boolean
  // author: string
  // reviewer: string
  // type: string
  // pageviews: number
}

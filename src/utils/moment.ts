import moment from 'moment'

export const dateDay = (num: number) => {
  let date: Array<string> = []
  for (let i = num; i > 0; i--) {
    let str: string = moment().subtract(i, 'days').format('YYYY-MM-DD')
    date.push(str)
  }
  return date
}

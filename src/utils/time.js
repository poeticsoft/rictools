import moment from 'moment'

moment.locale('es')

export const isDate = date => {

  return  date instanceof Date && !isNaN(date.valueOf())
}

export const getDayDate = date => { 
  
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)

  return date 
}

export const getToday = () => {

  return getDayDate(new Date()) 
}

export const toDisplay = date =>  moment(date).format('LL')

export const eventTimeState = ({ start, end }, time) => {

  const eventStart = moment(parseInt(start))
  const eventEnd = moment(parseInt(end))
  const actualtime = moment(time)

  if(eventEnd.isBefore(actualtime)) { return 'finished' }
  if(eventStart.isAfter(actualtime)) { return 'future' }
  return 'actual'
}
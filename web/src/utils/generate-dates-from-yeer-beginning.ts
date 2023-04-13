import dayjs from "dayjs"

export function  generateDatesFromYeerBeginning(){
   const firsDayOfTheyear = dayjs().startOf('year')
   const today = new Date() 

   const dates = []
   let compareDate = firsDayOfTheyear

   while (compareDate.isBefore(today)){
      dates.push(compareDate.toDate())
      compareDate = compareDate.add(1, 'day')
   }

   return dates
}


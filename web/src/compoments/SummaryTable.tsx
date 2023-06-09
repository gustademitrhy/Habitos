//são os dias da semana coms os habitos

import dayjs from "dayjs"
import { SetStateAction, useEffect, useState } from "react"
import { api } from "../lib/axios"
import { generateDatesFromYeerBeginning } from "../utils/generate-dates-from-yeer-beginning"
import { HabitDia } from "./HabitDia"

const diasSemana = [
    'D', 
    'S', 
    'T', 
    'Q', 
    'Q', 
    'S', 
    'S',
]

const summaryDates = generateDatesFromYeerBeginning()

const minimunSummaryDatesSize = 18* 7 // 18 weeks
const amountOfDaysToFill = minimunSummaryDatesSize - summaryDates.length

type Summary = {
    id: string;
    date: string;
    amount: number;
    completed: number;
}[]

export function SummaryTable() {
   const [summary, setSummary ] = useState<Summary>([])

   useEffect(() => {
    api.get('summary').then((response: { data: SetStateAction<Summary> }) => {
        setSummary(response.data)
    })
   }, [])


    return (
        <div className="w-full flex ">
            <div className="grid grid-rows-7 grid-flow-row gap-3">

                {diasSemana.map((diasSemana, i) =>{
                    return (
                           <div 
                              key={`${diasSemana}-${i}`} className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
                              {diasSemana}
                          </div>
                    )
                })}

            </div>
            <div className="grid grid-rows-7 grid-flow-col gap3 ">
             {summaryDates.map(date => {
                const dayInSummary = summary.find(day => {
                    return dayjs(date).isSame(day.date, 'day')
                })

                return (
                <HabitDia 
                   key={date.toString()} 
                   date={date}
                  amount={dayInSummary?.amount} 
                  completed={dayInSummary?.completed} 
                />
                )
             })}

             {amountOfDaysToFill > 0 && Array.from({ length : amountOfDaysToFill}) .map((_,i) => {
                return (
                    <div 
                    key={i} 
                    className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursos-not-allowed "
                    />
                )
             })}
            </div>
        </div>
    )
}
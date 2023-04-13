import * as Checkbox from  '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface HabitListProps {
    date: Date
}

interface HabitInfo{
    possibleHabits: {
        id: string;
        title: string;
        created_at: string ;
    }[],
    completeHabits: string[]
}

export function Habitlist({ date }: HabitListProps){
    const [HabitInfo, setHabitInfo] = useState<HabitInfo>()
    
    useEffect(() => {
     api.get('day', {
    params:{
        date: date.toISOString(),
    
    }
     }).then(response => {
      setHabitInfo(response.data)
     })
    }, [])
    return (
            
        <div className="mt-6 flex flex-col  gap-3">
       {HabitInfo?.possibleHabits.map(habit => {
        return (
            <Checkbox.Root 
            className="flex items-center gap-3  group">


          <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
          <Checkbox.Indicator>
           <Check size={20} className="text-white"/>
          </Checkbox.Indicator>
          </div>

            <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through  group-data-[state=checked]:text-zinc-600">
              Beber  2L de água  
           </span>
        </Checkbox.Root>
        )
       })}
       </div>
    )    
}

// colocando os Habitos nos dias da semana (
// <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through  group-data-[state=checked]:text-zinc-600">
//            Beber  2L de água   ou {habit.titles}
// </span> )
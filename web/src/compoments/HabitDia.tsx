// Dentro do quadradinhos

import * as Popover from  '@radix-ui/react-popover'
import { ProgessBar  } from './ProgressBar'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { Habitlist } from './HabitList'

interface HabitDayProps{
    date: Date
    completed?: number
    amount?: number
}



export function HabitDia({completed = 0 , amount = 0 , date} : HabitDayProps) {
    const  completedPorcentage = amount > 0 ? Math.round((completed / amount) * 100)  : 0

     const dayAndMonth = dayjs(date).format('DD/MM')
     const dayOfWeek = dayjs(date).format('dddd')

    return (
        <Popover.Root> 
               <Popover.Trigger 
              className={clsx('w-10 h-10 border-2 rounded-lg', { 
                'bg-zinc-900 border-zinc-800': completedPorcentage == 0,
                'bg-violet-900 border-violet-700' : completedPorcentage > 0 && completedPorcentage < 20,
                'bg-violet-800 border-violet-600' : completedPorcentage >= 20 && completedPorcentage < 40,
                'bg-violet-700 border-violet-500' : completedPorcentage >= 40 && completedPorcentage < 60,
                'bg-violet-600 border-violet-500' : completedPorcentage >= 60 && completedPorcentage < 80,
                'bg-violet-800 border-violet-400' : completedPorcentage >= 80 
          
              }) }
              />

               <Popover.Portal>
                  <Popover.Content className="min-w[320px] w-full p-10 rounded-2xl bg-zinc-900 flex-col">
                   <span className="font-semibold text-zinc-400 "> {dayOfWeek}
                   </span>

                   <span className="mt-1 font-extrabold leading-tight ">{dayAndMonth} 
                   </span>
                       
                    <ProgessBar progress={completedPorcentage}/>

                  

                  <Popover.Arrow  height={8} width={17} className="fill-zinc-900 "/>
                 </Popover.Content>
             </Popover.Portal>
         </Popover.Root>
     
    )
}

// className="mt-1 font-extrabold leading-tight text-3xl"      dia no span 
// bg-cor: coloca tela de fundo
// w-10(40px): vira um quadradinho
// text-white: o texto vai esta branco
// rounded: deixa as bodas aredondadas 
// m-2(8px): uma margem dos elementos 
// text-center: texto  irão se alinhar  no centro
// flex items-center: irão se alinhar verticalmente 
// justify-center: irão se alinhar horizontalmente 

//import { Habit } from "./compoments/Habit"
import { Header } from './compoments/Header'
import { SummaryTable } from './compoments/SummaryTable'
import './styles/globo.css'
import './lib/dyajs'


 

export function App() {
  return ( 
    <div className="w-screen h-screen flex justify-center items-center ">
     <div className="w-full max-w-5xl px-6 flex flex-col gap-16 ">
      <Header />
       <SummaryTable />
     </div>
     
   </div>
  )
}

//Compomente: Reproveitar / isolar
// Propriedades: Uma informção enviada pra modificar um componente visual ou comportamentalmente 
interface ProgressBar{
    progress: number
}

export function ProgessBar( props: ProgressBar){
    const progessStyle = {
        width:`${props.progress}%`
    }

    return (  
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-3">
       <div 
           role="progressbar"
           aria-label="Processando de hábito completaods nesse dia"
           aria-valuenow={props.progress}
           className="h-3 rounded-xl  bg-violet-600"
           style={progessStyle} 
        />
</div>
)
}
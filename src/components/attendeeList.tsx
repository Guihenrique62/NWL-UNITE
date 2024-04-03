import { Search } from 'lucide-react'

export function AttendeeList(){
    return (
        <div className="flex gap-3 items-center">
            <h1 className="text-2xl font-bold">participantes</h1>
            <div className="gap-3 px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm flex items-center">
                <Search className='size-4 text-emerald-300'/>
                <input className="bg-transparent flex-1 outline-none" placeholder="Buscar Participantes..." />
            </div>
        </div>
        
    )
}
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from 'lucide-react'

export function AttendeeList(){
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">participantes</h1>
                <div className="gap-3 px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg flex items-center">
                    <Search className='size-4 text-emerald-300'/>
                    <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Buscar Participantes..." />
                </div>
            </div>

            
            <div className='border border-white/10 rounded-lg'>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b border-white/10'>
                            <th style={{width: 48}} className='py-3 px-4 text-sm font-semibold text-left'>
                                <input type="checkbox" className='siz-4 bg-black/20 rounded border-white/10'/>
                            </th>

                            <th className='py-3 px-4 text-sm font-semibold text-left'>Código</th>
                            <th className='py-3 px-4 text-sm font-semibold text-left'>Participante</th>
                            <th className='py-3 px-4 text-sm font-semibold text-left'>Data de Inscrição</th>
                            <th className='py-3 px-4 text-sm font-semibold text-left'>Data do Check-in</th>
                            <th style={{width: 64}} className='py-3 px-4 text-sm font-semibold text-left'> </th>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.from({ length: 6}).map((_, i) => {
                            return (
                                <tr key={i} className='border-b border-white/10 hover:bg-white/5 '>
                                    <td className='py-3 px-4 text-sm text-zinc-300'>
                                        <input type="checkbox" className='siz-4 bg-black/20 rounded border-white/10'/>
                                    </td>
                                    <td className='py-3 px-4 text-sm text-zinc-300'>1234</td>
                                    <td className='py-3 px-4 text-sm text-zinc-300'>
                                        <div className="flex flex-col gap-1">
                                            <span className='font-semibold text-white'>Guilherme Henrique Porto</span>
                                            <span>guiporto@gmail.com</span>
                                        </div>
                                    </td>
                                    <td className='py-3 px-4 text-sm text-zinc-300'>7 Dias atras</td>
                                    <td className='py-3 px-4 text-sm text-zinc-300'>3 Dias atras</td>
                                    <td className='py-3 px-4 text-sm text-zinc-300'>
                                        <button className='bg-black/20 border-white/10 rounded-md p-1.5'>
                                            <MoreHorizontal className='size-4'/>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className='py-3 px-4 text-sm text-zinc-300' colSpan={3}>
                                Mostrando 10 de 244
                            </td>
                            <td className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
                                <div className='inline-flex gap-8 items-center'>
                                    <span>Pagina 1 de 15</span>

                                    <div className='flex gap-1.5'>
                                        <button className='bg-white/10 border-white/10 rounded-md p-1.5'>
                                            <ChevronsLeft className='size-4'/>
                                        </button>
                                        
                                        <button className='bg-white/10 border-white/10 rounded-md p-1.5'>
                                            <ChevronLeft className='size-4'/>
                                        </button>
                                        
                                        <button className='bg-white/10 border-white/10 rounded-md p-1.5'>
                                            <ChevronRight className='size-4'/>
                                        </button>

                                        <button className='bg-white/10 border-white/10 rounded-md p-1.5'>
                                            <ChevronsRight className='size-4'/>
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    )
}
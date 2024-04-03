import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from 'lucide-react'
import { ButtonIcon } from './ButtonIcon'
import { Table } from './table/Table'
import { TableHeader } from './table/TableHeader'
import { TableCell } from './table/TableCell'

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

            
            <Table>
                    <thead>
                        <tr className='border-b border-white/10'>
                            <TableHeader style={{width: 48}}>
                                <input type="checkbox" className='siz-4 bg-black/20 rounded border-white/10'/>
                            </TableHeader>
                            <TableHeader>Código</TableHeader>
                            <TableHeader>Participante</TableHeader>
                            <TableHeader>Data de Inscrição</TableHeader>
                            <TableHeader>Data do Check-in</TableHeader>
                            <TableHeader style={{width: 64}}> </TableHeader>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.from({ length: 6}).map((_, i) => {
                            return (
                                <tr key={i} className='border-b border-white/10 hover:bg-white/5 '>
                                    <TableCell>
                                        <input type="checkbox" className='siz-4 bg-black/20 rounded border-white/10'/>
                                    </TableCell>
                                    <TableCell>1234</TableCell>
                                    <TableCell>
                                        <div className="flex flex-col gap-1">
                                            <span className='font-semibold text-white'>Guilherme Henrique Porto</span>
                                            <span>guiporto@gmail.com</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>7 Dias atras</TableCell>
                                    <TableCell>3 Dias atras</TableCell>
                                    <TableCell>
                                        <ButtonIcon transparent>
                                            <MoreHorizontal className='size-4'/>
                                        </ButtonIcon>
                                    </TableCell>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <TableCell className='py-3 px-4 text-sm text-zinc-300' colSpan={3}>
                                Mostrando 10 de 244
                            </TableCell>
                            <TableCell className='text-right' colSpan={3}>
                                <div className='inline-flex gap-8 items-center'>
                                    <span>Pagina 1 de 15</span>

                                    <div className='flex gap-1.5'>
                                        <ButtonIcon>
                                            <ChevronsLeft className='size-4'/>
                                        </ButtonIcon>
                                        
                                        <ButtonIcon>
                                            <ChevronLeft className='size-4'/>
                                        </ButtonIcon>
                                        
                                        <ButtonIcon>
                                            <ChevronRight className='size-4'/>
                                        </ButtonIcon>

                                        <ButtonIcon>
                                            <ChevronsRight className='size-4'/>
                                        </ButtonIcon>
                                    </div>
                                </div>
                            </TableCell>
                        </tr>
                    </tfoot>
                </Table>

        </div>
    )
}
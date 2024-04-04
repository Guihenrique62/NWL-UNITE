import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from 'lucide-react'
import { ButtonIcon } from './ButtonIcon'
import { Table } from './table/Table'
import { TableHeader } from './table/TableHeader'
import { TableCell } from './table/TableCell'
import { attendees } from '../data/attendees'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'
import { ChangeEvent, useState } from 'react'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export function AttendeeList(){
    const [search, setSearch] = useState('')
    const[page, setPage] = useState(1)
    const totalPages = Math.ceil(attendees.length / 10)

    function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>){
        setSearch(event.target.value)
    }

    function goToNextPage(){
        setPage(page + 1)
    }

    function goToPrevPage(){
        setPage(page - 1)
    }

    function goToFirstPage(){
        setPage(1)
    }

    function goToLastPage(){
        setPage(totalPages)
    }

    return (
        <div className='flex flex-col gap-4'>
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">participantes</h1>
                <div className="gap-3 px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg flex items-center">
                    <Search className='size-4 text-emerald-300'/>
                    <input onChange={onSearchInputChanged}  className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Buscar Participantes..." />
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
                        {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
                            return (
                                <tr key={attendee.id} className='border-b border-white/10 hover:bg-white/5 '>
                                    <TableCell>
                                        <input type="checkbox" className='siz-4 bg-black/20 rounded border-white/10'/>
                                    </TableCell>
                                    <TableCell>{attendee.id}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-col gap-1">
                                            <span className='font-semibold text-white'>{attendee.name}</span>
                                            <span>{attendee.email}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                                    <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>

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
                                Mostrando 10 de {attendees.length} itens
                            </TableCell>
                            <TableCell className='text-right' colSpan={3}>
                                <div className='inline-flex gap-8 items-center'>
                                    <span>Pagina {page} de {totalPages}</span>

                                    <div className='flex gap-1.5'>
                                        <ButtonIcon onClick={goToFirstPage} disabled={page === 1}>
                                            <ChevronsLeft className='size-4'/>
                                        </ButtonIcon>
                                        
                                        <ButtonIcon onClick={goToPrevPage} disabled={page == 1}>
                                            <ChevronLeft className='size-4'/>
                                        </ButtonIcon>
                                        
                                        <ButtonIcon onClick={goToNextPage} disabled={page === totalPages}>
                                            <ChevronRight className='size-4'/>
                                        </ButtonIcon>

                                        <ButtonIcon onClick={goToLastPage} disabled={page === totalPages}>
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
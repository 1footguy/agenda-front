import { useEffect, useState } from "react";
import { format, isValid } from 'date-fns';
import UpdateModal from "../components/Modals/updateModal";

export default function Home(props) {
    const [updateItem, setUpdateItem] = useState()
    const [updateOpen, setUpdateOpen] = useState(false)

    useEffect(() => {
        props.getAll();
    }, []);
    

  return (
    <>
        <UpdateModal updateItem={updateItem} updateOpen={updateOpen} toggleUpdateForm={() => setUpdateOpen(!updateOpen)} update={props.update}/>

        <main className="relative grow mt-10 m-auto">



        <h1 className="flex justify-self-center text-base md:text-xl lg:text-2xl font-agu font-morf mb-7">Agendamentos</h1>

        <table className="table-fixed border-collapse text-xs md:text-md lg:text-base tracking-wide">
            <thead>
            <tr className="border">
                <td className="px-2">Nome</td>
                <td className="px-2">Data</td>
                <td className="px-2">Hora</td>
                <td className="px-2">Editar</td>
                <td className="px-2">Excluir</td>
            </tr>
            </thead>
            <tbody>
            {props.agendas.map((agendamento) => {
                const {id, name, date, time} = agendamento;
                return (
                <tr className="border" key={id}>
                    <td className="px-2 border">{name}</td>
                    <td className="px-2 italic">{format(date, 'dd/MM/yy')}</td>
                    <td className="px-2 py-1 border italic">{(time).replace(/(\d{2}:\d{2}).*/, '$1')}</td>
                    <td className="px-2 translate-y-0.5 text-center">
                        <button type="button" onClick={() => {
                             setUpdateItem(agendamento)
                             setUpdateOpen(!updateOpen)
                             }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 lg:size-5 lg:mx-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                    </button>
                    </td>
                    <td className="px-2 translate-y-0.5 text-center border-l">
                    <button type="button" onClick={() => props.delete(id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 lg:size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>

        </main>
    </>
  );
  
}

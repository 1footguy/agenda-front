import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function SaveModal(props) {
  const { handleSubmit, register, reset } = useForm();

  
  useEffect(() => reset(), [props.modalOpen])
  return (
      <div className={`fixed inset-0 justify-center items-center z-50 ${props.modalOpen ? ('flex') : ('hidden')}`}
       style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        onClick={props.toggleForm}>
        <div className="bg-[#001b2e] w-full max-w-lg mx-4 p-6 rounded-lg shadow-lg relative" onClick={(e) => e.stopPropagation()} >

          <div className="flex justify-between items-center mb-4">
            <h3 className="text-gray-200 text-xl">Novo agendamento</h3>
            <button
              className="text-gray-200"
              onClick={props.toggleForm}  >
              <span className="text-2xl">&times;</span>
            </button>
          </div>
  
          <form onSubmit={handleSubmit(props.save)} className="space-y-4">
          <div>
           <label htmlFor='name' className="text-gray-200 block mb-1">Nome</label>
           <input type="text" id='name' autoFocus {...register("name")} placeholder="Digite seu nome" autoComplete="off" className="w-full p-2 bg-[#2f3061] text-[#ADA8B6] rounded border-0 focus:outline-none"/>
         </div>

         <div>
           <label className="text-gray-200 block mb-1" htmlFor='date'>Data</label>
           <input type="date" id="date" {...register("date")} className="w-full p-2 bg-[#2f3061] text-[#ADA8B6] rounded border-0 focus:outline-none"/>
         </div>

         <div>
           <label className="text-gray-200 block mb-1" htmlFor='time'>Hora</label>
           <input type="time" id="time" {...register("time")}
             className="w-full p-2 bg-[#2f3061] text-[#ADA8B6] rounded border-0 focus:outline-none"/>
         </div>
  
            <div className="flex justify-end gap-4 mt-4">
              <button type="submit"
              onClick={props.toggleForm}
               className="bg-green-500 text-gray-200 px-4 py-2 rounded hover:bg-green-600">
                Save
              </button>
              <button
                type="button"
                onClick={props.toggleForm}
                className="bg-red-500 text-gray-200 px-4 py-2 rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

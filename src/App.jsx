import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { useState } from 'react'




function App() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);

  async function getAll() {
    try {
      const response = await fetch("http://localhost:3000/");        
      const data = await response.json();
      setAgendamentos(data);
    } catch (error) {
      console.error("Falha ao converter a resposta para JSONs", error);
    }
  }

  async function getOne(id) {
    try {
      const response = await fetch(`http://localhost:3000/${id}`);        
      const data = await response.json();
      setAgendamento(data)
    } catch (error) {
      console.error("Falha ao converter a resposta para JSON", error);
    }
  }
  
  async function saveAgenda(data) {
    try {
      const { name, date, time } = data;
      await fetch("http://localhost:3000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, date, time })
      });
      getAll();
    } catch (error) {
      console.error("Falha ao salvar a agenda", error);
    }
  }
  
  async function deleteAgenda(id) {
    try {
      await fetch(`http://localhost:3000/${id}`, {
        method: "DELETE"
      });
      getAll();
    } catch (error) {
      console.error("Falha ao deletar a agenda", error);
    }
  }
  
  async function updateAgenda(data) {
    try {
      const {id, name, date, time } = data;
      await fetch(`http://localhost:3000/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, date, time })
      });
      getAll();
    } catch (error) {
      console.error("Falha ao atualizar a agenda", error);
    }
  }
 

  return (
    <>
      <BrowserRouter>
        <Header save={saveAgenda} toggleForm={() =>  setModalOpen(!modalOpen)} modalOpen={modalOpen} />
        <Routes>
          <Route path='/' element={ <Home agendas={agendamentos} delete={deleteAgenda} update={updateAgenda} getAll={getAll} getOne={getOne} 
          toggleUpdateForm={() => setUpdateOpen(!updateOpen)} 
          updateOpen={!updateOpen}  /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App

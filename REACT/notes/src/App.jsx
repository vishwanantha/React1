import AddNotes from "./Componet/AddNotes"

import NotesContext from "./Componet/Context/NotesContext"
import Saidebar from "./Componet/Saidebar"


function App() {
  

  return (
    <>
      <div className='flex gap-5 '>
			<Saidebar/>
			<NotesContext>
			
			<div className='max-w-5xl flex-1 mx-auto py-5'>
			<AddNotes/>
		</div>
				
			</NotesContext>
		</div>
    </>
  )
}

export default App

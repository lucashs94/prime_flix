import RouterApps from "./routes";
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000}/>
      <RouterApps/>  
    </div>
  );
}

// TODO: Escolher o que ver na pagina HOME e melhorar design
// TODO: Melhorar design da pagina de DETALHES DOS FILMES
// TODO: Melhorar design da pagina de FAVORITOS

export default App;

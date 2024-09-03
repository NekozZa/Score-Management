import Subject from "./components/Subject";
import TargetBoard from "./components/TargetBoard";
import ProgressBoard from "./components/ProgressBoard";

import './styles/app.css'

function App() {
  return (
    <div className="app">
        <section className="container">
         
          <div className='table'>
            <h2>Semester</h2>
            <Subject/>
          </div>

          <TargetBoard/>

          <ProgressBoard/>
        </section>
    </div>
  );
}

export default App;

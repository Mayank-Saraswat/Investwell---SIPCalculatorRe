import './App.css';
import Sidebar from '../../client/src/Components/sidebar';
import SIPCalc from '../../client/src/Components/index';

function App() {
  return (
    <>
    <div className='super-div'>
      <Sidebar/>
      <div className='rightFull'>
        <button>Back</button>
      <SIPCalc/>
      </div>
    </div>
    </>
  );
}

export default App;

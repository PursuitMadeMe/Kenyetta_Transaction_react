import bootstrap from 'bootstrap'
const bootstrap = require('bootstrap')
// React Dependencies
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import Views to the user
import Edit from './Views/Edit';
import FourOFour from './Views/FourOFour';
import Home from './Views/Home';
import Index from './Views/Index';
import New from './Views/New';
import Show from './Views/Show';




// Component seen on each View
import NavBar from './Components/NavBar';



// Routes are the path in the URL
function App() {
  return (
    <div>
    <Router>
    <NavBar />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/transactions' element={<Index />} />
        <Route path='/transactions/new' element={<New />}/>
        <Route path='transactions/:index' element={<Show />}/>
        <Route path='transactions/:index/edit' element={<Edit />}/>
        <Route path='*' element={<FourOFour />}/>
      </Routes>
    </main>
    </Router>
    </div>
  )
}





export default App
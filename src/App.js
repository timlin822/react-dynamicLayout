import {useState} from 'react';
import {FaListUl,FaThLarge} from 'react-icons/fa';

import RowLayout from 'components/layout/RowLayout';
import GridLayout from 'components/layout/GridLayout';

import MOVIES_DATA from 'data/MoviesData';

import './App.css';

function App() {
  const [layout,setLayout]=useState("row");

  const clickHandler=(layout)=>{
    setLayout(layout);
  };

  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <div className="layout-icon-group">
          <FaListUl className="layout-icon" onClick={()=>clickHandler("row")} />
          <FaThLarge className="layout-icon" onClick={()=>clickHandler("grid")} />
        </div>
        {layout==="row" && <RowLayout movies={MOVIES_DATA} />}
        {layout==="grid" && <GridLayout movies={MOVIES_DATA} />}
      </div>
    </section>
  );
}

export default App;
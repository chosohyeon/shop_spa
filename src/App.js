import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Detail from './pages/Detail';

const App = () => {
  const [con, setCon] = useState();
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data.json').then(res => res.json()).then(res => setCon(res))
  }, []);
  return (
    <div>
      <div>
        {
          !con ? <div>찾으시는 제품이 존재하지않습니다.</div>
            : <div>{con[1].id}</div>
        }
      </div>
      <Header />
      <Routes>
        <Route path='/list/:num' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
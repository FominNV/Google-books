import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/_pages/Main/Main';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path={'*'} element={<Main />} />
      </Routes>
    </>
  );
};

export default App;

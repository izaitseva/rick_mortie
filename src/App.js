import { Route, Routes } from 'react-router-dom';
import CharacterPage from './pages/CharacterPage';
import Characters from './pages/Characters';
import "./App.css";
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import { paths } from './paths';

function App() {
  return (
    <Routes>
      <Route path={paths.main} element={<Main />} />
      <Route path={paths.characters} element={<Characters />} />
      <Route path={paths.characterPage} element={<CharacterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes >
  );
}

export default App;

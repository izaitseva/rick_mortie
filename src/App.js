import { Route, Routes } from 'react-router-dom';
import CharacterPage from './pages/CharacterPage';
import Characters from './pages/Characters';
import "./App.css";
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import { paths } from './paths';
import { SharedLayout } from './components/SharedLayout';

function App() {
  return (
    <Routes>
      <Route path={paths.main} element={<SharedLayout />}>
        <Route index element={<Main />} />
        <Route path={paths.characters} element={<Characters />} />
        <Route path={paths.characterPage} element={<CharacterPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes >
  );
}

export default App;

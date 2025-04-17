import { Route, Routes } from 'react-router-dom';

import routes from './routes/RouterConfig';

function App() {
  // const HomePage = lazy(() => import('./pages/HomePage'));

  return (
    <>
      <div className="Loader" />
      <Routes>
        {routes.map(({ path, element, layout: Layout }) => (
          <Route
            key={path}
            path={path}
            element={Layout ? <Layout>{element}</Layout> : element}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;

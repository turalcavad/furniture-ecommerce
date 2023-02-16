import { BrowserRouter } from 'react-router-dom';
import Layout from './layouts';
import { Routes } from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;

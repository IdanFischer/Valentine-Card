// import Card from './components/Card';
import ContentCard from './components/ContentCard';
import HeaderCard from './components/HeaderCard';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import DbzCard from './scenes/DbzCard';
import HxhCard from './scenes/HxhCard';
import NarutoCard from './scenes/NarutoCard'
import './App.css';


function App() {
  return (
        <Layout>
    <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/naruto" element={<NarutoCard />} />
            <Route path="/hxh" element={<HxhCard />} />
            <Route path="/dbz" element={<DbzCard />} />
            <Route path="/buttons" element={<ContentCard />} />
            <Route exact path="/" element={<HeaderCard />} />
            <Route path="*" element={<HeaderCard />} />
          </Routes>
        </header>
      </div>
    </Layout> 
  );
}

export default App;

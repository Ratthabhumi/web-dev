// src/App.jsx
import Layout from './layout/layout';
import MainSection from './components/MainSection';
import Banner from './components/banner/Banner'; // Updated path

function App() {
  return (
    <Layout>
      <Banner title=" [ Let's start our journey. ]" buttonText="Hire Me!" />
      <MainSection />
    </Layout>
  );
}

export default App;

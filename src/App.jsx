import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import OverviewPage from './pages/OverviewPage'
import ComparisonPage from './pages/ComparisonPage'
import OrizonPage from './pages/OrizonPage'
import AbremaPage from './pages/AbremaPage'
import BiomethanePage from './pages/BiomethanePage'
import EsgCarbonPage from './pages/EsgCarbonPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/comparativo" element={<ComparisonPage />} />
        <Route path="/orizon" element={<OrizonPage />} />
        <Route path="/abrema" element={<AbremaPage />} />
        <Route path="/biometano" element={<BiomethanePage />} />
        <Route path="/esg-carbono" element={<EsgCarbonPage />} />
      </Routes>
    </Layout>
  )
}

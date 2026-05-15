export const sources = [
  { id: 'abrema-panorama', name: 'ABREMA Panorama', type: 'Industry Association', url: 'https://abrema.org.br/', lastChecked: '2026-05-15' },
  { id: 'cvm', name: 'CVM - Empresas.Net e Formulários', type: 'Regulator', url: 'https://www.gov.br/cvm/pt-br', lastChecked: '2026-05-15' },
  { id: 'orizont-ri', name: 'Orizon RI', type: 'Company IR', url: 'https://ri.orizonvr.com.br/', lastChecked: '2026-05-15' },
  { id: 'aneel', name: 'ANEEL Dados Abertos', type: 'Public Database', url: 'https://dadosabertos.aneel.gov.br/', lastChecked: '2026-05-15' }
]

export const metrics = [
  { id: 'rsu_total', label: 'RSU gerado no Brasil', value: '81,6 mi t', numeric: 81.6, unit: 'milhões t/ano', period: '2024', sourceId: 'abrema-panorama', sourceLink: 'https://abrema.org.br/', lastUpdated: '2026-05-15', status: 'reported' },
  { id: 'collection_rate', label: 'Cobertura de coleta', value: '93,4%', numeric: 93.4, unit: '%', period: '2023', sourceId: 'abrema-panorama', sourceLink: 'https://abrema.org.br/', lastUpdated: '2026-05-15', status: 'reported' },
  { id: 'recycling_rate', label: 'Taxa de reciclagem material', value: '4,8%', numeric: 4.8, unit: '%', period: '2024', sourceId: 'abrema-panorama', sourceLink: 'https://abrema.org.br/', lastUpdated: '2026-05-15', status: 'estimated' },
  { id: 'biomethane_share', label: 'Aproveitamento para biometano', value: '3,2%', numeric: 3.2, unit: '%', period: '2024', sourceId: 'abrema-panorama', sourceLink: 'https://abrema.org.br/', lastUpdated: '2026-05-15', status: 'estimated' },
  { id: 'carbon_price', label: 'Crédito de carbono (referência)', value: 'US$ 8,5', numeric: 8.5, unit: 'US$/tCO₂e', period: '2025', sourceId: 'cvm', sourceLink: 'https://www.gov.br/cvm/pt-br', lastUpdated: '2026-05-15', status: 'placeholder' }
]

export const companyComparison = [
  { company: 'Orizon', landfillAssets: 17, biogasProjects: 12, ebitdaMargin: 39.2, netDebtEbitda: 2.1, period: '2025', source: 'Orizon RI', sourceLink: 'https://ri.orizonvr.com.br/', lastUpdated: '2026-05-15', status: 'estimated' },
  { company: 'Empresa A', landfillAssets: 8, biogasProjects: 4, ebitdaMargin: 24.5, netDebtEbitda: 2.8, period: '2025', source: 'Placeholder', sourceLink: '-', lastUpdated: '2026-05-15', status: 'placeholder' },
]

export const timeseries = [
  { year: '2022', generation: 78.1, collection: 92.8, recycling: 4.2 },
  { year: '2023', generation: 80.2, collection: 93.4, recycling: 4.5 },
  { year: '2024', generation: 81.6, collection: 93.4, recycling: 4.8 }
]

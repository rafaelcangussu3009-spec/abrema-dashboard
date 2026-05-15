# ABREMA Intelligence Dashboard

Dashboard profissional para análise do setor brasileiro de resíduos sólidos.

## Stack
- React + Vite
- TailwindCSS
- Recharts
- Framer Motion

## Estrutura
- `src/data/registry.js`: estrutura de extração de dados, metadados de fonte e rastreabilidade.
- `src/pages/*`: páginas de setor, comparativo, Orizon, ABREMA, biometano e ESG/carbono.
- `src/components/*`: layout, KPIs e tabela de trilha de fontes.

## Rodar localmente
```bash
npm install
npm run dev
```

## Política de dados
Cada ponto de dado deve conter:
- valor
- período
- fonte
- link
- data de atualização
- status (`reported`, `estimated`, `placeholder`)

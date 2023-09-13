import React from 'react';
import ChartComponent from './components/ChartComponent';

const App = () => {
  const data = [
    // ... (your data here)
    {
      "end_year": "",
      "intensity": 6,
      "sector": "Energy",
      "topic": "gas",
      "insight": "Annual Energy Outlook",
      "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
      "region": "Northern America",
      "start_year": "",
      "impact": "",
      "added": "January, 20 2017 03:51:25",
      "published": "January, 09 2017 00:00:00",
      "country": "United States of America",
      "relevance": 2,
      "pestle": "Industries",
      "source": "EIA",
      "title": "U.S. natural gas consumption is expected to increase during much of the projection period.",
      "likelihood": 3
  },
  {
      "end_year": "",
      "intensity": 6,
      "sector": "Energy",
      "topic": "oil",
      "insight": "Annual Energy Outlook",
      "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
      "region": "Northern America",
      "start_year": "",
      "impact": "",
      "added": "January, 20 2017 03:51:24",
      "published": "January, 09 2017 00:00:00",
      "country": "United States of America",
      "relevance": 2,
      "pestle": "Industries",
      "source": "EIA",
      "title": "Reference case U.S. crude oil production is projected to recover from recent declines.",
      "likelihood": 3
  },
  {
      "end_year": "",
      "intensity": 6,
      "sector": "Energy",
      "topic": "consumption",
      "insight": "Annual Energy Outlook",
      "url": "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
      "region": "Northern America",
      "start_year": "",
      "impact": "",
      "added": "January, 20 2017 03:51:23",
      "published": "January, 09 2017 00:00:00",
      "country": "United States of America",
      "relevance": 2,
      "pestle": "Industries",
      "source": "EIA",
      "title": "U.S. petroleum consumption is projected to remain below the 2005 level.",
      "likelihood": 3
  },
  {
      "end_year": "",
      "intensity": 6,
      "sector": "Environment",
      "topic": "oil",
      "insight": "WRI Partnership Aims to Foster Supply Chain Transparency, Zero-Deforestation Strategies",
      "url": "http://www.sustainablebrands.com/news_and_views/supply_chain/sustainable_brands/wri_partnership_aims_foster_supply_chain_transparency",
      "region": "Central America",
      "start_year": "",
      "impact": "",
      "added": "January, 20 2017 03:26:40",
      "published": "January, 18 2017 00:00:00",
      "country": "Mexico",
      "relevance": 3,
      "pestle": "Environmental",
      "source": "sustainablebrands.com",
      "title": "Mars, Unilever, Cargill and Mondelēz are already using GFW Commodities to assess deforestation risks in their palm oil, soy and cocoa supply chains across a collective area of land the size of Mexico.",
      "likelihood": 2
  },
  {
      "end_year": "",
      "intensity": 6,
      "sector": "",
      "topic": "market",
      "insight": "N-Hexane Market Hit at a CAGR of 5% by 2024 - PMR Report",
      "url": "http://www.sbwire.com/press-releases/n-hexane-market-hit-at-a-cagr-of-5-by-2024-pmr-report-761520.htm",
      "region": "World",
      "start_year": "",
      "impact": "",
      "added": "January, 19 2017 00:55:54",
      "published": "January, 18 2017 00:00:00",
      "country": "",
      "relevance": 2,
      "pestle": "Economic",
      "source": "SBWire",
      "title": "Polymerization will remain top 3 end-users in global n-Hexane Market.",
      "likelihood": 3
  }
  ];

  return (
    <div className="App">
      <ChartComponent data={data} />
    </div>
  );
};

export default App;
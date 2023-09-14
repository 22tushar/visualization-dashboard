
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import React, { useState, useEffect } from 'react';

const BarCharts = () => {
 
  const [MongoBarData, setData] = useState([
    {
      topic:"topic:oil",
      country:3,
      fee:"xx"
   },
   {
     topic:"topic:gas",
      country:10,
      fee:"yy"
   },
   {
    topic:"topic:gdp",
    country:10,
    fee:"zz"
 }
  ])

    // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);  

     const BarData= MongoBarData.map(item => {
      return {
        topic: item.topic,
        // color: `hsl(${Math.random() * 360}, 70%, 50%)`, // Assign random color or use a logic to generate unique colors
        country:item.country
      }
    });
  return (
     <ResponsiveContainer width="50%" aspect={3}>
         <BarChart data={BarData} width={400} height={400}>
          <XAxis dataKey='topic'/>
          <YAxis/>
          <Tooltip/>
          <Bar dataKey='country' fill='green'/>
         </BarChart>
     </ResponsiveContainer>

    
  );
};

export default BarCharts;

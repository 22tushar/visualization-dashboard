import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const BarCharts = () => {
 
     const data = [
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
     ]
  return (
     <ResponsiveContainer width="50%" aspect={3}>
         <BarChart data={data} width={400} height={400}>
          <XAxis dataKey='topic'/>
          <YAxis/>
          <Tooltip/>
          <Bar dataKey='country' fill='green'/>
         </BarChart>
     </ResponsiveContainer>

    
  );
};

export default BarCharts;

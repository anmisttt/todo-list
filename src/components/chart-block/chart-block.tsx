import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';
import { Card } from '../../constants';

const ChartBlock = ({cards}: Props) => {
  
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];
      const dataSet = labels.map((_label, i) => cards.filter(card => new Date(card.endDate).getMonth()===i).length)
      const data = {
        labels: labels,
        datasets: [{
          label: 'Количество задач, выполненных за месяц',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: dataSet
        }]
      };

      
    return (
        <div className="chart-block">
            <HorizontalBar
            data={data}
            height={600}
            width={400}
            ></HorizontalBar>
       </div>
    )
}

interface Props {
    cards: Card[]
}

export default ChartBlock
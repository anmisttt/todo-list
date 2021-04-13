import PropTypes from 'prop-types';
import {Bar} from 'react-chartjs-2';

const ChartBlock = ({cards}) => {
  
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
      const dataSet = labels.map((_label, i) => cards.filter(card => new Date(card.date).getMonth()===i).length)
  console.log(dataSet);
      const data = {
        labels: labels,
        datasets: [{
          label: 'Количество задач, выполненных за месяц',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: dataSet
        }]
      };
      const config = {
        type: 'line',
        data,
        options: {
            indexAxis: 'y',
          }
      };

      
    return (
        <div>
            <Bar
            data={{
              labels: labels
            }}
            height={400}
            width={600}
            ></Bar>
        </div>
    )
}

ChartBlock.propTypes = {
    cards: PropTypes.array.isRequired
}

export default ChartBlock
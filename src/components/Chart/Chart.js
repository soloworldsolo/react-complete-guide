import ChartBar from './ChartBar';
import './Chart.css';
const Chart = (props) => {
    console.log("insode chartbar");
    console.log(props.dataPoints);
    const valueList = props.dataPoints.map( dataPoint => dataPoint.value)
    const max = Math.max(...valueList);
      console.log(max);
  return (
      <div className='chart'>
          
          {props.dataPoints.map((dataPoint )=> {
           <ChartBar 
           key = {dataPoint.label}
           value={dataPoint.value} 
            maxValue={max}
            label ={dataPoint.label}
           />
       })}
      </div>
  )
}

export default Chart;
import React from 'react'
import { Pie } from 'react-chartjs-2';
function ChartShow(props) {

    //using chartjs for pie chart
    //these data is used to show pie chart
    const data = {
        labels: ['Men`s clothing', 'Women`s clothing', 'Electronics', 'Jewelery'],
        datasets: [
            {
                label: '# of Votes',
                // These are number of product in each category
                data: [
                    props.getManfashionList().length,
                    props.getwomenfashionList().length,
                    props.getelcectronicList().length,
                    props.getjewellaryList().length],
                //We have set background color for each section of the pie chart
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    '#90EE90',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                //We have set border color for each section of the pie chart
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'green',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    return (
        <div className=' bg-white text-black h-full w-full md:w-1/2 md:h-3/4 flex flex-col'>
            <span className="p-2 cursor-pointer" onClick={() => {
                props.setChartshow(false);
            }} >
                &times;
            </span>
            <div className='my-auto mx-auto'>
            <Pie data={data}/>
            </div>
        </div>
    )
}

export default ChartShow

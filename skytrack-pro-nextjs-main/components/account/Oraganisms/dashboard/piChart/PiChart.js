import { useEffect } from "react"
import { Chart } from "chart.js";
import DashBoardWidgetLayout from "../../../../layouts/dashboard/dashWidgetLayout/dashBoardWidgetLayout";
import MoreIcon from "../../../Molecules/moreicon/MoreIcon";
function PiChart() {
    useEffect(() => {
        var ctx = document.getElementById('myChart1').getContext('2d');
        var myChart1 = new Chart(ctx, {
            type: 'doughnut',
            data: {
                
                
                datasets: [{
                    data: [50, 30, 20 , 20],
                    borderColor: [
                        
                        "rgba(58, 54, 219, 1)",
                        "rgba(3, 168, 158, 1)",
                        "rgba(255, 105, 180, 1)",
                    ],
                    
                    backgroundColor: [
                        
                        "rgba(58, 54, 219, 1)",
                        "rgba(3, 168, 158, 1)",
                        "rgba(255, 105, 180, 1)",
                    ],
                    borderWidth: 2
                    
                }],
                labels: [ "Lead", "In progress","Closed"],
            },
            options: {
                
                plugins: {
                    doughnutLabel: {
                      labels: [
                        {
                          text: '80% leads',
                          font: {
                            size: 28,
                            weight: 'bold'
                          },
                          color: '#333'
                        }
                      ]
                    }
                  },
                legend: {
                    position: 'bottom'
                  },
                  layout: {
                    padding: 40,
                    // margin: 20
                  },
                // responsive: true,
                cutoutPercentage: 76,
                 radius: "60%",
                maintainAspectRatio: false,
                width: 300,
                height: 300,
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },
            plugins: [{
                id: 'doughnutLabel',
                beforeDraw: function(chart, args, options) {
                  const labels = options.labels || [];
                  const ctx = chart.ctx;
                  const width = chart.width;
                  const height = chart.height;
                  const fontSize = labels[0]?.font?.size || 12;
                  const fontWeight = labels[0]?.font?.weight || 'normal';
                  const fontStyle = labels[0]?.font?.style || 'normal';
                  const fontColor = labels[0]?.color || '#000';
                  const text = labels[0]?.text || '';
            
                  ctx.restore();
                  ctx.font = `${fontWeight} ${fontSize}px ${fontStyle} auto`;
                  ctx.fillStyle = fontColor;
                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'middle';
                  const centerX = width / 2;
                  const centerY = height / 2.4;
                  ctx.fillText(text, centerX, centerY);
                  ctx.save();
                }
              }]

        });
    }, [])


    return (
        <>
           
           
           <DashBoardWidgetLayout>
            <div className="flex items-center justify-content-between">
                <h6>Analytics</h6>
                <MoreIcon />
            </div>
            <canvas id='myChart1'></canvas>
           </DashBoardWidgetLayout>
                   
               
        </>
    )
}

export default PiChart;
import { useEffect } from "react"
import { Chart } from "chart.js";
import Styles from "./chart.module.css"
import DashBoardWidgetLayout from "../../../../layouts/dashboard/dashWidgetLayout/dashBoardWidgetLayout";
import MoreIcon from "../../../Molecules/moreicon/MoreIcon";
function ChartView() {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["10am", "11am", "12am", "01pm", "02pm","03pm","04pm", "05pm", "06pm","07pm"],
                datasets: [{
                    
                    data: [0,40,20,60,30,40,50,30,50,0],
                    label: "Sale",
                    
                    //    backgroundColor: "rgba(58,54,219, .1)",
                    backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) {
                      return null;
                    }
                    const gradient = ctx.createLinearGradient(0, chartArea.left, 0, chartArea.right);
                    gradient.addColorStop(0, 'rgba(58, 54, 219, 0.5)');
                    gradient.addColorStop(0.5, 'rgba(255, 105, 180, 0.35) ');
                    gradient.addColorStop(1, 'rgba(255, 205, 86, 0.5)');
                    return gradient;
                  },
                  
                 }, 
                ]
            },
           
            
            
        });
    }, [])


    return (
        <div>
           
           
           <DashBoardWidgetLayout>
           <div className="flex items-center justify-content-between">
                <h6>Reports</h6>
                <MoreIcon />
            </div>
                <canvas id='myChart'></canvas>
            </DashBoardWidgetLayout>
                
            
        </div>
    )
}

export default ChartView;
import React, { memo } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

import './barChart.css'

const ChartSection = () => {
    return (
        <div className="ChartSection">
            <div className="dataCard revenueCard">Chart 1</div>

            <div className="dataCard customerCard">
                Chart 2
            </div>

            <div className="dataCard categoryCard">Chart 3</div>

        </div>
    )
}
export default memo(ChartSection)
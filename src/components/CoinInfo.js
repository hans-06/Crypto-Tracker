import { createTheme, ThemeProvider } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { CryptoState } from '../CryptoContext'
import { HistoricalChart } from '../config/api'
import { Line } from 'react-chartjs-2'
import { CircularProgress } from '@mui/material'
import SelectButton from './SelectButton.js'
import { customStyles } from '../Style'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { chartDays } from '../config/data'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const CoinInfo = ({ coin }) => {
  // console.log(coin);
  const [historicData, setHistoricData] = useState()
  const [days, setDays] = useState(1)

  const { currency } = CryptoState()

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency))
    // console.log(data)

    setHistoricData(data.prices);
  };
  console.log(historicData, "data")

  useEffect(() => {
    fetchHistoricData()
  }, [currency, days]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff"
      },
      type: "dark",
    },
  });

  const container = {
    md: {
      background: "white"
    }
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <div style={customStyles.coinInfoCont} responsive={container}>
        {!historicData ? (<CircularProgress style={{ color: "gold" }}
          size="250px"
          thickness={1} />)
          :
          (<>
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}: ${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div style={customStyles.button}>
              {chartDays.map((day) => {
                return <SelectButton
                  key={day.value}
                  onClick={() => setDays(day.value)}
                  selected={day.value === days}>
                  {day.label}</SelectButton>
              })}
            </div>
          </>
          )}
      </div>
    </ThemeProvider>
  )
}

export default CoinInfo
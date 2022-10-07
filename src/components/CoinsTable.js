import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Container } from '@mui/system';
// import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';
import { LinearProgress, Table, TableContainer, TextField, Typography, TableHead, TableRow, TableCell, TableBody, createTheme, ThemeProvider, Pagination } from '@mui/material';
import { customStyles } from '../Style';
import { useNavigate } from "react-router-dom";
import { numberWithCommas } from './Carousel';

const CoinsTable = () => {
  // const [coins, setCoins] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const { currency, symbol, coins, loading, fetchCoins } = CryptoState();


  // const fetchCoins = async () => {
  //   setLoading(true);
  //   const { data } = await axios.get(CoinList(currency));
  //   setCoins(data);
  //   setLoading(false);
  // };

  // console.log(coins);

  useEffect(() => {
    fetchCoins();

  }, [currency]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff"
      },
      type: "dark",
    },
  });

  const handleSearch = () => {
    return (coins.filter((coin) => {
      return (
        coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search)
      )
    }))
  }

  // console.log(handleSearch());

  // const sresults = Object.values(handleSearch);

  const arr = ["Coin", "Price", "24h Change", "Market Cap"];


  return (<>
    <ThemeProvider theme={darkTheme}>
      <Container sx={customStyles.tableCont}>
        <Typography
          variant='h4' sx={customStyles.tableHeading}>Cryptocurrency Prices by Market Cap</Typography>
        <TextField label="Search For a Crypto Currency.."
          variant="outlined"
          autoComplete='off'
          sx={customStyles.tableSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
        {loading ? <LinearProgress sx={{ backgrounColor: "gold" }} />
          : <TableContainer>
            <Table>
              <TableHead sx={customStyles.tableHead}>
                <TableRow>
                  {arr.map((head) => (
                    <TableCell sx={customStyles.tableRow}
                      align={head === "coin" ? "" : "right"}>{head}</TableCell>
                  ))}
                </TableRow>
                {/* <TableRow>
                  <TableCell>
                    "coin"
                  </TableCell>
                </TableRow> */}
              </TableHead>
              {/* <TableRow>{sresults.map((sdata)=>(
                <TableCell>{sdata}</TableCell>
              ))}</TableRow> */}

              <TableBody>
                {handleSearch().slice((page - 1) * 10, (page - 1) * 10 + 10).map((row) => {
                  const profit = row.price_change_percentage_24h > 0;

                  return (
                    <TableRow
                      onClick={() => navigate(`/coins/${row.id}`)}
                      sx={customStyles.row}
                      key={row.name}
                    >
                      <TableCell component="th"
                        scope='row'
                        sx={customStyles.searchTCell}>
                        <img src={row?.image}
                          alt={row.name}
                          height="50"
                          style={{ maginBottom: 10 }} />
                        <div style={customStyles.tableCell_1Div}>
                          <span style={customStyles.tableCell_1Span1}>{row.symbol}</span>
                          <span style={customStyles.tableCell_1Span2}>{row.name}</span>
                        </div>
                      </TableCell>
                      <TableCell align="right" sx={customStyles.tableCell_1_2}>
                        {symbol}{" "}
                        {
                          numberWithCommas(row.current_price.toFixed(2))
                        }
                      </TableCell>
                      <TableCell
                        align='right'
                        sx={{
                          color: profit > 0 ? "green" : "red",
                          fontWeight: 500
                        }}>
                        {profit && "+"}
                        {row.price_change_percentage_24h.toFixed(2)}%
                      </TableCell>
                      <TableCell align='right' sx={customStyles.tableCell_1_2}>
                        {symbol}{" "}
                        {numberWithCommas(row.market_cap.toString().slice(0, -6))}M
                      </TableCell>

                    </TableRow>
                  );
                })}
              </TableBody>

            </Table>

          </TableContainer>
        }
        <Pagination
          sx={customStyles.pagination}
          activeLinkColor='secondary'
          count={(handleSearch()?.length / 10).toFixed(0)}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0,450);
          }}
        />

        {/* {loading? <LinearProgress sx={{backgrounColor: "gold"}}/>
      :  <TableContainer>
        <Table>
          <TableHead sx={customStyles.tableHead}>
            <TableRow>
            {arr.map((head) => (
          <TableCell sx={customStyles.tableCell} 
          align = {head === "coin" ? "" : "right"}>{head}</TableCell>   
      ))}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      } */}

      </Container>
    </ThemeProvider>
  </>
  )
}

export default CoinsTable
import { fontFamily } from "@mui/system";
import banner from "./banner2.jpg";

export const customStyles = {
  app: {
    background: "#14161a",
    color: "white",
    minHeight: "100vh",
  },

  banner: {
    backgroundImage: `url(${banner})`,
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    // paddingTop: 25,
    justifyContent: "space-around",
  },
  title: {
    flex: 1,
    color: "#ffd700",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  menu: {
    width: 100,
    height: 40,
    marginRight: 15,
    color: "white",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 3,
    fontFamily: "Montserrat",
  },
  subHeading: {
    color: "darkgrey",
    textTransform: "capitalize",
    fontFamily: "Montserrat",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
  },
  carouselImg: {
    marginBottom: 10,
    height: 80,
  },
  carouselSymb: {
    fontSize: 22,
    fontWeight: 500,
  },
  tableCont: {
    textAlign: "center",
  },
  tableHeading: {
    margin: 10,
    fontFamily: "Montserrat",
  },
  tableSearch: {
    marginBottom: 10,
    width: "100%",
    "& .MuiFormLabel-root": {
      color: "darkgrey",
    },
    input: {
      color: "gold",
    },
    "& label.Mui-focused": {
      color: "gold",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "darkgrey",
      },
      "&:hover fieldset": {
        borderColor: "gold",
      },
    },
  },

  tableHead: {
    background: "#EEBC1D",
  },
  tableRow: {
    color: "black",
    fontWeight: 700,
    fontFamily: "Montserrat",
  },
  searchTCell: {
    display: "flex",
    gap: 2,
  },
  row: {
    backgroundColor: "#16171a",
    cursor: "pointer",
    "&:hover": {
      background: "#131111",
    },
    fontFamily: "Montserrat",
  },
  tableCell_1Div: {
    display: "flex",
    flexDirection: "column",
  },
  tableCell_1Span1: {
    textTransform: "uppercase",
    fontSize: 22,
    color: "white",
  },
  tableCell_1Span2: {
    color: "darkgrey",
  },
  tableCell_1_2: {
    color: "white",
  },
  pagination: {
    padding: 10,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "& .MuiPaginationItem-root": {
      color: "gold",
    },
  },
  coinpageCont: {
    display: "flex",
    // flexDirection: {
    //   md: "column"
    // },
    // alignItems: {
    //   md: "center"
    // }
  },
  coinpageSidebar: {
    // width: {
    //   md: "100%",
    // },
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "25px",
    borderRight: "2px solid grey",
  },
  coinpageHeading: {
    fontWeight: "bold",
    marginBottom: "20px",
    fontFamily: "Montserrat",
  },
  description: {
    width: "100%",
    fontFamily: "Montserrat",
    padding: "25px",
    paddingBottom: "15px",
    paddingTop: 0,
    textAlign: "justify",
  },
  marketData: {
    alignSelf: "start",
    padding: "25",
    paddingTop: "10px",
    width: "100%",
    // display: {
    //   md: "flex",
    // },
    // justifyContent:{
    //   md: "space-around",
    // },
    // flexDirection:{
    //   sm: "column",
    // },
    // alignItems: {
    //   sm: "center",
    //   sx: "start"
    // },
  },
  marketDataHead: {},
  coinInfoCont: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    padding: 40,
  },
  button: {
    display: "flex",
    marginTop: "20px",
    justifyContent: "space-around",
    width: "100%",
  },
  // selectButton: {
  //   border: "1px solid gold",
  //   borderRadius: "5px",
  //   padding: "10px",
  //   padddingLeft: "20px",
  //   paddingRight: "20px",
  //   fontFamily: "Montserrat",
  //   cursor: "pointer",
    

  //   "&:hover": {
  //     backgroundColor: "gold",
  //     color: "black",
  //   },
  //   width: "22%",
  // },
};

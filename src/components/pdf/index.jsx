import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import logo from './logo.png';
import Kaushan from '../../fonts/kaushan-script/KaushanScript-Regular.ttf';
import Spectral from '../../fonts/Spectral/Spectral-Light.ttf';
import SpectralBold from '../../fonts/Spectral/Spectral-ExtraBold.ttf';
// import ReactPDF from '@react-pdf/renderer';


// Register font
Font.register({ family: 'Kaushan Script' , src: Kaushan  }); 
Font.register({ family: 'Spectral light' , src: Spectral  });
Font.register({ family: 'Spectral bold' , src: SpectralBold  });
  //  Font.register({ family: 'Spectral', fonts: [
  //   { src: Spectral }, 
  //   { src:  SpectralBold, fontWeight: 600 },
  //  ]});
// Create styles
const styles = StyleSheet.create({
  page: { flexDirection: "column", padding: 25 },
  header: { flexGrow: 3 },
  bold: { fontFamily: 'Spectral bold', fontWeight: 600,  },
  table: {
    width: '100%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "stretch",
    flexWrap: "nowrap",
    alignItems: "stretch"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "stretch",
    flexWrap: "nowrap",
    alignItems: "stretch",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 35,
  },
  bottomTable: {
    width: 'auto',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "stretch",
    flexWrap: "nowrap",
    alignItems: "stretch",
    textAlign: 'center'
  },
  cell: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    alignSelf: "stretch",
    height: '135px',
  },
  bottomTitle: {
    backgroundColor: "#eee"
  },
  headerText: {
    fontSize: 11,
    fontWeight: 1200,
    width:'80%',
    color: "#1a245c",
    margin: 8,
    textAlign: 'left',
  },
  tableText: {
    margin: 10,
    fontSize: 10,
    color: 'neutralDark'
  },
  headerGrow: {
      flexGrow: 1,
  },
  title: {  
    color: '#05308C', 
    textAlign: 'left',
    fontFamily: 'Kaushan Script', 
    fontSize: '50px',
    paddingLeft: '2%',
    position: 'relative',
    top: '-20px'
  },
  titleDescr: { 
    color:'#05308C', 
    fontSize: '15px', 
    textAlign: 'center', 
    width: '100%', 
    fontFamily: 'Spectral light',
    position: 'relative',
    top: '-25px',
    left: '-30px' 

  },
  boldDescr: {
    fontSize: '15px',
    fontFamily: 'Spectral bold',
  },
  titleBold: {},
  image: { width: '20%' },
  img: { 
    width: '98px',
    height: '118px'
  
  },
  hr: { 
    borderColor: "##05308C",
    borderStyle: "solid",
    borderWidth: 1,
    border: '0',
    borderTop: 2,

  },
  TitleHr: { 
    color:'#05308C', 
    fontSize: '20px', 
    textAlign: 'center',
    fontFamily: 'Spectral bold',
    fontWeight: 600, 
    marginTop: '10px',
    marginBottom: '10px'
  },
  DataAttr: { 
    color:'#05308C', 
   },
  DataSet: {
    backgroundColor: "#eee", 
    padding: 5,
    borderRadius: '50%',
    fontFamily: 'Spectral light'
  },
  DataName: { width:'55%', fontFamily:'Spectral light', fontSize:'15px' },
  DataDate: { width:'30%', fontFamily:'Spectral light', fontSize:'15px' },
  bottomContainer: {
    backgroundColor: "#eee", 
    padding: 3,
    borderRadius: '10%',
    width: '100%',
    position: 'absolute',
    bottom: '20px',
    left: '25'
  }, 
  bttmPadding: { padding: '1px 0', fontFamily: 'Spectral light', fontSize: 14, },
  bttmTitle: { fontSize: 30, fontFamily:'Kaushan Script' },
  });
 
// Create Document Component
const PdfDocument = () => (
    <Document>
    <Page style={styles.page} size="A4">
    <View style={styles.table}>
          <View style={[styles.row, styles.header, styles.cell]}>
              <View object-fit="fill"  style={[styles.headerText, styles.cell, styles.image]}>
                <Image style={styles.img} src={logo} />
              </View>
              <View style={[styles.headerText, styles.cell, styles.headerGrow]}>
                <Text style={[styles.title]}> DR. Lois Rene</Text>
                <Text style={styles.titleDescr} >Gynecologie - Grossesse a Risque - Infertilite -</Text>
                <Text style={styles.titleDescr} >Chirurgie Pelvienne - Sonographie</Text>
                <Text style={[styles.bold, styles.titleDescr, styles.boldDescr]} >Fecondation in vitro</Text>
              </View>
          </View>
          <View style={styles.hr}>
            <Text style={[styles.TitleHr, styles.bold]}>Examen de Laboratoire</Text>
          </View>
          <View style={[styles.DataAttr, styles.row]}>
            <Text style={[styles.DataName, styles.DataSet]}>Nom: <Text style={[styles.bold, styles.boldData]}>Louis Roselande</Text></Text>
            <Text style={[styles.DataDate, styles.DataSet]}>Date: <Text style={[styles.bold, styles.boldData]}>22-06-2020</Text></Text>
          </View>
    </View>
    <View style={[styles.bottomTable, styles.DataAttr, styles.bottomContainer]}>
     <View style={styles.rowBottom}>
      <Text style={[styles.bttmPadding, styles.bttmTitle]}>Villa Sante</Text>
      <Text style={styles.bttmPadding}>15, angle rue Borno et Metellus, Petion-Ville, Haiti</Text>
      <Text style={styles.bttmPadding}>Tel: 37262329 / 34581176</Text>
      <Text style={styles.bttmPadding}>web: villasantehaiti.com / email: info@villasantehaiti.com</Text>
     </View>
    </View>
    </Page>
  </Document>
);

export default PdfDocument;
// ReactPDF.render(PdfDocument);

            
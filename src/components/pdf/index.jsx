import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import logo from './logo.png';
import Kaushan from '../../fonts/kaushan-script/KaushanScript-Regular.otf';
import Spectral from '../../fonts/Spectral/Spectral-Regular.ttf';
import SpectralBold from '../../fonts/Spectral/Spectral-Bold.ttf';
import ReactPDF from '@react-pdf/renderer';


// Register font
Font.register({ family: 'Kaushan Script' , src: Kaushan,  

   }); 
  //  Font.register({ family: 'Spectral' , src: Spectral,  }); 
   Font.register({ family: 'Spectral', fonts: [
    { src: Spectral }, 
    { src:  SpectralBold, fontWeight: 600 },
   ]});
// Create styles
const styles = StyleSheet.create({
  page: { flexDirection: "column", padding: 25 },
  header: { flexGrow: 3 },
  bold: { fontFamily: 'Spectral', fontWeight: 600,  },
  table: {
    fontSize: 10,
    width: 550,
    height: 180,
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
    flexBasis: 35
  },
  bottomTable: {
    fontSize: 10,
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
    alignSelf: "stretch"
  },
  bottomTitle: {
    backgroundColor: "#eee"
  },
  headerText: {
    fontSize: 11,
    fontWeight: 1200,
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
  title: { fontSize: 36, color:'#152B80', fontFamily:'Kaushan Script', paddingBottom:'20px' },
  titleDescr: { color:'#152B80', fontSize: 12 , textAlign:'center', width: 255, fontFamily:'Spectral' },
  titleBold: {},
  image: { width: '10%' },
  img: { width: '70px' },
  hr: { 
    borderColor: "#cc0000",
    borderStyle: "solid",
    borderWidth: 2,
    border: '0',
    borderTop: 2,
    paddingTop: 5,
    paddingBottom: '10px' 
  },
  TitleHr: { 
    color:'#152B80', 
    fontSize: 20, 
    fontWeight: '600', 
    textAlign: 'center',
    fontFamily: 'Spectral',
    fontWeight: 600, 
  },
  DataAttr: { 
    color:'#152B80', 
   },
  DataSet: {
    backgroundColor: "#eee", 
    padding: 10,
    borderRadius: '50%',
    fontFamily: 'Spectral'
  },
  DataName: { width:'55%' },
  DataDate: { width:'30%' },
  bottomContainer: {
    backgroundColor: "#eee", 
    padding: 3,
    borderRadius: '10%',
    width: '100%',
    position: 'absolute',
    bottom: '20px',
    left: '25'
  }, 
  bttmPadding: { padding: '3px 0', fontFamily: 'Spectral', },
  bttmTitle: { fontSize: 22, fontFamily:'Kaushan Script' }
  });
 
// Create Document Component
const PdfDocument = () => (
    <Document>
    <Page style={styles.page} size="A4">
    <View style={styles.table}>
          <View style={[styles.row, styles.header]}>
              <View object-fit="fill"  style={[styles.headerText, styles.cell, styles.image]}>
                <Image style={styles.img} src={logo} />
              </View>
              <View style={[styles.headerText, styles.cell, styles.headerGrow]}>
                <Text style={[styles.title]}> DR. Lois Rene</Text>
                <Text style={styles.titleDescr} >Gynecologie - Grossesse a Risque - Infertilite -</Text>
                <Text style={styles.titleDescr} >Chirurgie Pelvienne - Sonographie</Text>
                <Text style={[styles.bold, styles.titleDescr]} >Fecondation in vitro</Text>
              </View>
          </View>
          <View style={styles.hr}>
            <Text style={[styles.TitleHr, styles.bold]}>Examen de Laboratoire</Text>
          </View>
          <View style={[styles.DataAttr, styles.row]}>
            <Text style={[styles.DataName, styles.DataSet]}>Nom: <Text style={styles.bold}>Louis Roselande</Text></Text>
            <Text style={[styles.DataDate, styles.DataSet]}>Date: <Text style={styles.bold}>22-06-2020</Text></Text>
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

            
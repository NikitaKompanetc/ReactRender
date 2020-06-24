import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PdfDocument from './components/pdf/index';
import { PDFViewer } from '@react-pdf/renderer';


ReactDOM.render(
  <React.StrictMode>
    <PDFViewer>
      <PdfDocument></PdfDocument>
    </PDFViewer>
  </React.StrictMode>,
  document.getElementById('root')
);

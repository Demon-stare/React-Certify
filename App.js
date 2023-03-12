import * as React from 'react';
import './style.css';
import pdfMakev from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



var dd = {
  content: [
    'First paragraph',
    'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two linesAnother paragraph, this time a little bit longer to make sure, this line will be divided into at least two linesAnother paragraph, this time a little bit longer to make sure, this line will be divided into at least two linesAnother paragraph, this time a little bit longer to make sure, this line will be divided into at least two linesAnother paragraph, this time a little bit longer to make sure, this line will be divided into at least two linesAnother paragraph, this time a little bit longer to make sure, this line will be divided into at least two linesAnother paragraph, this time a little bit longer to make sure, this line will be divided into at least two linesAnother paragraph, this time a little bit longer to make sure, this line will be divided into at least two linesAnother paragraph, this time a little bit longer to make sure, this line will be divided into at least two linesAnother paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
  ],
};

document.getElementById('myBtn').addEventListener('click', downloadcertificate);

function downloadcertificate() {
  pdfMakev.createPdf(dd).download();
}

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

import React from 'react';
import './download-cv.css';

export const DownloadCv= () => {

    const handleDownload = () => {

        /*console.log("Evento de clic detectado");*/
        const link = document.createElement('a');
        link.href = '/René Alejandro Morales - QC Manual & Automation v1.2.pdf';
        link.download = 'René Alejandro Morales - QC Manual & Automation.pdf';
        link.click();
    }
    return (
        <button onClick={handleDownload} className="btn btn-cv" >Descargar Cv</button>
    );
}


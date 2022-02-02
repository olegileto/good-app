import React from 'react';

const DownloadButton = ({ downloadLink, imageSizes }) => {
    return (
        <div className='download-button'>
            <a href={downloadLink} download>Download</a>
            {imageSizes && (
                <div className='download-with-size'>
                    Arrow
                </div>
            )}
        </div>
    )
}

export default DownloadButton;
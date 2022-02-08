import React from 'react';
import ArrowDownloadButton from '../../shared/ArrowDownloadButton/ArrowDownloadButton';

const PhotoContentFooter = ({ isSponsored, sponsorship}) => {
    return (
        <div className={`photo-content-footer${isSponsored}`}>
             <div className='right-block'>
                 {sponsorship && (
                  <div className='sponsor-image'>
                      <img src={sponsorship?.sponsor?.profile_image?.medium} alt='alted'/>
                  </div>
                 )}
                 <div className='sponsor-description'>
                     <a href={sponsorship?.sponsor?.social?.portfolio_url} rel='noreferrer' target='_blank' className='sponsor-name'>{sponsorship?.sponsor?.first_name}</a>
                     <a href={sponsorship?.tagline_url} rel='noreferrer' target='_blank' className='sponsor-tagline'>{sponsorship?.tagline}</a>
                 </div>
             </div>
             <div className='left-block'>
                 <ArrowDownloadButton />
             </div>
         </div>
    )
}

export default PhotoContentFooter;
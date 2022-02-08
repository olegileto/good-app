import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

import './LikeButton.scss';

const LikeButton = () => {
    return (
        <div className='like-button'>
            <FavoriteIcon />
        </div>
    )
}

export default LikeButton;
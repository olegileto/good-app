import React from 'react';
import './UserInformation.scss';

const UserInformation = ({ userInfo: { user } }) => {

    return (
        <div className='user-information'>
             <div className='user-profile-image'>
                <img 
                    src={user.profile_image.medium} 
                    alt={user.bio}
                />
            </div>
            <div className='user-social'>
                <span className='user-name'>{user.first_name}</span>
                <a 
                    href={user.social.portfolio_url} 
                    target='_blank'
                    rel='noreferrer'
                >
                    Designed to evolve. Built to empower ↗
                </a>
            </div>
        </div>
    )
}

export default UserInformation;

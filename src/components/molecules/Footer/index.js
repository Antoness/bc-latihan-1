import React from 'react'
import { IconFoot, IcFacebook, IcDiscord, IcGithub, IcInstagram, IcTelegram, IcTwitter } from '../../../assets';
import './footer.scss';

const Icon = ({img}) => {
    return(
        <div className='icon-wrapper'>
                <img className='icon-medsos' src={img} alt='icon' />
        </div>
    )
}

const footer = () => {
  return (
    <div>
        <div className='footer'>
            <div>
                <img className='logo' src={IconFoot} alt='logo'/>
            </div>
            <div className='social-wrapper'>
                <Icon img={IcFacebook} />
                <Icon img={IcInstagram} />
                <Icon img={IcTwitter} />
                <Icon img={IcTelegram} />
                <Icon img={IcDiscord} />
                <Icon img={IcGithub} />

            </div>
        </div>
        <div className='copyright'>
            <p>copyright AeS 2023</p>
        </div>
    </div>
  )
}

export default footer;
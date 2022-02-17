import { FC } from 'react';
import Container from '../Container/Container';
import SearchForm from '../forms/SearchForm/SearchForm';

import headerLogo from '../../content/images/header-logo.png';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiFillPhone, AiFillMail } from 'react-icons/ai';
import { BsGoogle, BsFacebook, BsTelegram } from 'react-icons/bs';
import './Header.scss';

const Header: FC = () => {
  return (
    <header className="Header">
      {/* line1 */}
      <div className="Header-line1">
        <Container>
          <div className="Header-line1__content">
            {/* contacts */}
            <div className="Header-line1__contact">
              <div className="Header-line1__contact_item">
                <FaPhoneAlt size={'1rem'} style={{ margin: '5px' }} />
                +7 (499) 800-10-10
              </div>
              <div className="Header-line1__contact_item">
                <AiFillMail size={'1.2rem'} style={{ margin: '5px' }} /> kk309@mail.ru
              </div>
              <div className="Header-line1__contact_item">
                <AiFillPhone size={'1.2rem'} style={{ margin: '5px' }} />
                Callback
              </div>
            </div>

            {/* authorise out */}
            <div className="Header-line1__authout">
              <div className="Header-line1__authout_item">
                <BsGoogle size={'1.5rem'} />
              </div>
              <div className="Header-line1__authout_item">
                <BsFacebook size={'1.5rem'} />
              </div>
              <div className="Header-line1__authout_item">
                <BsTelegram size={'1.5rem'} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* line2 */}
      <div className="Header-line2">
        <Container>
          <div className="Header-line2__content">
            <div className="Header-line2__logo">
              <img className="Header-line2__logo_img" src={headerLogo} />
            </div>
            <SearchForm />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;

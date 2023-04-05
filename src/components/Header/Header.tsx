import { Button } from '../UI/button/Button';
import { InputText } from '../UI/input/InputText';
import { CartWidget } from '../CartWidget/CartWidget';
import logo from '../../img/logo_dark.png';
import manager from '../../img/manager.png';
import location from '../../img/icons/icon_location.svg';
import mail from '../../img/icons/icon_mail.svg';
import catalog from '../../img/icons/icon_catalog.svg';
import download from '../../img/icons/icon_download.svg';
import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row menu">
                    <ul className="contacts__list_header">
                        <li>
                            <div className="contact">
                                <img className="contact__img" src={location} alt="icon" />
                                <div className="contact__info_header">
                                    <p>г. Кокчетав, ул. Ж. Ташенова 129Б</p>
                                    <p className="light-gray">(Рынок Восточный)</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="contact">
                                <img className="contact__img" src={mail} alt="icon" />
                                <div className="contact__info_header">
                                    <p>opt.sultan@mail.ru</p>
                                    <p className="light-gray">На связи в любое время</p>
                                </div>
                            </div>     
                        </li>
                    </ul>
                    <nav className="navigation">
                        <ul className="navigation__list_header">
                            <li><a href="#">О компании</a></li>
                            <li><a href="#">Доставка и оплата</a></li>
                            <li><a href="#">Возврат</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="header__row header__forms">
                    <img className="header__logo" src={logo} alt="logo" />
                    <Button shape="big">
                        Каталог
                        <img src={catalog} alt="" style={{marginLeft: "12px"}} />
                    </Button>
                    <InputText 
                        placeholder="Поиск..." 
                        imgType="search" 
                        disabled />
                    <div className="contact">
                        <div className="contact__info contact__info_reverse">
                            <p>+7 (777) 490-00-91</p>
                            <p className="light-gray">время работы: 9:00-20:00</p>
                            <p className="light-gray">Заказать звонок</p>
                        </div>
                        <img className="contact__img" src={manager} alt="img" />
                    </div>    
                    <Button shape="big">
                        Прайс-лист
                        <img src={download} alt="" style={{marginLeft: "12px"}} />
                    </Button>
                    <CartWidget />
                </div>
            </div>
        </header>
    )
}
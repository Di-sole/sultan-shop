import { Button } from '../UI/button/Button';
import { InputText } from '../UI/input/InputText';
import telegram from '../../img/icons/icon_telegram.png';
import wtsp from '../../img/icons/icon_wtsp.png';
import download from '../../img/icons/icon_download.svg';
import logo from '../../img/logo_white.png';
import visa from '../../img/icons/icon_visa.png';
import mcard from '../../img/icons/icon_mc.png';
import './Footer.css';


export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="sultan__info">
                        <img src={logo} alt="logo" className='logo__footer' />
                        <p className="sultan__description">Компания «Султан» — снабжаем розничные магазины товарами <br/>
                            "под ключ" в Кокчетаве и Акмолинской области</p>
                        <label>
                            Подпишись на скидки и акции
                            <InputText 
                                imgType="arrow"
                                placeholder="Введите ваш E-mail" 
                                onChange={() => console.log('typing')}
                                disabled/>
                        </label>
                    </div>

                    <nav className="navigation">
                        <h3 className="navigation__title">Меню сайта:</h3>
                        <ul className="navigation__list_footer">
                            <li><a href="#">О компании</a></li>
                            <li><a href="#">Доставка и оплата</a></li>
                            <li><a href="#">Возврат</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </nav>

                    <div className="sections">
                        <div className="sections__title">Категории:</div>
                        <ul className="sections__list">
                            <li><a href="#">Бытовая химия</a></li>
                            <li><a href="#">Косметика и гигиена</a></li>
                            <li><a href="#">Товары для дома</a></li>
                            <li><a href="#">Товары для детей и мам</a></li>
                            <li><a href="#">Посуда</a></li>
                        </ul>
                    </div>

                    <div className="contact-links">
                        <div className="pricelist-link">
                            <h3 className="pricelist-link__title">Скачать прайс-лист:</h3>
                            <Button shape="big" type="button">
                                Прайс-лист
                                <img src={download} alt="" style={{marginLeft: "12px"}} />
                            </Button>
                        </div>
                        <div className="messegers-link">
                            <h3 className="messegers-link__title">Связь в мессенджерах:</h3>
                            <ul className="messegers-link__list">
                                <li><a href="#"><img src={wtsp} alt="icon" /></a></li>
                                <li><a href="#"><img src={telegram} alt="icon" /></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="contacts">
                        <h3 className="contacts__title">Контакты:</h3>
                        <ul className="contacts__list_footer">
                            <li>
                                <div className="contact">
                                    <div className="contact__info">
                                        <p>+7 (777) 490-00-91</p>
                                        <p className="contact__info_light">время работы: 9:00-20:00</p>
                                        <p className="contact__info_light">Заказать звонок</p>
                                    </div>
                                </div>    
                            </li>
                            <li>
                                <div className="contact">
                                    <div className="contact__info">
                                        <p>opt.sultan@mail.ru</p>
                                        <p className="contact__info_light">На связи в любое время</p>
                                    </div>
                                </div>     
                            </li>
                        </ul>
                        <ul className="credits__list">
                            <li><a href="#"><img src={visa} alt="visa" /></a></li>
                            <li><a href="#"><img src={mcard} alt="mc" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
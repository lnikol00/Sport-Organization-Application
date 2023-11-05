import React from 'react'

import Croatia_location_map from "../../images/info/Croatia_location_map.jpg"
import Flag_of_Croatia from "../../images/info/Flag_of_Croatia.svg.png"
import Dubrovnik_Neretva_County from "../../images/info/Dubrovnik-Neretva_County_OpenStreetMap.jpg"
import Local_Image from "../../images/info/Saric_Struga.jpg"
import Population_Image from "../../images/info/Izrezak.PNG"
import Church_Image from "../../images/info/Crkva_Saric_Struga.jpg"
import Chapel_Image from "../../images/info/Groblje_Saric_Struga.jpg"
import Logo_Image from "../../images/info/grb.jpg"

import styles from "../../styles/info/info.module.css"

import AnimatedPage from '../../components/context/AnimatedPage'

function Info() {
    return (
        <AnimatedPage>
            <div className={styles.infoContainer}>
                <h2>Šarić Struga</h2>
                <div className={styles.assideContainer}>
                    <div className={styles.heading}>
                        <h3>Šarić Struga</h3>
                        <div className={styles.imageLocation}>
                            <img src={Croatia_location_map} alt='location' />
                            <span>Šarić Struga na zemljovidu Hrvatske</span>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.dataContainer}>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Država</th>
                                    <td><img src={Flag_of_Croatia} alt='croatia-flag' /></td>
                                </tr>
                                <tr>
                                    <th>Županija</th>
                                    <td>Dubrovačko-neretvanska Županija</td>
                                </tr>
                                <tr>
                                    <th>Općina/Grad</th>
                                    <td>Ploče</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    <div className={styles.populationContainer}>
                        <h4>Stanovništvo (2021.)</h4>
                        <div className={styles.year}>
                            <h5>Ukupno:</h5>
                            <span>194</span>
                        </div>
                        <h5>Broj stanovnika</h5>
                        <table>
                            <tbody>
                                <tr>
                                    <th>2001.</th>
                                    <td>248</td>
                                </tr>
                                <tr>
                                    <th>2011.</th>
                                    <td>235</td>
                                </tr>
                                <tr>
                                    <th>2021.</th>
                                    <td>194</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    <div className={styles.imageCounty}>
                        <img src={Dubrovnik_Neretva_County} alt='county' />
                        <span>Šarić Struga na zemljovidu Dubrovačko-neretvanske županije</span>
                    </div>
                    <hr />
                    <div className={styles.imageLocal}>
                        <img src={Local_Image} alt='local' />
                    </div>
                </div>

                <div className={styles.descriptionContainer}>
                    <p>Šarić Struga je naselje u Republici Hrvatskoj, u sastavu Grada Ploča, Dubrovačko-neretvanska
                        županija.</p>

                    <p>
                        Šarić Struga je naseljavan s brdskim stanovništvom, koje je oduvijek nastojalo preseliti na neko
                        mjesto, gdje se bolje
                        živi.Tako su najprije na Šarić Strugu preselili Nikolci iz Vrbice i Trkalja, Smoljani sa Dubine,
                        Karamatići, Parmaći,
                        Eraci, Oršulići, Radonići, Bebići i ostali.
                    </p>
                    <p>S vremenom je izgrađena cesta s kojom su se spojili sa rogotinskim naseljem Markote. Električnu
                        energiju su dobili 1956.
                        Naknadno su se priključili na vodovod koji ide sa Klokuna kroz pločanska naselja sve do Komina.
                        Mjesno groblje izgrađeno
                        je oko 1970. Šarić Struga ima 190 stanovnika. Osnovna gospodarska djelatnost su poljoprivreda i u
                        zadnje vrijeme
                        turizam.</p>
                </div>

                <div className={styles.populationDescription}>
                    <h3>Stanovništvo</h3>
                    <p>Prema popisu stanovništva iz 2011. godine, naselje je imalo 235 stanovnika.</p>
                    <p>Naselje Šarić Struga: Kretanje broja stanovnika od 1857. do 2021.</p>
                    <img src={Population_Image} alt='population' />
                </div>

                <div className={styles.objectContainer}>
                    <h3>Sakralni objekti</h3>
                    <div className={styles.objectImage}>
                        <div className={styles.churchImage}>
                            <img src={Church_Image} alt='church' />
                            <span>Crkva Velike Gospe</span>
                        </div>
                        <div className={styles.chapelImage}>
                            <img src={Chapel_Image} alt='chapel' />
                            <span>Groblje s kapelicom</span>
                        </div>
                    </div>
                    <div className={styles.churchContainer}>
                        <h4>Crkva Velike Gospe</h4>
                        <p>Podignuta je 2003. za vrijeme župnika fra Frane Lace prema nacrtu dipl. inž. arh. Ante Barbira.
                            Betonska građevina sa
                            zvonikom na preslicu nalazi se s istočne strane groblja. Duga je 16,35 i široka 8,50 metara.</p>
                    </div>
                    <div className={styles.chapelContainer}>
                        <h4>Grobljanska kapela</h4>
                        <p>Sagrađena je 1970-ih za vrijeme župnika fra Aleksandra Ribičića na groblju u Šarić Strugi. Na
                            vrhu pročelja je zvonik na
                            preslicu za jedno zvono, a duga je 5 i široka 4,50 metara.</p>
                    </div>
                </div>
                <div className={styles.associationContainer}>
                    <h3>Udruga lađara Šarić Struga</h3>
                    <div className={styles.logoImage}>
                        <img src={Logo_Image} alt='logo' />
                        <span>Grb udruge lađara Šarić Struga</span>
                    </div>
                    <div className={styles.associationDescription}>
                        <p>Udruga lađara Šarić Struge je udruga veslača sa ciljem očuvanja tradicije , promidžbe športskih i
                            kulturnih aktivnosti, te zaštite i očuvanja prirode i okoliša.</p>
                        <p>
                            Dodatne aktivnosti udruge su sudjelovanje na tradicionalnom "Maratonu lađa"; sudjelovanje na
                            drugim športskim i kulturnim manifestacijama i
                            organiziranje istih, očuvanje od zaborava Neretvanske lađe kao i ostalih vrijednosti Neretve;
                            razvijanje športskog duha
                            kod mladeži; suradnja s Gradom Ploče, Dubrovačko-neretvanskom županijom, turističkim zajednicama
                            i drugim pravnim
                            osobama u cilju očuvanja prirodnih ljepota doline Neretve; druge djelatnosti u skladu sa zakonom
                            i odlukama Skupštine, a
                            u skladu s ciljevima osnivanja utvrđenim Statutom
                        </p>
                        <p>Udruga je službeno zasnovana 11.10.2011, a imala je čast sudjelovati na svim dosadašnjim
                            maratonim, izuzev dva (2018. i 2019.).</p>
                        <p>Član, te ujedno i kapetan ekipe Šarić Struge Nino Radonić ima izvelsane sve dosadašnje maratone.
                        </p>
                    </div>
                    <div className={styles.anthemContainer}>
                        <span>Himna Udruge lađara Šarić Struga:</span>
                        <iframe src="https://www.youtube.com/embed/ugTblfE2Cdk?playlist=ugTblfE2Cdk&loop=1" title='himna'>
                        </iframe>

                    </div>
                </div>


            </div>
        </AnimatedPage>
    )
}

export default Info

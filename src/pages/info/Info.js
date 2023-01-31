import React from 'react'

import slika1 from "./img/Croatia_location_map.jpg"
import slika2 from "./img/Flag_of_Croatia.svg.png"
import slika3 from "./img/Dubrovnik-Neretva_County_OpenStreetMap.jpg"
import slika4 from "./img/Saric_Struga.jpg"
import slika5 from "./img/Izrezak.PNG"
import slika6 from "./img/Crkva_Saric_Struga.jpg"
import slika7 from "./img/Groblje_Saric_Struga.jpg"
import slika8 from "./img/grb.jpg"

import styles from "./info.module.css"

function Info() {
    return (
        <div className={styles.infoContainer}>
            <h2>Šarić Struga</h2>
            <div className={styles.assideContainer}>
                <aside>
                    <div className={styles.heading}>
                        <h3>Šarić Struga</h3>
                        <div className={styles.image}>
                            <img src={slika1} alt='' />
                            <span>Šarić Struga na zemljovidu Hrvatske</span>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.data}>
                        <table>
                            <tbody>
                                <th>Država</th>
                                <td><img src={slika2} alt='' /></td>
                            </tbody>
                            <tbody>
                                <th>Županija</th>
                                <td>Dubrovačko-neretvanska Županija</td>
                            </tbody>
                            <tbody>
                                <th>Općina/Grad</th>
                                <td>Ploče</td>
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    <div className={styles.population}>
                        <h4>Stanovništvo (2021.)</h4>
                        <div className={styles.year}>
                            <h5>Ukupno:</h5>
                            <span>194</span>
                        </div>
                        <h5>Broj stanovnika</h5>
                        <table>
                            <tbody>
                                <th>2001.</th>
                                <td>248</td>
                            </tbody>
                            <tbody>
                                <th>2011.</th>
                                <td>235</td>
                            </tbody>
                            <tbody>
                                <th>2021.</th>
                                <td>194</td>
                            </tbody>
                        </table>
                    </div>
                    <hr />
                    <div className={styles.image2}>
                        <img src={slika3} alt='' />
                        <span>Šarić Struga na zemljovidu Dubrovačko-neretvanske županije</span>
                    </div>
                    <hr />
                    <div className={styles.image3}>
                        <img src={slika4} alt='' />
                    </div>
                </aside>
            </div>
            <div className={styles.desc}>
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
            <div className={styles.populationDesc}>
                <h3>Stanovništvo</h3>
                <p>Prema popisu stanovništva iz 2011. godine, naselje je imalo 235 stanovnika.</p>
                <p>Naselje Šarić Struga: Kretanje broja stanovnika od 1857. do 2021.</p>
                <img src={slika5} alt='' />
            </div>

            <div className={styles.object}>
                <h3>Sakralni objekti</h3>
                <div className={styles.objectImage}>
                    <div className={styles.objectImage1}>
                        <img src={slika6} alt='' />
                        <span>Crkva Velike Gospe</span>
                    </div>
                    <div className={styles.objectImage2}>
                        <img src={slika7} alt='' />
                        <span>Groblje s kapelicom</span>
                    </div>
                </div>
                <div className={styles.church}>
                    <h4>Crkva Velike Gospe</h4>
                    <p>Podignuta je 2003. za vrijeme župnika fra Frane Lace prema nacrtu dipl. inž. arh. Ante Barbira.
                        Betonska građevina sa
                        zvonikom na preslicu nalazi se s istočne strane groblja. Duga je 16,35 i široka 8,50 metara.</p>
                </div>
                <div className={styles.cemetery}>
                    <h4>Grobljanska kapela</h4>
                    <p>Sagrađena je 1970-ih za vrijeme župnika fra Aleksandra Ribičića na groblju u Šarić Strugi. Na
                        vrhu pročelja je zvonik na
                        preslicu za jedno zvono, a duga je 5 i široka 4,50 metara.</p>
                </div>
            </div>
            <div className={styles.association}>
                <h3>Udruga lađara Šarić Struga</h3>
                <div className={styles.associationImage}>
                    <img src={slika8} alt='' />
                    <span>Grb udruge lađara Šarić Struga</span>
                </div>
                <div className={styles.associationDesc}>
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
                <div className={styles.anthem}>
                    <span>Himna Udruge lađara Šarić Struga:</span>
                    <iframe src="https://www.youtube.com/embed/ugTblfE2Cdk?playlist=ugTblfE2Cdk&loop=1" title='himna'>
                    </iframe>

                </div>
            </div>


        </div>
    )
}

export default Info

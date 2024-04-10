import React from 'react'
import { StyleSheet, Text, Image, ScrollView, SafeAreaView } from 'react-native'

function Basic() {
    return (
        <SafeAreaView>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>
                    Stanovništvo
                </Text>

                <Text style={styles.text}>
                    Šarić Struga je naselje u Republici Hrvatskoj, u sastavu Grada Ploča, Dubrovačko-neretvanska
                    županija.
                </Text>

                <Text style={styles.text}>
                    Šarić Struga je naseljavan s brdskim stanovništvom, koje je oduvijek nastojalo preseliti na neko
                    mjesto, gdje se bolje
                    živi.Tako su najprije na Šarić Strugu preselili Nikolci iz Vrbice i Trkalja, Smoljani sa Dubine,
                    Karamatići, Parmaći,
                    Eraci, Oršulići, Radonići, Bebići i ostali.
                </Text>

                <Text style={styles.text}>
                    S vremenom je izgrađena cesta s kojom su se spojili sa rogotinskim naseljem Markote. Električnu
                    energiju su dobili 1956.
                    Naknadno su se priključili na vodovod koji ide sa Klokuna kroz pločanska naselja sve do Komina.
                    Mjesno groblje izgrađeno
                    je oko 1970. Šarić Struga ima 190 stanovnika. Osnovna gospodarska djelatnost su poljoprivreda i u
                    zadnje vrijeme
                    turizam.
                </Text>

                <Text style={styles.text}>
                    Prema popisu stanovništva iz 2011. godine, naselje je imalo 235 stanovnika.
                </Text>

                <Text style={styles.text}>
                    Naselje Šarić Struga: Kretanje broja stanovnika od 1857. do 2021.
                </Text>

                <Image source={require("../../../assets/info/Izrezak.png")} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        width: 200,
        marginBottom: 16,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'justify',
        marginBottom: 16,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    },
});

export default Basic

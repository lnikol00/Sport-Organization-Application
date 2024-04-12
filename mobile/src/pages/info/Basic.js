import React from 'react'
import { Text, Image, ScrollView, View } from 'react-native'

function Basic() {
    return (
        <View className="flex justify-center items-center m-3" >
            <ScrollView >
                <Text className="text-center mb-2 text-2xl after:content-none after:w-[200px] after:mx-auto after:block after:py-2 after:border-b-2">
                    Stanovništvo
                </Text>

                <Text className="text-lg pt-2">
                    Šarić Struga je naselje u Republici Hrvatskoj, u sastavu Grada Ploča, Dubrovačko-neretvanska
                    županija.
                </Text>

                <Text className="text-lg pt-2">
                    Šarić Struga je naseljavan s brdskim stanovništvom, koje je oduvijek nastojalo preseliti na neko
                    mjesto, gdje se bolje
                    živi.Tako su najprije na Šarić Strugu preselili Nikolci iz Vrbice i Trkalja, Smoljani sa Dubine,
                    Karamatići, Parmaći,
                    Eraci, Oršulići, Radonići, Bebići i ostali.
                </Text>

                <Text className="text-lg pt-2">
                    S vremenom je izgrađena cesta s kojom su se spojili sa rogotinskim naseljem Markote. Električnu
                    energiju su dobili 1956.
                    Naknadno su se priključili na vodovod koji ide sa Klokuna kroz pločanska naselja sve do Komina.
                    Mjesno groblje izgrađeno
                    je oko 1970. Šarić Struga ima 190 stanovnika. Osnovna gospodarska djelatnost su poljoprivreda i u
                    zadnje vrijeme
                    turizam.
                </Text>

                <Text className="text-lg pt-2">
                    Prema popisu stanovništva iz 2011. godine, naselje je imalo 235 stanovnika.
                </Text>

                <Text className="text-lg pt-2">
                    Naselje Šarić Struga: Kretanje broja stanovnika od 1857. do 2021.
                </Text>

                <Image className="w-[100%] my-3" source={require("../../../assets/info/Izrezak.png")} />
            </ScrollView>
        </View>
    )
}

export default Basic

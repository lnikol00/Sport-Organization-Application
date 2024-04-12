import React from 'react'
import { Text, Image, ScrollView, View } from 'react-native'

function Organization() {
    return (
        <View className="flex justify-center items-center m-3" >
            <ScrollView >
                <Text className="text-center mb-2 text-2xl after:content-none after:w-[200px] after:mx-auto after:block after:py-2 after:border-b-2">
                    Udruga lađara Šarić Struga
                </Text>

                <Text className="text-lg pt-2">
                    Udruga lađara Šarić Struge je udruga veslača sa ciljem očuvanja tradicije , promidžbe športskih i
                    kulturnih aktivnosti, te zaštite i očuvanja prirode i okoliša.
                </Text>

                <Text className="text-lg pt-2">
                    Dodatne aktivnosti udruge su sudjelovanje na tradicionalnom "Maratonu lađa"; sudjelovanje na
                    drugim športskim i kulturnim manifestacijama i
                    organiziranje istih, očuvanje od zaborava Neretvanske lađe kao i ostalih vrijednosti Neretve;
                    razvijanje športskog duha
                    kod mladeži; suradnja s Gradom Ploče, Dubrovačko-neretvanskom županijom, turističkim zajednicama
                    i drugim pravnim
                    osobama u cilju očuvanja prirodnih ljepota doline Neretve; druge djelatnosti u skladu sa zakonom
                    i odlukama Skupštine, a
                    u skladu s ciljevima osnivanja utvrđenim Statutom
                </Text>

                <Text className="text-lg pt-2">
                    Udruga je službeno zasnovana 11.10.2011, a imala je čast sudjelovati na svim dosadašnjim
                    maratonim, izuzev dva (2018. i 2019.).
                </Text>

                <Text className="text-lg pt-2">
                    Član, te ujedno i kapetan ekipe Šarić Struge Nino Radonić ima izvelsane sve dosadašnje maratone.
                </Text>

                <Image className="w-[100%] my-3 pb-10" source={require("../../../assets/info/grb.jpg")} />

            </ScrollView>
        </View>
    )
}

export default Organization

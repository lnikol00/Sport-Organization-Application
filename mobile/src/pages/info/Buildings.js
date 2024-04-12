import React from 'react'
import { Text, Image, ScrollView, View } from 'react-native'

function Buildings() {
    return (
        <View className="flex justify-center items-center m-3" >
            <ScrollView >
                <Text className="text-center mb-2 text-2xl after:content-none after:w-[200px] after:mx-auto after:block after:py-2 after:border-b-2">
                    Sakralni objekti
                </Text>

                <View>
                    <Text className="text-xl underline">
                        Crkva Velike Gospe
                    </Text>
                    <Text className="text-lg pt-2">
                        Podignuta je 2003. za vrijeme župnika fra Frane Lace prema nacrtu dipl. inž. arh. Ante Barbira.
                        Betonska građevina sa
                        zvonikom na preslicu nalazi se s istočne strane groblja. Duga je 16,35 i široka 8,50 metara.
                    </Text>
                    <Image className="w-[100%] h-[250px]  my-2" source={require("../../../assets/info/Crkva_Saric_Struga.jpg")} />
                </View>

                <View>
                    <Text className="text-xl underline">Grobljanska kapela</Text>
                    <Text className="text-lg pt-2">
                        Sagrađena je 1970-ih za vrijeme župnika fra Aleksandra Ribičića na groblju u Šarić Strugi. Na
                        vrhu pročelja je zvonik na
                        preslicu za jedno zvono, a duga je 5 i široka 4,50 metara.
                    </Text>
                    <Image className="w-[100%] h-[350px] my-2" source={require("../../../assets/info/Groblje_Saric_Struga.jpg")} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Buildings

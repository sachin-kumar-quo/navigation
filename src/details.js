import React from 'react';
import {View, Text, Button} from 'react-native';

import {styles} from './styles/styles';

const Detail = ({navigation,route}) =>{
    return(
        <View style={styles.canter}>
            <Text style={styles.title}>{route.params.screenName}</Text>
            <Button
                title = 'view bottom tabs'
                onPress={()=>{navigation.navigate("Bottom Tabs")}}
                />
            <Button
                title = 'view top tabs'
                onPress={()=>{navigation.navigate("Top Tabs")}}
                />
        </View>
    )
}

export default Detail;
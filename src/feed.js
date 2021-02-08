import React from 'react';
import {View, Text, Button} from 'react-native';

import {styles} from './styles/styles';

const Feed = ({navigation}) =>{
    return(
        <View style={styles.canter}>
            <Text style={styles.title}>Navigation Drawer</Text>
            <Button
                title = ' go to feed item'
                onPress={()=>{navigation.navigate('Details',{screenName: "my detail Screen"}) }}
                />
        </View>
    )
}

export default Feed;
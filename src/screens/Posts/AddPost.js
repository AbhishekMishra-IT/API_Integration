import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { Header } from '../../components/index';
import { Color } from '../../helper';
import { Toast, Root } from "native-base";



const AddUser = ({ navigation, route }) => {
    
    return (
        <Root>
            <SafeAreaView >
                <View style={{ flex: 1 }}>
                    <Header
                        back={true}
                        title={'Create new post'}
                        onBackPress={() => navigation.goBack()}
                    />
                    <View style={{ paddingHorizontal: 15 }}>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder="Enter Post title"
                            value={title}
                            onChangeText={(text) => setTitle(text)}
                            KeyBoardType={'default'}
                        />
                        <TextInput
                            style={[styles.textInputStyle, { height: 120, alignItems: 'flex-start' }]}
                            placeholder="Enter Post description"
                            value={body}
                            onChangeText={text => setBody(text)}
                            KeyBoardType={'default'}
                            numberOfLines={5}
                            multiline={true}
                        />
                        <TouchableOpacity style={styles.buttonStyle} onPress={() => { route.params.edit ? editPost() : createPost() }} >
                            <Text style={{ color: Color.White }}>{route.params.edit ? 'Edit Post' : 'Add Post'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </Root>
    );
}
const styles = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1, height: 45, marginTop: 10, paddingLeft: 10, borderColor: Color.gray8A8A8A, borderRadius: 5
    },
    buttonStyle: {
        width: '100%', backgroundColor: Color.sky1E8FCE, height: 45, marginTop: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center'
    }
})
export default AddUser;

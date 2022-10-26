import { Icon, Root, Toast } from 'native-base';
import React, { useEffect, useState } from 'react';

import {
    FlatList,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Card, Header } from '../../components';
import { Color } from '../../helper';
const Index = ({ navigation, route }) => {

    return (
        <Root>
            <View style={{ flex: 1, backgroundColor: '#f1f6f8' }}>
                <Header
                    back={true}
                    title={'User Post'}
                    onBackPress={() => navigation.goBack()}
                />
                {userPosts.length > 0 ?
                    <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                        <FlatList
                            bounces={false}
                            data={userPosts}
                            contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 60 }}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                                <View style={styles.cardContaine}>
                                    <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                                    <Text style={{ top: 3 }}>{item.body}</Text>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, }}>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('AddPost', { edit: true, data: item, userId: usersId })}
                                            style={styles.actionButton}>
                                            <Text style={styles.textStyle}>Edit</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.actionButton} onPress={() => deletePost(item.id)}>
                                            <Text style={styles.textStyle}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }
                        />
                    </View> :
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: Color.gray8A8A8A }}>No Post available!</Text>
                    </View>}
                <TouchableOpacity
                    onPress={() => addPost({ userId: usersId })}
                    style={styles.buttonStyle}>
                    <Text style={{ color: Color.White, fontSize: 25 }}>+</Text>
                </TouchableOpacity>
            </View>
        </Root>

    )
}
const styles = StyleSheet.create({
    buttonStyle: {
        position: 'absolute', right: 30, justifyContent: 'center', alignItems: 'center', bottom: 20, elevation: 10, backgroundColor: Color.blue112032, height: 55, width: 55, borderRadius: 55 / 2
    },
    actionButton: {
        paddingHorizontal: 10, paddingVertical: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: Color.sky1E8FCE, width: '20%'
    },
    textStyle: {
        color: Color.White
    },
    cardContaine: {
        elevation: 5, shadowColor: Color.Black,
        shadowRadius: 4,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 2
        }, borderRadius: 3, backgroundColor: Color.White, paddingHorizontal: 10, paddingVertical: 15, marginVertical: 7
    }
})
export default Index
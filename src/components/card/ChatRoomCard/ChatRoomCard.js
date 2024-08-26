import React from 'react';
import {View, Text} from 'react-native';
import styles from './ChatRoomCard.styles';
import database from '@react-native-firebase/database';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from "date-fns/locale";

const ChatRoomCard = ({data}) => {
  console.log('dataaa', data?.id);

  const formattedDate = formatDistance(parseISO(data.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text>s{data?.username}</Text>
        <Text>{formattedDate}</Text>
      </View>
      <Text style={styles.message_text}>{data.text}</Text>
    </View>
  );
};

export default ChatRoomCard;

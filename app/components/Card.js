import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
  Animated,
  Easing,
} from 'react-native';

const myList = [
  {
    id: 1,
    score: 21,
    desc: '六',
    level: 'middle',
  },
  {
    id: 2,
    score: 0,
    desc: '日',
    level: 'unknown',
  },
  {
    id: 3,
    score: 81,
    desc: '一',
    level: 'middle',
  },
  {
    id: 4,
    score: 90,
    desc: '二',
    level: 'high',
  },
  {
    id: 5,
    score: 61,
    desc: '三',
    level: 'middle',
  },
  {
    id: 6,
    score: 96,
    desc: '四',
    level: 'high',
  },
  {
    id: 7,
    score: 99,
    desc: '五',
    level: 'high',
  },
];

const moodLevelIcon = {
  unknown: require('../static/images/mood-unknown.png'),
  middle: require('../static/images/mood-middle.png'),
  high: require('../static/images/mood-high.png'),
};

const moodColor = {
  unknown: '#CFCFCF',
  middle: '#52C873',
  high: '#FF823C',
};

const Card = () => {
  myList.forEach(item => {
    item.barHeight = new Animated.Value(0);
    const barGrowAnimated = Animated.timing(item.barHeight, {
      toValue: item.score ? item.score * 1.75 + 40 : 80,
      duration: 1500,
      // easing: Easing.linear,
    });

    barGrowAnimated.start(() => {
      return item.barHeight.setValue(item.score ? item.score * 1.75 + 40 : 80);
    });
  });

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <View style={styles.avatar}>
          <Image
            style={styles.img}
            source={require('../static/images/avatar.png')}
          />
          <Text style={styles.name}>Wayne</Text>
        </View>
        <Text style={styles.score}>88</Text>
        <Text style={styles.desc}>周平均心情指数</Text>
      </View>
      <View style={styles.statistic}>
        {myList.map(item => {
          return (
            <View style={styles.statisticItem} key={item.id}>
              <Animated.View
                style={{
                  ...styles.bar,
                  // height: item.score ? item.score * 1.75 + 40 : 80,
                  height: item.barHeight,
                  backgroundColor: moodColor[item.level],
                }}>
                <Text style={styles.barScore}>{item.score}</Text>
                <Image
                  style={styles.barImg}
                  source={moodLevelIcon[item.level]}
                />
              </Animated.View>
              <Text style={styles.date}>{item.desc}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: 12,
    marginTop: 20,
    marginBottom: 0,
  },
  info: {
    height: 238,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#F2F2F2',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
  },
  avatar: {
    height: 38,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 36,
    borderRadius: 18,
  },
  name: {
    marginLeft: 12,
  },
  score: {
    fontSize: 72,
  },
  desc: {
    fontSize: 18,
    color: '#929292',
  },
  statistic: {
    height: 240,
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexGrow: 0,
  },
  statisticItem: {
    width: 38,
    marginLeft: 12,
  },
  bar: {
    // backgroundColor: '#52C873',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  barImg: {
    width: 32,
    height: 36,
    resizeMode: 'contain',
  },
  barScore: {
    paddingTop: 12,
    fontSize: 20,
    color: '#fff',
  },
  date: {
    textAlign: 'center',
    marginTop: 8,
  },
});

export default Card;

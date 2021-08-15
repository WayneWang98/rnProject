import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Easing,
  ImageBackground,
} from 'react-native';

const myList = [
  {
    id: 1,
    score: 21,
    desc: '六',
    level: 'middle',
    isSelected: false,
    isToday: false,
  },
  {
    id: 2,
    score: 0,
    desc: '日',
    level: 'unknown',
    isSelected: false,
    isToday: false,
  },
  {
    id: 3,
    score: 81,
    desc: '一',
    level: 'middle',
    isSelected: false,
    isToday: false,
  },
  {
    id: 4,
    score: 90,
    desc: '二',
    level: 'high',
    isSelected: false,
    isToday: false,
  },
  {
    id: 5,
    score: 61,
    desc: '三',
    level: 'middle',
    isSelected: false,
    isToday: false,
  },
  {
    id: 6,
    score: 96,
    desc: '四',
    level: 'high',
    isSelected: false,
    isToday: false,
  },
  {
    id: 7,
    score: 99,
    desc: '五',
    level: 'high',
    isSelected: false,
    isToday: true,
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
  const [dataList, setDataList] = useState(myList);
  const [hasCalled, setHasCalled] = useState(false);
  const playAnimation = () => {
    if (hasCalled) return;
    setHasCalled(true);
    dataList.forEach((item, index) => {
      item.barHeight = new Animated.Value(0);
      const barGrowAnimated = Animated.timing(item.barHeight, {
        toValue: item.score ? item.score * 1.5 + 40 : 50,
        duration: 1000,
        easing: Easing.linear,
        delay: 100 * index,
      });
      item.textOpacity = new Animated.Value(0);
      const barTextOpacityAnimated = Animated.timing(item.textOpacity, {
        toValue: 1,
        duration: 600,
        easing: Easing.linear,
        delay: 100 * index,
        useNativeDriver: true,
      });
      item.moodIcon = new Animated.Value(0);
      const moodIconAnimated = Animated.timing(item.moodIcon, {
        toValue: 1,
        duration: 600,
        easing: Easing.linear,
        delay: 100 * index,
        useNativeDriver: true,
      });

      item.barGrowAnimated = barGrowAnimated;
      item.barTextOpacityAnimated = barTextOpacityAnimated;
      item.moodIconAnimated = moodIconAnimated;
      // item.backgroundAnimated = backgroundAnimated;
    });
    dataList.forEach(item => {
      const {barGrowAnimated, barTextOpacityAnimated, moodIconAnimated} = item;
      barGrowAnimated.start(() => {
        return item.barHeight.setValue(item.score ? item.score * 1.5 + 40 : 50);
      });
      barTextOpacityAnimated.start();
      moodIconAnimated.start();
    });
  };

  playAnimation();

  const changeSelected = item => {
    if (item.isSelected) return;
    // dataList.forEach(data => {
    //   data.isSelected = false;
    // });
    item.isSelected = true;
    setDataList([...dataList]);
  };

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
        {dataList.map(item => {
          const dateTextColor = item.isToday
            ? '#fff'
            : item.isSelected
            ? moodColor[item.level]
            : '#111';
          const dateTextBgColor = item.isToday ? '#111' : '#fff';
          return (
            <View style={styles.statisticItem} key={item.id}>
              <Animated.View
                style={{
                  ...styles.bar,
                  height: item.barHeight,
                  backgroundColor: moodColor[item.level],
                }}>
                <Text style={styles.barScore}>{item.score ? item.score : ''}</Text>
                <Animated.Image
                  style={{
                    ...styles.barImg,
                    transform: [
                      {
                        scale: item.moodIcon,
                      },
                    ],
                  }}
                  source={moodLevelIcon[item.level]}
                />
              </Animated.View>
              <Animated.Text
                style={{
                  ...styles.date,
                  opacity: item.textOpacity,
                  color: dateTextColor,
                  backgroundColor: dateTextBgColor,
                  elevation: item.isSelected ? 6 : 0,
                }}
                onPress={() => {
                  changeSelected(item);
                }}>
                {item.desc}
              </Animated.Text>
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
    position: 'relative',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  barImg: {
    position: 'absolute',
    bottom: 0,
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
    lineHeight: 36,
    borderRadius: 8,
  },
});

export default Card;

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ShowTime = () => {
  const [time, setTime] = useState(new Date());
  const [season, setSeason] = useState('');
  const [image, setImage] = useState(null);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  const getSeason = () => {
    const month = time.getMonth();
    if (month >= 5 && month <= 7) {
      setSeason('Summer');
      setImage(require('./images/summer.jpg'));
    } else {
      setSeason('Winter');
      setImage(require('./images/winter.jpg'));
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    getSeason();
  }, [time]);

  const handleToggleBackground = () => {
    setIsDarkBackground(!isDarkBackground);
  };

  const containerStyle = {
    ...styles.container,
    backgroundColor: isDarkBackground ? '#333' : 'transparent',
  };

  const seasonWrapperStyle = {
    ...styles.seasonWrapper,
    backgroundColor: isDarkBackground ? '#222' : '#06cea8',
  };

  const seasonStyle = {
    ...styles.season,
    color: isDarkBackground ? '#fff' : '#000',
  };

  return (
    <TouchableOpacity onPress={handleToggleBackground}>
      <View style={containerStyle}>
        <View style={styles.timeWrapper}>
          <Text style={styles.time}>{time.toLocaleTimeString()}</Text>
        </View>
        <View style={seasonWrapperStyle}>
          {image && <Image source={image} style={styles.seasonImage} />}
          <Text style={seasonStyle}>{season}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: 400,
  },
  timeWrapper: {
    backgroundColor: '#06cea8',
    height: 181,
    width: 375,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    color: '#ffffff',
    fontFamily: 'Roboto',
    fontSize: 46,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 69,
    textAlign: 'center',
  },
  seasonWrapper: {
    backgroundColor: '#06cea8',
    height: 181,
    width: 375,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seasonImage: {
    height: 71,
    width: 375,
    resizeMode: 'cover',
  },
  season: {
    color: '#ffffff',
    fontFamily: 'Roboto',
    fontSize: 46,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 69,
    textAlign: 'center',
  },
});

export default ShowTime;

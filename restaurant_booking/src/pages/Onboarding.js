import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Onboarding = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSkip = () => {
    navigation.replace('Welcome');
  };

  const handleNext = () => {
    if (currentIndex === 2) {
      navigation.replace('Welcome');
    } else {
      swiperRef.current.scrollBy(1);
    }
  };

  const handleDotPress = (index) => {
    if (swiperRef.current) {
      swiperRef.current.scrollTo(index);
    }
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        loop={false}
        index={currentIndex}
        onIndexChanged={setCurrentIndex}
        showsPagination={false}
      >
        {/* First Slide */}
        <View style={styles.slide}>
          <Image source={require('../assets/images/onboarding1.png')} style={styles.fullImage} resizeMode="contain" />
          <Text style={styles.title}>Nearby restaurants</Text>
          <Text style={styles.description}>You don't have to go far to find a good restaurant,
we have provided all the restaurants that is 
near you</Text>
        </View>

        {/* Second Slide */}
        <View style={styles.slide}>
          <Image source={require('../assets/images/onboarding2.png')} style={styles.largeImage} />
          <Text style={styles.title}>Select the Favorites Menu</Text>
          <Text style={styles.description}>Now eat well, don't leave the house,You can 
choose your favorite food only with 
one click</Text>
        </View>

        {/* Third Slide */}
        <View style={styles.slide}>
          <Image source={require('../assets/images/onboarding3.png')} style={styles.largeImage} />
          <Text style={styles.title}>Good food at a cheap price</Text>
          <Text style={styles.description}>You can eat at expensive restaurants with
          affordable price</Text>
        </View>
      </Swiper>
      <View style={styles.bottomContainer}>
        <Button onPress={handleSkip} style={styles.skipButton}>Atla</Button>
        <View style={styles.paginationContainer}>
          {[0, 1, 2].map((index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleDotPress(index)}
            >
              <View
                style={[
                  styles.dot,
                  currentIndex === index && styles.activeDot
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
        <IconButton icon="chevron-right" onPress={handleNext} style={styles.nextButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  largeImage: {
    width: width * 0.7,
    height: height * 0.35,
  },
  fullImage: {
    width: width * 0.8,
    height: height * 0.4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  skipButton: {
    alignSelf: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: 'gray',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: 'green',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  nextButton: {
    alignSelf: 'center',
  },
});

export default Onboarding;

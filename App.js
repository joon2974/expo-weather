import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './weather';

export default class App extends Component {
  state = {
    isLoaded: true
  }

  render(){
    const {isLoaded} = this.state;
    return (
      // view 컴포넌트: OS에 따라 objective-c 혹은 java로 변경됨
      <View style={styles.container}>
        {/* 맨 위 상단 상태바 옵션, barStyle="dark-content": 아이콘이 검은색 */}
        <StatusBar hidden={true} />
        {isLoaded ? 
        <Weather /> : 
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting Weather... Please wait</Text>
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 같은 level의 component들 중에 얼마나 비율을 차지할 것인지!
    // flex direction 디폴트가 웹과는 반대로 column(세로 배열)
    // 모든 value는 String일 것
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center' 세로방향에서 중앙
    // flex-start: 천장에 붙게, flex-end: 바닥에 붙게, 
    // space-between: 각 컴포넌트를 위 아래 끝에, space-around: 어느 정도 떨어지게
    // alignItems: 'center' 가로방향에서 중앙
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 24,
    paddingRight: 30
  },
  loadingText: {
    fontSize: 40,
    marginBottom: 100
  }
  // redView: {
  //   height: 50,
  //   width: 50,
  //   backgroundColor: "red",
  //   // alignSelf: 'flex-end' 상위 컴포넌트가 아니라 자기 자신이 위치를 정할 수도 있다.
  //   // 단 layout은 상위 컴포넌트의 정의를 따름
  //   alignSelf: 'flex-end'
  // }
});
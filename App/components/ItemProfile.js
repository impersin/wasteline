import React, { Component } from 'react';
import { Image, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import { 
  FormLabel, 
  FormInput, 
  FormValidationMessage,
  Button 
} from 'react-native-elements';


// const binType = (color) => {
//   //refine as needed
//   let type, icon;
//   switch (color) {
//   case 'blue': type = 'Recycle', icon = 'http://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-twotone-dark-blue.png';
//     break;
//   case 'green': type = 'Compost', icon = 'http://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-twotone-dark-green.png';
//     break;
//   case 'black': type = 'Waste', icon = 'http://www.recycling.com/wp-content/uploads/2016/06/recycling-symbol-icon-twotone-black.png';
//     break;    
//   }
//   return [type, icon];
// };

const styles = StyleSheet.create({
  tableCell: {
    padding: 5,
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: 'black',
  }
});

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.handleUpvote = this.handleUpvote.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  handleUpvote(){
    console.log('hiiiiiiii')
    this.props.upvote();
  }

  renderComments(){
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 9}}>Maecenas libero est, sagittis quis tempus efficitur, posuere in diam. Etiam dignissim pulvinar velit eu varius.</Text>
        <View style={{flexDirection: 'column'}}>
          <Text>&#x2191;</Text>
          <Text>&#x2193;</Text>
        </View>
      </View>
    )
  }

  render(){
    return (
      <View style={{ flexDirection: 'column', marginTop: 30 }}>
        <Text style={{ fontSize: 20, margin: 10 }}>{this.props.currentProfile.object}</Text>
        <Image style={{ height: 200, width: 300 }} source={{ uri: this.props.currentProfile.image_url }} />
        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.tableCell, { height: 100, width: '50%', alignItems: 'center' }]}>
            {/* <Image style={{ height: 70, width: 70 }} source={{ uri: binType(item.bin)[1] }} /> */}
            {/* <Text>{binType(item.bin)[0]}</Text> */}
          </View>
          <View style={[styles.tableCell, { height: 100, width: '50%', alignItems: 'center' }]}>
            <Text>placeholder</Text>
          </View>
        </View>
        <View style={ styles.tableCell }>
          {/* <Text>Brand name: {item.brand}</Text> */}
          <Text>Brand name</Text>
        </View>      
        <View style={ styles.tableCell }>
          {/* <Text>Material type: {item.material}</Text> */}
          <Text>Material type</Text>
        </View>
        <View style={ styles.tableCell }>
          <Text>Top Comments</Text>
          {this.renderComments()}
        </View>
        <Button title="Join discussion" />
      </View>
    )
  }

} 

import React from 'react';
import { StyleSheet,ScrollView,View, Image,Text} from 'react-native'

const styles = StyleSheet.create({
  musicRoom:{
    // flexDirection: 'row',
    // alignSelf: 'flex-start'
  },
  musicBox:{
    width:200,
    height:20,
    borderWidth:0.2,
    borderColor:'black',
  },
  musicNote:{
    width: 20,
    height: 30,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  gap:{
    height:70
  }
});

const keyToNumMax = {
  'C':0,
  'D':1,
  'E':2,
  'F':3,
  'G':4,
  'A':5,
  'B':6,
}

const getNotefromStr = (note) =>{
  return {
    key:keyToNumMax[note[0]],
    octave:Number(note[note.length-1]),
    isSharp:note.length>2
  }
}

const MusicNote = (note, index, roomSize) => {

  const roomIndex = index%roomSize;

  const noteInfo  = getNotefromStr(note);
  const {octave,key} =noteInfo;
  const noteIndex = octave*7+key;
  const noteStartIndex = octave>=2?283:313

  const noteXPosition = 12+50*roomIndex;
  const noteYPosition = noteStartIndex - noteIndex*10;

  const thisNoteStyle = StyleSheet.create({
    musicNote: {
      width: 20,
      height: 30,
      position: 'absolute',
      left: noteXPosition,
      right: 0,
      top: noteYPosition,
    }
  });

  return (
      <Image
        key={index+"#"+note+"|"+noteXPosition}
        style={thisNoteStyle.musicNote}
        source={{uri:'http://exchangedownloads.smarttech.com/public/content/a8/a8aff788-0941-4d21-812d-ed370f2a9c1c/previews/medium/0001.png'}}
        // source={{uri:'http://www.pngall.com/wp-content/uploads/2016/09/Musical-Notes-Free-Download-PNG.png'}}
      />
    );
}
class MusicRoom extends React.Component {
  render () {
    const {notes,size} = this.props;
    return (
      <View style={styles.musicRoom}>
        <View style={styles.gap}/>
        
          <View style={styles.musicBox}></View>
          <View style={styles.musicBox}></View>
          <View style={styles.musicBox}></View>
          <View style={styles.musicBox}></View>

        <View style={styles.gap}/>
        <View style={styles.musicBox}></View>
        <View style={styles.musicBox}></View>
        <View style={styles.musicBox}></View>
        <View style={styles.musicBox}></View>

        <View style={styles.gap}/>


        {/*{MusicNote("E0",2 , size)}*/}
        {/*{MusicNote("F0",3 , size)}*/}



        {/*{MusicNote("C2",0 , size)}*/}
        {/*{MusicNote("D2",1 , size)}*/}
        {/*{MusicNote("E2",2 , size)}*/}
        {/*{MusicNote("F2",3 , size)}*/}
        {/*{MusicNote("G2",3 , size)}*/}
        {/*{MusicNote("A2",3 , size)}*/}
        {/*{MusicNote("B2",3 , size)}*/}

        <Text>{notes.map(note=>note.key)}</Text>
        {notes.map(note=>MusicNote(note.key, note.index , 4))}
      </View>
    )
  }
}

export default MusicRoom
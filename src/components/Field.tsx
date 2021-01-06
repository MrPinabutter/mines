import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Mine from './Mine';
import params from '../params';

interface FieldProps{
  mined?: Boolean,
  opened?: Boolean,
  nearMines?: number,
  exploded?: Boolean,
};

export default function Field({mined=false, opened=false, nearMines=0, exploded=false}:FieldProps){
  const styleFields:Array<{}> = [styles.field];

  if (opened) styleFields.push(styles.opened);
  if (exploded) styleFields.push(styles.exploded);
  if (styleFields.length === 1) styleFields.push(styles.regular);
  

  let color = '';
  if(nearMines > 0){
    if(nearMines == 1) color = '#2A28D7';
    if(nearMines == 2) color = '#2B520F';
    if(nearMines > 2 && nearMines < 6) color = '#F9060A';
    if(nearMines >= 6) color = '#F221A9';
  }

  return(
    <View style={styleFields}>
      {!mined && opened && nearMines > 0 ? 
        <Text style={[styles.label, { color: color }]} >{nearMines}</Text>
        : false
      }

      {mined && opened && (
        <Mine/>
      )}
    </View> 
  )
}

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize
  },

  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },

  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center'
  },

  exploded: {
    backgroundColor: 'red',
    borderColor: 'red'
  },

  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize
  }

});
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import params from '../params';

interface FieldProps{
  mined?: Boolean,
  opened?: Boolean,
  nearMines?: number
}

export default function Field({mined=false, opened=false, nearMines=0}:FieldProps){
  const styleFields:Array<{}> = [styles.field]

  if (opened) styleFields.push(styles.opened)
  if (mined) styleFields.push(styles.mined)
  if (styleFields.length === 1) styleFields.push(styles.regular)

  let color = ''
  if(nearMines > 0){
    if(nearMines == 1) color = '#2A28D7'
    if(nearMines == 2) color = '#2B520F'
    if(nearMines > 2 && nearMines < 6) color = '#F9060A'
    if(nearMines >= 6) color = '#F221A9'
  }

  return(
    <View style={styleFields}>
      {!mined && opened && nearMines > 0 ? 
        <Text style={[styles.label, { color: color }]} >{nearMines}</Text>
        : false
      }
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

  mined: {
    
  },

  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize
  }

})
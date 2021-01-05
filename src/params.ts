import { Dimensions } from  'react-native';

const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15, // Proporção do painel do jogo
  difficultLevel: 0.1,
  getColumnsAmount(){
    const width = Dimensions.get('window').width
    return Math.floor(width/ this.blockSize)
  },
  getRowsAmount(){
    const totalHeight = Dimensions.get('window').height
    const gameHeight = totalHeight * (1 - this.headerRatio)
    return Math.floor(gameHeight/this.blockSize)
  }
}

export default params
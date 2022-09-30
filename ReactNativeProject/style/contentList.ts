import ThemeColors from '../style/themes';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    backgroundColor: ThemeColors.SearchPage,
  },
  thumbnailContainer: {
    maxWidth: 165,
    margin: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  thumbnail: {
    width: 145,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  caption: {
    textAlign: 'center',
    maxWidth: 130,
    textAlignVertical: 'center',
    color: 'white',
    paddingTop: 7,
  },
});
export default Styles;

import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 32
  },
  title: {
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: 24,
    color: THEME.COLORS.TEXT
  },
  subtitle: {
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: 16,
    color: THEME.COLORS.CAPTION_400
  }
});
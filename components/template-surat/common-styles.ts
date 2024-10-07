import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    padding: 30,
    fontFamily: 'Helvetica'
  },
  section: {
    marginBottom: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Helvetica-Bold'
  },
  text: {
    marginBottom: 10
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between',
    marginBottom: 5
  },
  indent: {
    marginLeft: 20
  },
  label: {
    width: '120px', // Set a fixed width for the label
    textAlign: 'left'
  },
  value: {
    flex: 1, // Flex to take the remaining space
    textAlign: 'left'
  }
});

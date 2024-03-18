import { View, SafeAreaView, StyleSheet, Image } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
  },
  formInputMain: {
    marginVertical: 10,
    // padding:10,
    // height:200
  },
  formInput: {
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

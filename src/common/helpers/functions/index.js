// import { PermissionsAndroid, Platform } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import EncryptedStorage from 'react-native-encrypted-storage';
// import ImagePicker from 'react-native-image-crop-picker';
// import RNFS from 'react-native-fs';
// import { SCREEN } from '@constants';
// import { useAppTheme } from '@context';
// import { Event, EventInc, Events, Home, HomeInc, Homes, Message, MessageInc, Msg } from '@assets';

// let urls = [
//   {
//     id: 0,
//     time: 600,
//     urllink:
//       'https://firebasestorage.googleapis.com/v0/b/alltrueistic-cd871.appspot.com/o/intentionAudios%2FEmmanuel%20Jacob%20-%20The%20River%20of%20Hope.wav?alt=media&token=f2bb457b-2e11-4943-a7be-ecdbf49e8c67',
//   },
//   {
//     id: 1,
//     time: 300,
//     urllink:
//       'https://firebasestorage.googleapis.com/v0/b/alltrueistic-cd871.appspot.com/o/intentionAudios%2Fcalebetheridge_arise_full.wav?alt=media&token=b34f9b1d-6a63-47d9-bd1c-d969bd897593',
//   },
//   {
//     id: 2,
//     time: 72,
//     urllink:
//       'https://firebasestorage.googleapis.com/v0/b/alltrueistic-cd871.appspot.com/o/intentionAudios%2FReveille_The_Unknown_edited.mp3?alt=media&token=026f5fd7-d6c6-4f79-96ee-35ce8a756cc3',
//   },
// ];

// export const TabIcons = (key, focused) => {
//   const { theme } = useAppTheme();
//   let activeColor = theme ? '#4489D4' : '#723ADE';
//   let strokeColor = theme ? '#212739' : '#fff';
//   switch (key) {
//     case SCREEN.HOMESTACK:
//       return focused ? <Homes activeColor={activeColor} strokeColor={strokeColor} /> : <HomeInc />;
//     case SCREEN.EVENTSTACK:
//       return focused ? <Events activeColor={activeColor} /> : <Event />;
//     case SCREEN.MESSAGESTACK:
//       return focused ? <Msg activeColor={activeColor} /> : <MessageInc />;
//     default:
//       return <Home />;
//   }
// };

// export const isIos = Platform.OS == 'ios';

// export const FromCamera = async () => {
//   try {
//     let image = await ImagePicker.openCamera({
//       width: 300,
//       height: 400,
//       cropping: true,
//       compressImageQuality: 0.7,
//     });
//     return await Promise.resolve(image);
//   } catch (error) {
//     return await Promise.reject(error);
//   }
// };

// export const FromLiberary = async () => {
//   try {
//     let image = await ImagePicker.openPicker({
//       cropping: true,
//       mediaType: 'photo',
//     });
//     return await Promise.resolve(image);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const SelectVideo = async () => {
//   try {
//     let video = await ImagePicker.openPicker({
//       mediaType: 'video',
//       duration: 60,
//     });
//     return await Promise.resolve(video);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const requestContactsPermissionsAndroid = async () => {
//   try {
//     // console.log('I called this function');

//     const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS);
//     if (status === 'granted') {
//       return true;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     console.log('error', error);
//     return false;
//   }
// };

// export const SET_ITEM_ASYNC = async (key, value) => {
//   try {
//     await AsyncStorage.setItem(key, value);
//     return true;
//   } catch (error) {
//     console.log('[Err in setting item to async storage]', error);
//     return false;
//   }
// };
// export const GET_ITEM_ASYNC = async key => {
//   try {
//     const res = await AsyncStorage.getItem(key);
//     return res;
//   } catch (error) {
//     console.log('[Err in getting item from async storage]', error);
//     return null;
//   }
// };

// export const GET_ITEM_ENCRYPTED = async key => {
//   try {
//     console.log('====================================');
//     console.log('key to fetch', key);
//     console.log('====================================');
//     const res = await EncryptedStorage.getItem(key);
//     return res;
//   } catch (error) {
//     console.log('[Err in getting item from encrypted storage]', error);
//     return null;
//   }
// };

// export const SET_ITEM_ENCRYPTED = async (key, value) => {
//   try {
//     await EncryptedStorage.setItem(key, value);
//     return true;
//   } catch (error) {
//     console.log('[Err in setting item to encrypted storage]', error);
//     return false;
//   }
// };

// export const saveSoundFilesToDirectory = async () => {
//   try {
//     // console.log('sound files called');

//     const res = await Promise.all(
//       urls.map(async contributionItem => {
//         const localFileName = `sound${contributionItem?.time}.mp3`;
//         const localFilePath = `file://${RNFS.DocumentDirectoryPath}/${localFileName}`;
//         const fileExists = await RNFS.exists(localFilePath);
//         if (fileExists) {
//           await RNFS.unlink(localFilePath);
//         }
//         if (!fileExists) {
//           return await RNFS.downloadFile({
//             fromUrl: contributionItem?.urllink,
//             toFile: localFilePath,
//           }).promise;
//         }
//         if (fileExists) {
//           let contribution = {
//             time: contributionItem?.time,
//             fileExists,
//           };
//           return contribution;
//         }
//       }),
//     );

//     // console.log('[All Promises returned ]', res);
//     return true;
//   } catch (err) {
//     console.error('Error checking for sound file:', err);
//     return false;
//   }
// };

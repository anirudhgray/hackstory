// import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
// import React, {useEffect, useState, useRef} from 'react';
// import {Camera, useCameraDevices} from 'react-native-vision-camera';

// const CameraScreen = () => {
//   const camera = useRef(null);
//   const [cameraPermission, setCameraPermission] = useState();
//   const [open, setOpen] = useState(false);

//   // useEffect(() => {
//   //   (async () => {
//   //     const cameraPermissionStatus = await Camera.requestCameraPermission();
//   //     setCameraPermission(cameraPermissionStatus);
//   //   })();
//   // }, []);

//   console.log(`Perm status: ${cameraPermission}`);

//   const devices = useCameraDevices();
//   const cameraDevice = devices.back;

//   // const renderDetectorContent = () => {
//   //   if (cameraDevice && cameraPermission === 'authorized') {
//   //     return (
//   //       <Camera style={styles.camera} device={cameraDevice} isActive={true} />
//   //     );
//   //   }
//   //   return <ActivityIndicator size="large" color="#1C6758" />;
//   // };

//   return (
//     <View>
//       <Text>CameraScreen</Text>
//     </View>
//   );
// };

// export default CameraScreen;

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: '#EEF2E6',
//   },
//   saveArea: {
//     backgroundColor: '#3D8361',
//   },
//   header: {
//     height: 50,
//     backgroundColor: '#3D8361',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerText: {
//     color: '#ffffff',
//     fontSize: 20,
//   },
//   caption: {
//     height: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   captionText: {
//     color: '#100F0F',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   camera: {
//     height: 460,
//     width: '92%',
//     alignSelf: 'center',
//   },
//   photoAndVideoCamera: {
//     height: 360,
//   },
//   barcodeText: {
//     paddingHorizontal: 16,
//     paddingVertical: 20,
//     textAlign: 'center',
//     color: '#100F0F',
//     fontSize: 24,
//   },
//   pickerSelect: {
//     paddingVertical: 12,
//   },
//   image: {
//     marginHorizontal: 16,
//     paddingTop: 8,
//     width: 80,
//     height: 80,
//   },
//   dropdownPickerWrapper: {
//     paddingHorizontal: 16,
//     paddingBottom: 16,
//     zIndex: 9,
//   },
//   btnGroup: {
//     margin: 16,
//     flexDirection: 'row',
//   },
//   btn: {
//     backgroundColor: '#63995f',
//     margin: 13,
//     paddingHorizontal: 20,
//     paddingVertical: 16,
//     borderRadius: 8,
//   },
//   btnText: {
//     color: '#ffffff',
//     fontSize: 20,
//     textAlign: 'center',
//   },
//   video: {
//     marginHorizontal: 16,
//     height: 100,
//     width: 80,
//     position: 'absolute',
//     right: 0,
//     bottom: -80,
//   },
// });

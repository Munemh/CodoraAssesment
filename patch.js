//geoloaction service Patch

const fs = require('fs');
const path = require('path');

// Define the path to the file
const filePath = path.join(__dirname, 'node_modules', 'react-native-geolocation-service', 'android', 'build.gradle');

// Read the content of the file
fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    // Replace the content
    const result = data.replace(/com.google.android.gms:play-services-location:\$googlePlayServicesVersion/g, 'com.google.android.gms:play-services-location:21.0.1');

    // Write the updated content back to the file
    fs.writeFile(filePath, result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});





// Picker patch 
const pickerFilePath = path.join(__dirname, 'node_modules', 'react-native-dropdown-picker', 'src', 'components', 'Picker.js');

fs.readFile(pickerFilePath, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    // Replace the import statements
    let result = data.replace(
        `import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    Image,
    FlatList,
    TextInput,
    Dimensions,
    ScrollView,
    Modal,
    ActivityIndicator,
    BackHandler,
    Platform,
    StyleSheet,
} from 'react-native';`,
        `import {
    View,
    SafeAreaView,
    TouchableOpacity,
    Text,
    Image,
    // FlatList,
    TextInput,
    Dimensions,
    // ScrollView,
    Modal,
    ActivityIndicator,
    BackHandler,
    Platform,
    StyleSheet,
} from 'react-native';

import { ScrollView, FlatList } from 'react-native-gesture-handler';`
    );

    // Write the updated content back to Picker.js
    fs.writeFile(pickerFilePath, result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});


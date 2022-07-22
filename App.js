import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView 
      source={{ uri: 'https://kakomap.netlify.app/' }}
      style={{height: 100, padding: 50}}
    />
  );
}



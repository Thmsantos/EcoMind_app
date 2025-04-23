import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

interface Props {
  text: string;
  speed?: number; 
  style?: any;
  onFinish?: () => void; 
}

export default function TypeWriterText({ text, speed = 55, style, onFinish }: Props) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        if (onFinish) onFinish();
      }
    }, speed);
  
    return () => clearInterval(interval);
  }, [text, speed]);

  return <Text style={style}>{displayedText}</Text>;
}

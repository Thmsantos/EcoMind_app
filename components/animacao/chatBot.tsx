import React, { useEffect } from 'react';
import { Text } from 'react-native';

interface Props {
  text: string;
  speed?: number; 
  style?: any;
  onFinish?: () => void; 
}

export default function TypeWriterText({ text, speed = 1000, style, onFinish }: Props) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (onFinish) onFinish();
    }, speed); 
    return () => clearTimeout(timeout);
  }, [text, speed]);

  return <Text style={style}>{text}</Text>;
}

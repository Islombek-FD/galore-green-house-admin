import React from 'react';
import ImageBase from 'antd/lib/image';

interface IProps {
  url: string;
  width?: number;
  height?: number;
}

const Image: React.FC<IProps> = ({ url, width = 36, height = 36 }) => {
  if (!url) {
    return null;
  }

  return <ImageBase src={url} {...{ width, height }} />;
};

export default Image;

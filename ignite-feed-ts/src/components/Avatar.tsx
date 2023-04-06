import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProperties extends ImgHTMLAttributes<HTMLImageElement> {
  isBordered?: boolean
}

export function Avatar(properties: AvatarProperties) {
  return (
    <img 
      className={ properties.isBordered ? styles.borderedAvatar : styles.avatar } 
      {...properties}
    />
  )
}
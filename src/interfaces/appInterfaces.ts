import { Ionicons } from '@expo/vector-icons';

export interface MenuItemProps {
  title: string;
  screenName: string;
  icon: keyof typeof Ionicons.glyphMap
}

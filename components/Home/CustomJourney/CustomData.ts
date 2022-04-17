import { Icon } from 'tabler-icons-react';
import { LayoutBottombar, Sofa, Ruler, Pencil } from 'tabler-icons-react';

export interface CustomItem {
  title: string;
  description: string;
  icon: Icon;
}

export const CustomList: CustomItem[] = [
  {
    icon: LayoutBottombar,
    title: 'Swatches',
    description: 'Explore 125+ fabrics to choose 10 free swatches sent to you',
  },
  {
    icon: Sofa,
    title: 'Collections',
    description: 'Browse our 15+ collections to find the perfect piece',
  },
  {
    icon: Ruler,
    title: 'Customization',
    description: 'Choose length, depth, leg style, cushion fill, and more',
  },
  {
    icon: Pencil,
    title: 'Design services',
    description: 'Get free, one-on-one support from a Design Expert',
  },
];

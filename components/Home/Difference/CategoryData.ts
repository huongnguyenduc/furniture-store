import { LayoutBottombar, Sofa, Ruler, RadiusTopRight, Feather, Icon } from 'tabler-icons-react';

export interface CategoryItem {
  icon: Icon;
  title: string;
  leftImage: string;
  leftImageTitle: string;
  rightImage: string;
  rightImageTitle: string;
}

export const categoryData: CategoryItem[] = [
  {
    icon: Sofa,
    title: '15+ collections',
    leftImage:
      'https://media.interiordefine.com/media/wysiwyg/home_nov2021/difference/jpg/Collection-Winslow.jpg',
    leftImageTitle: 'Winslow Sofa in Performance Classic Weave Bisque',
    rightImage:
      'https://media.interiordefine.com/media/wysiwyg/home_nov2021/difference/jpg/Collection-Sloan.jpg',
    rightImageTitle: 'Sloan Sofa in Performance Vintage Velvet Ivy',
  },
  {
    icon: LayoutBottombar,
    title: '125+ fabrics',
    leftImage:
      'https://media.interiordefine.com/media/wysiwyg/home_nov2021/difference/jpg/Fabric-Performance-Velvet-Peacock.jpg',
    leftImageTitle: 'Performance Velvet Peacock',
    rightImage:
      'https://media.interiordefine.com/media/wysiwyg/home_nov2021/difference/jpg/Fabric-Performance-Pebble-Knit-Oat.jpg',
    rightImageTitle: 'Performance Pebble Knit Oat',
  },
  {
    icon: RadiusTopRight,
    title: '20+ legs',
    leftImage:
      'https://media.interiordefine.com/media/wysiwyg/home_nov2021/difference/jpg/Leg-Brass-Plated-Tapered-Round-Metal.jpg',
    leftImageTitle: 'Brass Plated Tapered Round Metal Leg',
    rightImage:
      'https://media.interiordefine.com/media/wysiwyg/home_nov2021/difference/jpg/Leg-Matte-Black-Tall-Curved-Wood-Leg.jpg',
    rightImageTitle: 'Matte Black Tall Curved Wood Leg',
  },
  {
    icon: Ruler,
    title: 'Lengths & depths',
    leftImage:
      'https://media.interiordefine.com/media/wysiwyg/home_nov2021/difference/jpg/Depth-36.jpg',
    leftImageTitle: 'Standard 36" depth',
    rightImage:
      'https://media.interiordefine.com/media/wysiwyg/home_nov2021/difference/jpg/Depth-40.jpg',
    rightImageTitle: 'Deep 40" depth',
  },
  {
    icon: Feather,
    title: 'Seats cushions',
    leftImage:
      'https://media.interiordefine.com/media/wysiwyg/home_nov2021/difference/jpg/Cushion-Standard.jpg',
    leftImageTitle: '2 cushions with standard down blend',
    rightImage:
      'https://media.interiordefine.com/media/wysiwyg/home_nov2021/difference/jpg/Cushion-Bench.jpg',
    rightImageTitle: 'Bench cushion with double down blend',
  },
];

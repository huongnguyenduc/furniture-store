export interface CategoryItem {
  image: string;
  label: string;
  categoryId?: number;
  items?: number[];
}

export const categoryData: CategoryItem[] = [
  {
    label: 'Sectionals',
    image: 'https://pngimg.com/uploads/sofa/sofa_PNG6950.png',
    categoryId: 2,
    items: [3, 4, 5],
  },
  {
    label: 'Sofas',
    image: 'https://pngimg.com/uploads/sofa/sofa_PNG6916.png',
    categoryId: 6,
    items: [7, 8, 9],
  },
  {
    label: 'Chairs',
    image: 'https://pngimg.com/uploads/armchair/armchair_PNG7011.png',
    categoryId: 15,
    items: [16],
  },

  {
    label: 'Ottomans',
    image: 'https://www.pngmart.com/files/7/Footstool-PNG-Transparent-Picture.png',
    categoryId: 10,
    items: [11, 12],
  },
  {
    label: 'Benches',
    image: 'https://www.pngmart.com/files/7/Piano-Bench-PNG-HD.png',
    categoryId: 13,
    items: [14],
  },
  {
    label: 'Tables',
    image: 'https://pngimg.com/uploads/table/table_PNG6983.png',
    categoryId: 22,
    items: [23, 24],
  },
  {
    image: 'https://pngimg.com/uploads/table/table_PNG6983.png',
    label: 'Dining',
  },
  {
    image:
      'https://purepng.com/public/uploads/large/purepng.com-tabletabledeskboardcook-tablefurniture-1701527999716nwefb.png',
    label: 'Office',
  },
  {
    image: 'https://pngimg.com/uploads/carpet/carpet_PNG57707.png',
    label: 'Rugs',
  },
  {
    image:
      'https://purepng.com/public/uploads/large/purepng.com-lauters-jara-floor-lampfurnitureobjectslightlampfloor-lamp-821523988281jxtdv.png',
    label: 'Lighting',
  },
  {
    image:
      'https://purepng.com/public/uploads/large/purepng.com-hanging-lightobjectslamplightdecorationluxuryobjecthomehousechandelier-631521883958q5w62.png',
    label: 'Decor',
  },
  {
    label: 'Pillows',
    image: 'https://www.pngmart.com/files/7/Pillow-PNG-Image.png',
  },
];

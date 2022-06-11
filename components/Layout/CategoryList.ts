export interface UnderSubCategoryItemProps {
  label: string;
  categoryId: number;
}
export interface SubCategoryItemProps {
  label: string;
  image: string;
  items: UnderSubCategoryItemProps[] | string[];
  categoryId?: number;
}
export interface CategoryItemProps {
  label: string;
  image: string;
  items: SubCategoryItemProps[];
}

export const categoryList: CategoryItemProps[] = [
  {
    image:
      'https://purepng.com/public/uploads/large/purepng.com-sofasofafurniturearmrestsentirely-upholsteredloungecouchbedsteaddivan-1701527998293fkic1.png',
    label: 'Living',
    items: [
      {
        label: 'Sectionals',
        image: 'https://pngimg.com/uploads/sofa/sofa_PNG6950.png',
        categoryId: 2,
        items: [
          { label: 'Chaise sectionals', categoryId: 3 },
          // 'Corner sectionals',
          // 'Bumper sectionals',
          { label: 'U-sectionals', categoryId: 4 },
          { label: 'Sleeper sectionals', categoryId: 5 },
          // 'Storage sectionals',
          // 'Modular sectionals',
        ],
      },
      {
        label: 'Sofas',
        image: 'https://pngimg.com/uploads/sofa/sofa_PNG6916.png',
        categoryId: 6,
        items: [
          { label: 'Loveseats', categoryId: 8 },
          { label: 'Sofas', categoryId: 7 },
          // 'Daybeds',
          { label: 'Sleeper sofas', categoryId: 9 },
          // 'Modular sofas',
          // 'All sofas',
        ],
      },
      {
        label: 'Chairs',
        categoryId: 15,
        image: 'https://pngimg.com/uploads/armchair/armchair_PNG7011.png',
        items: [
          { label: 'Accent chairs', categoryId: 16 },
          // 'Swivel chairs',
          // 'Chaise lounges',
          // 'All chairs',
        ],
      },
      // {
      //   label: 'Tables',
      //   image: 'https://pngimg.com/uploads/table/table_PNG6983.png',
      //   items: ['Coffee tables', 'Side tables', 'Media & console tables', 'All tables'],
      // },
      {
        label: 'Ottomans',
        image: 'https://www.pngmart.com/files/7/Footstool-PNG-Transparent-Picture.png',
        categoryId: 10,
        items: [
          { label: 'Accent ottomans', categoryId: 11 },
          // 'Storage ottomans',
          { label: 'Stool ottomans', categoryId: 12 },
          // 'All ottomans',
        ],
      },
      {
        label: 'Benches',
        image: 'https://www.pngmart.com/files/7/Piano-Bench-PNG-HD.png',
        categoryId: 13,
        items: [{ label: 'Accent Bench', categoryId: 14 }],
      },
    ],
  },

  {
    image: 'https://pngimg.com/uploads/table/table_PNG6983.png',
    label: 'Dining',
    items: [
      {
        label: 'Seating',
        image: 'https://www.pngmart.com/files/7/Barcelona-Chair-PNG-Free-Download.png',
        categoryId: 18,
        items: [
          { label: 'Dining Chairs', categoryId: 19 },
          { label: 'Counter stools', categoryId: 20 },
          { categoryId: 21, label: 'Dining Benches' },
        ],
      },
      {
        label: 'Tables',
        image: 'https://pngimg.com/uploads/table/table_PNG6983.png',
        categoryId: 22,
        items: [
          { label: 'Round tables', categoryId: 23 },
          { label: 'Rectangle tables', categoryId: 24 },
        ],
      },
      {
        label: 'Sideboards',
        image: 'https://www.pngmart.com/files/7/Cabinet-PNG-Transparent-Picture.png',
        categoryId: 25,
        items: [],
      },
    ],
  },
  {
    image:
      'https://purepng.com/public/uploads/large/purepng.com-tabletabledeskboardcook-tablefurniture-1701527999716nwefb.png',
    label: 'Office',
    items: [
      {
        label: 'Desks',
        image: 'https://www.pngmart.com/files/7/Desk-PNG-Background-Image.png',
        categoryId: 27,
        items: [],
      },
      {
        label: 'Chairs',
        image: 'https://www.pngmart.com/files/7/Scissors-Chair-PNG-Transparent-Image.png',
        categoryId: 28,
        items: [],
      },
      {
        label: 'All office',
        image:
          'https://purepng.com/public/uploads/large/purepng.com-tabletabledeskboardcook-tablefurniture-1701527999716nwefb.png',
        items: [],
      },
    ],
  },
  {
    image: 'https://pngimg.com/uploads/carpet/carpet_PNG57707.png',
    label: 'Rugs',
    items: [
      {
        label: 'Vintage-inspired',
        image: 'https://www.pngmart.com/files/7/Rug-PNG-HD.png',
        items: [],
      },
      {
        label: 'Geometric',
        image: 'https://www.pngmart.com/files/7/Rug-PNG-Transparent-Picture.png',
        items: [],
      },
      {
        label: 'Solid',
        image: 'https://www.pngmart.com/files/7/Rug-PNG-File.png',
        items: [],
      },
      {
        label: 'All rugs',
        image: 'https://www.pngmart.com/files/7/Rug-PNG-Image.png',
        items: [],
      },
    ],
  },
  {
    image:
      'https://purepng.com/public/uploads/large/purepng.com-lauters-jara-floor-lampfurnitureobjectslightlampfloor-lamp-821523988281jxtdv.png',
    label: 'Lighting',
    items: [
      {
        label: 'Table & desk lamps',
        image: 'https://www.pngmart.com/files/6/Fancy-Lamp-Transparent-Background.png',
        items: [],
      },
      {
        label: 'Floor lamps',
        image: 'https://www.pngmart.com/files/1/Lamp-Clip-Art-Free-PNG.png',
        items: [],
      },
      {
        label: 'Ceiling lights',
        image: 'https://www.pngmart.com/files/6/Fancy-Lamp-PNG-HD.png',
        items: [],
      },
      {
        label: 'Wall lights',
        image: 'https://www.pngmart.com/files/6/Fancy-Lamp-PNG-Clipart.png',
        items: [],
      },
      {
        label: 'All lighting',
        image:
          'https://purepng.com/public/uploads/large/purepng.com-lauters-jara-floor-lampfurnitureobjectslightlampfloor-lamp-821523988281jxtdv.png',
        items: [],
      },
    ],
  },
  {
    image:
      'https://purepng.com/public/uploads/large/purepng.com-hanging-lightobjectslamplightdecorationluxuryobjecthomehousechandelier-631521883958q5w62.png',
    label: 'Decor',
    items: [
      {
        label: 'Pillows',
        image: 'https://www.pngmart.com/files/7/Pillow-PNG-Image.png',
        items: [],
      },
      {
        label: 'Wall art',
        image:
          'https://media.interiordefine.com/media/catalog/product/cache/1/image/124x/040ec09b1e35df139433887a97daa66f/2/2/225368-003_prm_1.jpg',
        items: [],
      },
      {
        label: 'Mirrors',
        image: 'https://www.pngmart.com/files/4/Mirror-Transparent-Background.png',
        items: [],
      },
      {
        label: 'All decor',
        image:
          'https://purepng.com/public/uploads/large/purepng.com-hanging-lightobjectslamplightdecorationluxuryobjecthomehousechandelier-631521883958q5w62.png',
        items: [],
      },
    ],
  },
];

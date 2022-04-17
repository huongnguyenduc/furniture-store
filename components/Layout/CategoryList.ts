export interface SubCategoryItemProps {
  label: string;
  image: string;
  items: string[];
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
        items: [
          'Chaise sectionals',
          'Corner sectionals',
          'Bumper sectionals',
          'U-sectionals',
          'Sleeper sectionals',
          'Storage sectionals',
          'Modular sectionals',
          'All sectionals',
        ],
      },
      {
        label: 'Sofas',
        image: 'https://pngimg.com/uploads/sofa/sofa_PNG6916.png',
        items: ['Loveseats', 'Sofas', 'Daybeds', 'Sleeper sofas', 'Modular sofas', 'All sofas'],
      },
      {
        label: 'Chairs',
        image: 'https://pngimg.com/uploads/armchair/armchair_PNG7011.png',
        items: ['Accent chairs', 'Swivel chairs', 'Chaise lounges', 'All chairs'],
      },
      {
        label: 'Tables',
        image: 'https://pngimg.com/uploads/table/table_PNG6983.png',
        items: ['Coffee tables', 'Side tables', 'Media & console tables', 'All tables'],
      },
      {
        label: 'Ottomans',
        image: 'https://www.pngmart.com/files/7/Footstool-PNG-Transparent-Picture.png',
        items: ['Accent ottomans', 'Storage ottomans', 'Stools', 'All ottomans'],
      },
      {
        label: 'Benches',
        image: 'https://www.pngmart.com/files/7/Piano-Bench-PNG-HD.png',
        items: [],
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
        items: ['Chairs', 'Counter stools', 'Benches', 'All seating'],
      },
      {
        label: 'Tables',
        image: 'https://pngimg.com/uploads/table/table_PNG6983.png',
        items: ['Round tables', 'Rectangle tables', 'All tables'],
      },
      {
        label: 'Sideboards',
        image: 'https://www.pngmart.com/files/7/Cabinet-PNG-Transparent-Picture.png',
        items: [],
      },
      {
        label: 'All dining',
        image: '',
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
        items: [],
      },
      {
        label: 'Chairs',
        image: 'https://www.pngmart.com/files/7/Scissors-Chair-PNG-Transparent-Image.png',
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

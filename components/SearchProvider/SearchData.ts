import Router from 'next/router';

export const searchData = (query: string) => [
  {
    id: 'search-with-keyword',
    title: 'Enter to search ' + (query ? '"' + query + '"' : ''),
    onTrigger: () => {
      Router.push(`/search?q=${query}`);
    },
    keyword: query,
  },
  {
    title: 'Sectionals',
    image: 'https://pngimg.com/uploads/sofa/sofa_PNG6950.png',
    onTrigger: () => {},
  },
  {
    title: 'Sofas',
    image: 'https://pngimg.com/uploads/sofa/sofa_PNG6916.png',
    onTrigger: () => {},
  },
  {
    title: 'Chairs',
    image: 'https://pngimg.com/uploads/armchair/armchair_PNG7011.png',
    onTrigger: () => {},
  },

  {
    title: 'Ottomans',
    image: 'https://www.pngmart.com/files/7/Footstool-PNG-Transparent-Picture.png',
    onTrigger: () => {},
  },
  {
    title: 'Benches',
    image: 'https://www.pngmart.com/files/7/Piano-Bench-PNG-HD.png',
    onTrigger: () => {},
  },
  {
    title: 'Tables',
    image: 'https://pngimg.com/uploads/table/table_PNG6983.png',
    onTrigger: () => {},
  },
  {
    image: 'https://pngimg.com/uploads/table/table_PNG6983.png',
    onTrigger: () => {},
    title: 'Dining',
  },
  {
    image:
      'https://purepng.com/public/uploads/large/purepng.com-tabletabledeskboardcook-tablefurniture-1701527999716nwefb.png',
    onTrigger: () => {},
    title: 'Office',
  },
  {
    image: 'https://pngimg.com/uploads/carpet/carpet_PNG57707.png',
    onTrigger: () => {},
    title: 'Rugs',
  },
  {
    image:
      'https://purepng.com/public/uploads/large/purepng.com-lauters-jara-floor-lampfurnitureobjectslightlampfloor-lamp-821523988281jxtdv.png',
    onTrigger: () => {},
    title: 'Lighting',
  },
  {
    image:
      'https://purepng.com/public/uploads/large/purepng.com-hanging-lightobjectslamplightdecorationluxuryobjecthomehousechandelier-631521883958q5w62.png',
    onTrigger: () => {},
    title: 'Decor',
  },
  {
    title: 'Pillows',
    image: 'https://www.pngmart.com/files/7/Pillow-PNG-Image.png',
    onTrigger: () => {},
  },
];

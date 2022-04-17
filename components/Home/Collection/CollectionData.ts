export interface Collection {
  title: string;
  description: string;
  image: string;
}

export interface CollectionPage {
  title: string;
  items: Collection[];
}

export const seatingCollectionData: Collection[] = [
  {
    title: 'Sloan',
    description:
      'Crisp lines and subtle tapering create an approachable style that feels right in a variety of decors.',
    image: 'https://media.interiordefine.com/media/wysiwyg/home_nov2021/seating/Sloan.jpg',
  },
  {
    title: 'Winslow',
    description:
      'Subtle curves and soft corners make for an effortlessly cool and comfortable silhouette.',
    image: 'https://media.interiordefine.com/media/wysiwyg/home_nov2021/seating/Winslow.jpg',
  },
  {
    title: 'Tatum',
    description:
      'A versatile, modular design that’s customized to adapt to how you live—today and tomorrow.',
    image: 'https://media.interiordefine.com/media/wysiwyg/home_nov2021/seating/Tatum.jpg',
  },
  {
    title: 'Jasper',
    description:
      'An ultra-deep seat and a simple wood rail give this statement piece a hint of West Coast-cool',
    image: 'https://media.interiordefine.com/media/wysiwyg/home_nov2021/seating/Jasper.jpg',
  },
  {
    title: 'Ms. Chesterfield',
    description:
      'The Chesterfield’s signature tufting goes hand-in-hand with a lighter (and roomier) shape.',
    image: 'https://media.interiordefine.com/media/wysiwyg/home_nov2021/seating/Chesterfield.jpg',
  },
  {
    title: 'Maxwell',
    description:
      'Contoured arms and piping details make for a piece that’s both comfortable and approachable.',
    image: 'https://media.interiordefine.com/media/wysiwyg/home_nov2021/seating/Maxwell.jpg',
  },
];

export const newArrivalsData: Collection[] = [
  {
    title: 'Skylar',
    description: "A supremely comfortable collection that's equal parts relaxed and modern.",
    image: 'https://media.interiordefine.com/media/wysiwyg/new-arrivals/skylar-desk.jpg',
  },
  {
    title: 'Alexander',
    description: 'A traditionally-inspired silhouette that instantly feels timeless.',
    image: 'https://media.interiordefine.com/media/wysiwyg/new-arrivals/alexander-desk.jpg',
  },
  {
    title: 'Rugs',
    description:
      'Our curated collection of hand woven and hand knotted rugs are made to define your space, no matter the style.',
    image: 'https://media.interiordefine.com/media/wysiwyg/new-arrivals/rugs-desk-v2.jpg',
  },
  {
    title: 'Tables',
    description:
      'Versatile silhouettes rooted in timeless materials, brought to life with thoughtfully chosen details.',
    image: 'https://media.interiordefine.com/media/wysiwyg/new-arrivals/tables.jpg',
  },
  {
    title: 'Lighting',
    description: 'Brighten your one-of-a-kind space with our curated collection of lighting.',
    image: 'https://media.interiordefine.com/media/wysiwyg/new-arrivals/lighting-desk-v2.jpg',
  },
  {
    title: 'Wall Art',
    description: 'Dress up your walls and make your space pop with our curated art collection.',
    image: 'https://media.interiordefine.com/media/wysiwyg/new-arrivals/wall-art-desk-v2.jpg',
  },
  {
    title: 'Mirrors',
    description:
      'levate your living room, entryway, or everywhere in between with our curated collection of wall and floor mirrors.',
    image: 'https://media.interiordefine.com/media/wysiwyg/new-arrivals/mirrors-desk-v2.jpg',
  },
];

export const seatingCollection: CollectionPage = {
  title: 'Our seating collections',
  items: seatingCollectionData,
};

export const newArrivalsCollection: CollectionPage = {
  title: 'New arrivals',
  items: newArrivalsData,
};

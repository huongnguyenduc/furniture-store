export interface FilterItem {
  quantity: number;
  label: string;
  selected: boolean;
}

export const filterData: FilterItem[] = [
  {
    label: 'Sectionals',
    quantity: 1,
    selected: false,
  },
  {
    label: 'Sofas',
    quantity: 1,
    selected: true,
  },
  {
    label: 'Chairs',
    quantity: 1,
    selected: false,
  },

  {
    label: 'Ottomans',
    quantity: 1,
    selected: false,
  },
  {
    label: 'Benches',
    quantity: 1,
    selected: false,
  },
  {
    label: 'Tables',
    quantity: 1,
    selected: false,
  },
  {
    label: 'Dining',
    quantity: 1,
    selected: false,
  },
  {
    label: 'Office',
    quantity: 2,
    selected: false,
  },
  {
    label: 'Rugs',
    quantity: 2,
    selected: false,
  },
  {
    quantity: 2,
    label: 'Lighting',
    selected: false,
  },
  {
    quantity: 2,
    label: 'Decor',
    selected: false,
  },
  {
    label: 'Pillows',
    quantity: 2,
    selected: false,
  },
];

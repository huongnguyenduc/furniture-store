import { Box, Container, MultiSelect, Select, SelectItem, Text } from '@mantine/core';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { createStyles } from '@mantine/core';
import { SortDirection, SortValue } from '../../../pages/search';
import { ArrowNarrowUp } from 'tabler-icons-react';

interface BrandData {
  brandId: number;
  brandName: string;
  brandDesc: string;
}
interface BrandListResponse {
  content: BrandData[];
  error: string;
  status: number;
  timestamp: string;
}

const useStyles = createStyles((theme, _params) => ({
  sortContainer: {
    top: 150,
    zIndex: 3,
    position: 'sticky',
    backgroundColor: '#FBF9F7',
    borderBottomColor: '#DDD',
    borderBottom: '1px solid #DDD',
    padding: '15px 20px 5px',
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {},
  },
  sortContainerInner: {
    display: 'flex',
    justifyContent: 'space-between',
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {},
  },
}));

const SortList = ({
  selectedBrandId,
  setSelectedBrandId,
  setSortValue,
  sortDirection,
  setSortDirection,
}: {
  selectedBrandId: number[];
  setSelectedBrandId: React.Dispatch<React.SetStateAction<number[]>>;
  setSortValue: React.Dispatch<React.SetStateAction<SortValue>>;
  sortDirection: SortDirection;
  setSortDirection: React.Dispatch<React.SetStateAction<SortDirection>>;
}) => {
  const { classes } = useStyles();
  const { data: session } = useSession();
  const { data, error } = useSWR<BrandListResponse>(() => [
    `website/brands?onlyActive=true`,
    'GET',
    {},
    session?.accessToken,
  ]);

  const filterData: SelectItem[] = data
    ? data?.content.map((brand) => ({
        label: brand.brandName,
        value: brand.brandId.toString(),
      }))
    : [];

  const sortValue: SelectItem[] = [
    { label: 'Default', value: SortValue.ProductId },
    { label: 'Product Name', value: SortValue.ProductName },
    { label: 'Category', value: SortValue.Category },
    { label: 'Brand', value: SortValue.Brand },
  ];

  return (
    <Box
      py="sm"
      my="sm"
      className={classes.sortContainer}
      sx={{
        top: 150,
        zIndex: 3,
        position: 'sticky',
        backgroundColor: '#FBF9F7',
        borderBottomColor: '#DDD',
        borderBottom: '1px solid #DDD',
        padding: '15px 20px 5px',
      }}
    >
      <Container size="xl" className={classes.sortContainerInner}>
        <MultiSelect
          data={filterData}
          label="Filter"
          placeholder="Brand"
          clearButtonLabel="Clear selection"
          onChange={(selectedBrandIdList) => {
            setSelectedBrandId(selectedBrandIdList.map((brand) => parseInt(brand)));
          }}
          clearable
        />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            mr="md"
            onClick={() =>
              setSortDirection(
                sortDirection === SortDirection.Up ? SortDirection.Down : SortDirection.Up
              )
            }
          >
            <ArrowNarrowUp
              style={{
                transform:
                  sortDirection === SortDirection.Down ? 'rotate(0.5turn)' : 'rotate(0turn)',
                transition: 'all .3s ease-in',
                cursor: 'pointer',
              }}
              size={22}
              strokeWidth={1.5}
              color={'black'}
            />
          </Box>
          <Select
            data={sortValue}
            onChange={(selectedSortValue: SortValue) => setSortValue(selectedSortValue)}
            placeholder="Default"
            label="Sort by"
            styles={{ selected: { background: '#F2ECE5' } }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default SortList;

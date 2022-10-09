import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useRouter } from "next/router";

import { searchByAddressForSSR } from "~/api/rest/search/useSearchByAddressQuery";
import { SearchLayout } from "~/layouts/SearchLayout";
import { SearchNFTItem } from "~/model/SearchNFTItem";
import { SearchPage } from "~/modules/search/containers/SearchPage";

type Props = InferGetStaticPropsType<typeof getStaticProps>;
const ONE_HOUR = 60 * 60;

const SearchAddressPage: NextPage<Props> = ({ fallbackData }) => {
  const router = useRouter();
  const { address } = router.query;

  const search =
    Array.isArray(address) && typeof address[0] === "string"
      ? address[0]
      : undefined;

  return (
    <SearchLayout search={search}>
      <SearchPage fallbackData={fallbackData} search={search} />
    </SearchLayout>
  );
};

export default SearchAddressPage;

export const getStaticProps: GetStaticProps<
  {
    fallbackData: SearchNFTItem[];
  },
  { address: string[] }
> = async ({ params }) => {
  const fallbackData: SearchNFTItem[] = params?.address[0]?.trim()
    ? await searchByAddressForSSR(params.address[0].trim()).catch(() => [])
    : [];

  return {
    props: {
      fallbackData,
    },
    revalidate: ONE_HOUR,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

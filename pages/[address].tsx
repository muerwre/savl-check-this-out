import { InferGetServerSidePropsType, NextPage } from "next";
import { useRouter } from "next/router";

import { SearchLayout } from "~/layouts/SearchLayout";
import { SearchPage } from "~/modules/search/containers/SearchPage";

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const SearchAddressPage: NextPage<Props> = ({}, {}) => {
  const router = useRouter();
  const { address } = router.query;

  const search = typeof address === "string" ? address : undefined;

  return (
    <SearchLayout search={search}>
      <SearchPage />
    </SearchLayout>
  );
};

export default SearchAddressPage;

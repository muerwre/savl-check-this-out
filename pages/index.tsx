import { NextPage } from "next";

import { SearchLayout } from "~/layouts/SearchLayout";
import { SearchPage } from "~/modules/search/containers/SearchPage";

const Home: NextPage = () => (
  <SearchLayout>
    <SearchPage />
  </SearchLayout>
);

export default Home;

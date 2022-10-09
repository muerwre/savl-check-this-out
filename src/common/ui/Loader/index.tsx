import React, { FC } from "react";

import Image from "next/image";

import { useI18n } from "~/lib/i18n";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  const { t } = useI18n();

  return (
    <div>
      <Image
        width={119}
        height={60}
        src="/assets/svg/pacman.svg"
        alt={t("loading")}
      />
    </div>
  );
};

export { Loader };

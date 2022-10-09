This is test application for SAVL GmbH.

# Running

Check settings at `/.env` first, then run:

```shell
yarn
yarn dev
```

Then navigate to http://localhost:3000/.

# What's implemented

- [CSS variables](https://github.com/muerwre/savl-check-this-out/blob/main/styles/_palette.scss) 
for theming, so you can make light theme someday;
- [Basic SSR](https://github.com/muerwre/savl-check-this-out/blob/main/pages/%5B...address%5D.tsx)
with `blocking` fallback and 1h long cache;
- [Intersection Observer](https://github.com/muerwre/savl-check-this-out/blob/main/src/modules/search/containers/SearchItem/index.tsx)
for loading NFT data only if it's visible;

# What's not

Can't make your API work for `name` and `image` fetching 👹. Using NFT's `uri` field instead.

You can try it by yourself, click this link for [CyberHeroez #882](
  https://dev.solhall.io/v1/nft/solana/address/HHSZP9x5kxoEhtnQitM11Wq5bZ3LftvvEP9QBdDGMf2K?uri=https://arweave.net/ssjtSnxpN-XNILthVkXfxmYq1wciF3skeSPQndDvhZE&holderAddress=8PdqmeKdn3999sT3jkkx3JRquGqZAfr3m7F4G5NoWkuG
);

It returns empty response:
```json
{"data":{"blockchain":"solana","nfts":[]}}
```

Param values I specified:

```
address:       HHSZP9x5kxoEhtnQitM11Wq5bZ3LftvvEP9QBdDGMf2K
uri:           https://arweave.net/ssjtSnxpN-XNILthVkXfxmYq1wciF3skeSPQndDvhZE
holderAddress: 8PdqmeKdn3999sT3jkkx3JRquGqZAfr3m7F4G5NoWkuG
```

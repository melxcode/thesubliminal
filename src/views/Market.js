import React from "react";
import { NftCard } from "../components/nft";
import Page from "../components/Page";
import { Container, Grid } from "@material-ui/core";
import { HeaderDashboard } from "../components/nft";

const NFTS = [
  {
    favorite: false,
    likes: 0,
    image: "",
    title: "title",
    description: "descriptions",
    author: "",
    price: "",
  },
];

const MarketPlace = () => {
  return (
    <Page>
      <Container>
        <HeaderDashboard
          heading=""
          links={[
            { name: "Gallery" },
            { name: "Market", href: "" },
            { name: "NFT" },
          ]}
        />
        <Grid container spacing={3}>
          {NFTS.map((nft) => (
            <NftCard nft={nft} key={nft.id} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
};

export default MarketPlace;

import React from "react";
import { NftCard } from "../components/nft";
import Page from "../components/Page";
import { Container, Grid } from "@material-ui/core";
import { HeaderDashboard } from "../components/nft";

const NFTS = [
  {
    id: 1,
    isFavorite: false,
    likes: 1,
    image:
      "https://media.istockphoto.com/photos/pac-man-cookie-dessert-game-picture-id1221462278?s=612x612",
    title: "Pakman",
    description: "the race of the life",
    author: "mycryptoverse",
    price: "1.003",
  },
  {
    id: 1,
    isFavorite: true,
    likes: 3,
    image:
      "https://media.istockphoto.com/photos/pac-man-cookie-dessert-game-picture-id1221462278?s=612x612",
    title: "Pakman",
    description: "the race of the life",
    author: "mycryptoverse",
    price: "1.003",
  },
  {
    id: 1,
    isFavorite: false,
    likes: 1,
    image:
      "https://media.istockphoto.com/photos/pac-man-cookie-dessert-game-picture-id1221462278?s=612x612",
    title: "Pakman",
    description: "the race of the life",
    author: "mycryptoverse",
    price: "1.003",
  },
  {
    id: 1,
    isFavorite: false,
    likes: 1,
    image:
      "https://media.istockphoto.com/photos/pac-man-cookie-dessert-game-picture-id1221462278?s=612x612",
    title: "Pakman",
    description: "the race of the life",
    author: "mycryptoverse",
    price: "1.003",
  },
  {
    id: 1,
    isFavorite: false,
    likes: 1,
    image:
      "https://media.istockphoto.com/photos/pac-man-cookie-dessert-game-picture-id1221462278?s=612x612",
    title: "Pakman",
    description: "the race of the life",
    author: "mycryptoverse",
    price: "1.003",
  },
];

const MarketPlace = () => {
  return (
    <Page>
      <Container>
        <HeaderDashboard
          heading=""
          links={[{ name: "Gallery" }, { name: "Market" }, { name: "NFT" }]}
        />
        <Grid container spacing={3}>
          {NFTS.map((nft) => (
            <NftCard
              nft={nft}
              key={nft.id}
              sx={{ border: "1px solid grey", ml: 2, mt: 2 }}
            />
          ))}
        </Grid>
      </Container>
    </Page>
  );
};

export default MarketPlace;

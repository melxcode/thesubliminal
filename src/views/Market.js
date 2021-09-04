import React, { useEffect, useState } from "react";
import { NftCard } from "../components/nft";
import Page from "../components/Page";
import { Container, Grid } from "@material-ui/core";
import { HeaderDashboard } from "../components/nft";
import { getNfts } from "../api/nfts";

const MarketPlace = () => {
  const [NFTS, setNFTS] = useState([]);
  const [popUpExecuted, setPopUpExecuted] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      const items = await getNfts();
      setNFTS(items);
    };

    getItems();
  }, []);

  return (
    <Page>
      <Container>
        <HeaderDashboard
          heading=""
          links={[{ name: "Gallery" }, { name: "Market" }, { name: "NFT" }]}
        />
        <Grid container spacing={3}>
          {NFTS?.map((nft) => (
            <NftCard
              popUpExecuted={popUpExecuted}
              setPopUpExecuted={setPopUpExecuted}
              nft={nft}
              key={nft.id}
              sx={{ border: "1px solid #A4A4A4", ml: 2, mt: 2 }}
            />
          ))}
        </Grid>
      </Container>
    </Page>
  );
};

export default MarketPlace;

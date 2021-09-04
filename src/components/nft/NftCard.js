import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Box,
  Card,
  Tooltip,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { updateNftLikes } from "../../api/nfts";
// utils

const CardMediaStyle = styled("div")(({ theme }) => ({
  display: "flex",
  width: "250px",
  position: "relative",
  justifyContent: "center",
  paddingTop: "calc(100% * 9 / 17)",
  paddingRight: 8,
  paddingLeft: 8,
}));

const NftImage = styled("img")({
  marginTop: "-133px",
  height: "256px",
  width: 245,
  borderRadius: "20px",
});

const Header = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  paddingRight: "18px",
  alignItems: "center",
});

const Footer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
  marginTop: "5px",
});

const DetailsBox = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  alignItems: "flex-start",
  paddingLeft: 10,
  marginBottom: "10px",
  marginTop: "10px",
});

const NftCard = ({ nft, ...other }) => {
  const [currentNft, setCurrentNft] = useState({});
  useEffect(() => {
    setCurrentNft(nft);
  }, [nft]);

  return (
    <Card {...other}>
      <Header>
        <Box>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton
            onClick={async () => {
              const operation = currentNft.isFavorite ? "SUBSTRACT" : "ADD";
              const updatedNft = await updateNftLikes(operation, currentNft);
              setCurrentNft(updatedNft);
            }}
          >
            {currentNft.isFavorite ? (
              <FavoriteIcon style={{ marginRight: "5px" }} />
            ) : (
              <FavoriteBorderIcon style={{ marginRight: "5px" }} />
            )}
          </IconButton>
          {currentNft.likes}
        </Box>
      </Header>
      <CardMediaStyle>
        <NftImage alt="nft" src={currentNft.image} />
      </CardMediaStyle>

      <DetailsBox>
        <Typography variant="subtitle1" align="center">
          {currentNft.title}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{ color: "text.secondary" }}
        >
          {currentNft.description}
        </Typography>
        <Footer>
          <Box sx={{ display: "flex" }}>
            <Tooltip title="ETH" placement="top">
              <img
                style={{ marginRight: "5px" }}
                height="16"
                alt="ETH"
                src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
              />
            </Tooltip>
            <Typography sx={{ fontSize: 13, fontFamily: "revert" }}>
              {currentNft.price}
            </Typography>
          </Box>

          <Button color="primary" variant="contained" sx={{ mr: 1 }}>
            Buy Now
          </Button>
        </Footer>
      </DetailsBox>
    </Card>
  );
};

export default NftCard;

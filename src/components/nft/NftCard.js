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
  TextField,
  IconButton,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { updateNftLikes } from "../../api/nfts";
import { postMetric } from "../../api/metrics";
import Modal from "../Modal";
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

const ModalContent = ({ email, setEmail }) => {
  return (
    <Box>
      <Typography>Enter yourEmail</Typography>
      <TextField
        label="Email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </Box>
  );
};

const NftCard = ({ nft, popUpExecuted, setPopUpExecuted, ...other }) => {
  const [currentNft, setCurrentNft] = useState(nft);
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  const postLikeMetric = (type) => {
    const likeProductMetric = {
      email: email ? email : "No email",
      itemId: currentNft.id,
      entity: "NFT",
      date: new Date().toISOString(),
      type,
    };
    //post metric
    postMetric(likeProductMetric);
  };

  const handleModal = () => {
    postLikeMetric("LIKE");
    setOpenModal(false);
  };

  useEffect(() => {
    setCurrentNft(nft);
  }, [nft]);

  const handleLikes = async () => {
    const operation = currentNft.isFavorite ? "SUBSTRACT" : "ADD";
    const updatedNft = await updateNftLikes(operation, currentNft);
    setCurrentNft({ ...updatedNft, isFavorite: !currentNft.isFavorite });
    if (!popUpExecuted && operation === "ADD") {
      setOpenModal(true);
      setPopUpExecuted(true);
    } else if (popUpExecuted && operation === "ADD") {
      postLikeMetric("LIKE");
    }
  };

  return (
    <Card {...other}>
      <Header>
        <Box>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={handleLikes}>
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

          <Button
            color="primary"
            variant="contained"
            sx={{ mr: 1 }}
            onClick={() => {
              postLikeMetric("BUY");
            }}
          >
            Buy Now
          </Button>
        </Footer>
      </DetailsBox>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        onConfirm={handleModal}
        onClose={handleModal}
        content={<ModalContent email={email} setEmail={setEmail} />}
      />
    </Card>
  );
};

export default NftCard;

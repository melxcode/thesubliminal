import React from "react";
import { Icon } from "@iconify/react";
import twitterFill from "@iconify/icons-eva/twitter-fill";
import linkedinFill from "@iconify/icons-eva/linkedin-fill";
import facebookFill from "@iconify/icons-eva/facebook-fill";
import instagramFilled from "@iconify/icons-ant-design/instagram-filled";
// material
import { alpha, experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Box,
  Card,
  Grid,
  Avatar,
  Tooltip,
  Divider,
  Typography,
  IconButton,
} from "@material-ui/core";
// utils

const SOCIALS = [
  {
    name: "Facebook",
    icon: <Icon icon={facebookFill} width={20} height={20} color="#1877F2" />,
  },
  {
    name: "Instagram",
    icon: (
      <Icon icon={instagramFilled} width={20} height={20} color="#D7336D" />
    ),
  },
  {
    name: "Linkedin",
    icon: <Icon icon={linkedinFill} width={20} height={20} color="#006097" />,
  },
  {
    name: "Twitter",
    icon: <Icon icon={twitterFill} width={20} height={20} color="#1C9CEA" />,
  },
];
function SvgIconStyle({ src, color = "inherit", sx }) {
  return (
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        bgcolor: `${color}.main`,
        ...(color === "inherit" && { bgcolor: "currentColor" }),
        ...(color === "action" && { bgcolor: "action.active" }),
        ...(color === "disabled" && { bgcolor: "action.disabled" }),
        ...(color === "paper" && { bgcolor: "background.paper" }),
        ...sx,
      }}
    />
  );
}

const CardMediaStyle = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  justifyContent: "center",
  paddingTop: "calc(100% * 9 / 16)",
  "&:before": {
    top: 0,
    zIndex: 9,
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    backdropFilter: "blur(3px)",
    WebkitBackdropFilter: "blur(3px)", // Fix on Mobile
    borderTopLeftRadius: theme.shape.borderRadiusMd,
    borderTopRightRadius: theme.shape.borderRadiusMd,
    backgroundColor: alpha(theme.palette.primary.darker, 0.72),
  },
}));

const CoverImgStyle = styled("img")({
  top: 0,
  zIndex: 8,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

function InfoItem(number) {
  return (
    <Grid item xs={4} sx={{ textAlign: "center" }}>
      <Typography
        variant="caption"
        sx={{ mb: 0.5, color: "text.secondary", display: "block" }}
      >
        Follower
      </Typography>
      <Typography variant="subtitle1">{number}</Typography>
    </Grid>
  );
}

const NftCard = ({ nft, ...other }) => {
  const {
    title: name,
    cover,
    description: position,
    follower = 1,
    totalPost = 2,
    avatarUrl,
    following = 2,
  } = nft;
  return (
    <Card {...other}>
      <CardMediaStyle>
        <SvgIconStyle
          color="paper"
          src="/static/icons/shape-avatar.svg"
          sx={{
            width: 144,
            height: 62,
            zIndex: 10,
            bottom: -26,
            position: "absolute",
          }}
        />
        <Avatar
          alt={name}
          src={avatarUrl}
          sx={{
            width: 64,
            height: 64,
            zIndex: 11,
            position: "absolute",
            transform: "translateY(-50%)",
          }}
        />
        <CoverImgStyle alt="cover" src={cover} />
      </CardMediaStyle>

      <Typography variant="subtitle1" align="center" sx={{ mt: 6 }}>
        {name}
      </Typography>
      <Typography
        variant="body2"
        align="center"
        sx={{ color: "text.secondary" }}
      >
        {position}
      </Typography>

      <Box sx={{ textAlign: "center", mt: 2, mb: 2.5 }}>
        {SOCIALS.map((social) => (
          <Tooltip key={social.name} title={social.name}>
            <IconButton>{social.icon}</IconButton>
          </Tooltip>
        ))}
      </Box>

      <Divider />

      <Grid container sx={{ py: 3 }}>
        {InfoItem(follower)}
        {InfoItem(following)}
        {InfoItem(totalPost)}
      </Grid>
    </Card>
  );
};

export default NftCard;

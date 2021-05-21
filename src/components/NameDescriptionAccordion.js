import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  TextField,
  AccordionDetails,
  AccordionSummary,
  Typography,
  IconButton,
  Grid,
  Box,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import MailIcon from "@material-ui/icons/Mail";
import { green, red } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  heading: {
    color: "#5842f4",
    fontSize: "19px",
  },
  accordionDetails: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  descriptionHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  description: {
    maxWidth: "80% !important",
    marginTop: "20px",
    color: "#8e949e",
    overflow: "visible",
  },
}));

const NameDescriptionAccordion = ({ item, removeFunction }) => {
  const classes = useStyles();

  const parseDate = (unparsedDate) => {
    const date = new Date(unparsedDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}/${month}/${day}`;
  };

  return (
    <Accordion style={{ marginBottom: "20px" }} key={item.name}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{ height: "40px" }}
      >
        <Typography className={classes.heading}>
          {item.name} | {item.companyName} | {parseDate(item.date)}
        </Typography>
        {item.subscription && (
          <MailIcon
            style={{
              marginLeft: "20px",
              color: green[400],
            }}
          />
        )}
      </AccordionSummary>
      <AccordionDetails
        style={{
          backgroundColor: "#FAFAFA",
          borderTop: "2px solid #eaeaea",
        }}
      >
        <Box className={classes.accordionDetails}>
          <Box className={classes.descriptionHeader}>
            <Typography
              style={{
                color: "#344860",
                fontSize: "17px",
                marginTop: "15px",
              }}
            >
              Category : {item.category}
            </Typography>
            <IconButton>
              <DeleteIcon
                fontSize="large"
                style={{ color: red[400] }}
                onClick={() => {
                  removeFunction(item.key);
                }}
              />
            </IconButton>
          </Box>
          <Box className={classes.descriptionHeader}>
            <Typography
              style={{
                color: "#344860",
              }}
            >
              Email : {item.email}
            </Typography>
          </Box>

          <Typography className={classes.description} paragraph>
            {item.message}
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
export default NameDescriptionAccordion;

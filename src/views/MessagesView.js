import React, { useEffect, useState } from "react";
import { getRequests, deleteMessage } from "../api/contact";
import {
  Box,
  Grid,
  TextField,
  Autocomplete,
  Card,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { CATEGORIES } from "../constants/labels";
import NameDescriptionAccordion from "../components/NameDescriptionAccordion";
import CloseIcon from "@material-ui/icons/Close";

const SubscriptionItem = ({ subscriptor }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        borderTop: `1px solid #108F61`,
        mb: 1,
      }}
    >
      <Typography
        sx={{
          mt: 1,
          color: "#108F61",
          fontWeight: "bold",
        }}
      >
        {subscriptor.name} | {subscriptor.companyName}{" "}
      </Typography>
      <Typography>{subscriptor.email} </Typography>
    </Box>
  );
};

const TimeCard = ({ title, number }) => {
  return (
    <Card sx={{ width: "100%", ml: 2, mr: 2, borderRadius: "5px !important" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: "18px" }}>{title}</Typography>
        <Typography sx={{ fontSize: "18px", color: "#108F61" }}>
          {number}
        </Typography>
      </Box>
    </Card>
  );
};

const MessageView = () => {
  const [messages, setMessages] = useState([]);
  const [subscriptors, setSubscriptors] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageData, setMessageData] = useState({
    monthly: 0,
    today: 0,
  });
  const [update, setUpdate] = useState(false);

  const deleteItem = async (key) => {
    await deleteMessage(key);
    setUpdate(!update);
  };

  const isFromThisMonth = (date) => {
    const month = new Date(date).getMonth() + 1;
    const thisMonth = new Date().getMonth() + 1;
    const isFromThisMonth = month === thisMonth;
    return isFromThisMonth;
  };

  const isFromThisDay = (date) => {
    const day = new Date(date).getDate();
    const today = new Date().getDate();
    const isFromThisDay = day === today;
    return isFromThisDay;
  };

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      const messages = await getRequests();
      setMessages(messages);

      const subscriptions = messages.filter((item) => item.subscription);
      setSubscriptors(subscriptions);

      const monthlyMessages = messages.filter((item) =>
        isFromThisMonth(item.date)
      );
      const dailyMessages = messages.filter((item) => isFromThisDay(item.date));

      setMessageData({
        monthly: monthlyMessages.length,
        today: dailyMessages.length,
      });
      setLoading(false);
    };
    getMessages();
  }, [update]);
  return (
    <Grid sx={{ display: "flex" }}>
      {loading ? (
        <CircularProgress
          sx={{
            left: "60%",
            margin: "-25px 0 0 -25px",
            position: "absolute",
            top: "50vh",
          }}
        />
      ) : (
        <>
          <Grid xs={8}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 5 }}
            >
              <h1>Message List</h1>
              <Autocomplete
                sx={{ width: "40%" }}
                clearIcon={
                  <CloseIcon
                    onClick={() => {
                      setSelectedFilter(false);
                    }}
                  />
                }
                filterSelectedOptions
                getOptionLabel={(option) => option.name}
                renderOption={(props, option) => (
                  <li {...props}>
                    <span>{option.name}</span>
                  </li>
                )}
                options={CATEGORIES}
                onChange={(e, value, name, instance) => {
                  if (!instance) {
                    return;
                  }
                  setSelectedFilter(instance.option.name);
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Category" />
                )}
              />
            </Box>

            {messages
              .filter((item) =>
                selectedFilter ? item.category === selectedFilter : true
              )
              .map((item) => (
                <NameDescriptionAccordion
                  item={item}
                  removeFunction={deleteItem}
                />
              ))}
          </Grid>
          <Grid xs={4} sx={{ mt: 7, p: 5 }}>
            <Card>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "18px" }}> Subscriptors</Typography>
              </Box>
              <Box>
                {subscriptors.map((sub) => {
                  return <SubscriptionItem subscriptor={sub} />;
                })}
              </Box>
            </Card>
            <Box sx={{ display: "flex", mt: 5 }}>
              <TimeCard title=" Monthly" number={messageData.monthly} />
              <TimeCard title="Daily" number={messageData.today} />
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default MessageView;

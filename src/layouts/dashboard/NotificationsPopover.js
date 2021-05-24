import faker from "faker";
import PropTypes from "prop-types";
import { set, sub, formatDistanceToNow } from "date-fns";
import { noCase } from "change-case";
import { Icon } from "@iconify/react";

import { useRef, useState } from "react";
import bellFill from "@iconify/icons-eva/bell-fill";
import clockFill from "@iconify/icons-eva/clock-fill";
import { Link as RouterLink } from "react-router-dom";
import doneAllFill from "@iconify/icons-eva/done-all-fill";
// material
import {
  Box,
  List,
  Badge,
  Button,
  Avatar,
  Tooltip,
  Divider,
  ListItem,
  Typography,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
} from "@material-ui/core";
// utils
import { mockImgAvatar } from "../../utils/mockImages";
// components
import Scrollbar from "../../components/Scrollbar";
import MenuPopover from "../../components/MenuPopover";
import { MIconButton } from "../../components/@material-extend";

// ----------------------------------------------------------------------

const NOTIFICATIONS = [
  {
    id: faker.datatype.uuid(),
    title: "Welcome, you have a gift card,",
    description: "A pleasure to work together.",
    avatar: null,
    type: "order_placed",
    createdAt: set(new Date(), { hours: 11, minutes: 30 }),
    utl: "/contact",
    isUnRead: true,
  },
  {
    id: faker.datatype.uuid(),
    title: "Our professional team is ready to meet your brand.",
    description: "Experience and talent.",
    avatar: mockImgAvatar(2),
    type: "friend_interactive",
    createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
    utl: "/contact",
    isUnRead: true,
  },
  {
    id: faker.datatype.uuid(),
    title: "We will be happy to answer your questions, click here!",
    description: "",
    avatar: null,
    type: "chat_message",
    createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
    utl: "/contact",
    isUnRead: false,
  },
  {
    id: faker.datatype.uuid(),
    title:
      "I would like to recieve exclusively the news in our agency with our newsletter.",
    description: "",
    avatar: null,
    type: "mail",
    createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
    utl: "/contact",
    isUnRead: false,
  },
];

function renderContent(notification) {
  const title = (
    <Typography variant="subtitle2">
      {notification.title}
      <Typography
        component="span"
        variant="body2"
        sx={{ color: "text.secondary" }}
      >
        &nbsp; {noCase(notification.description)}
      </Typography>
    </Typography>
  );

  if (notification.type === "order_placed") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/static/icons/ic_notification_package.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "order_shipped") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/static/icons/ic_notification_shipping.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "mail") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/static/icons/ic_notification_mail.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "chat_message") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/static/icons/ic_notification_chat.svg"
        />
      ),
      title,
    };
  }
  return {
    avatar: <img alt={notification.title} src={notification.avatar} />,
    title,
  };
}

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired,
};

function NotificationItem({ notification }) {
  const { avatar } = renderContent(notification);
  const { title } = renderContent(notification);

  return (
    <ListItem
      button
      to="/contact"
      disableGutters
      key={notification.id}
      component={RouterLink}
      sx={{
        py: 1.5,
        px: 2.5,
        "&:not(:last-of-type)": { mb: "1px" },
        ...(notification.isUnRead && {
          bgcolor: "action.selected",
        }),
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: "background.neutral" }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: "flex",
              alignItems: "center",
              color: "text.disabled",
            }}
          >
            <Box
              component={Icon}
              icon={clockFill}
              sx={{ mr: 0.5, width: 16, height: 16 }}
            />
            Just Now{" "}
            {/* {formatDistanceToNow(new Date(notification.createdAt))} */}
          </Typography>
        }
      />
    </ListItem>
  );
}

export default function NotificationsPopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const totalUnRead = notifications.filter((item) => item.isUnRead === true)
    .length;

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
  };

  return (
    <>
      <MIconButton
        ref={anchorRef}
        onClick={() => setOpen(true)}
        color={open ? "primary" : "default"}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <Icon icon={bellFill} width={20} height={20} />
        </Badge>
      </MIconButton>

      <MenuPopover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={anchorRef.current}
        sx={{ width: 360 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Notifications</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              You have {totalUnRead} unread messages
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title=" Mark all as read">
              <MIconButton color="primary" onClick={handleMarkAllAsRead}>
                <Icon icon={doneAllFill} width={20} height={20} />
              </MIconButton>
            </Tooltip>
          )}
        </Box>

        <Divider />

        <Scrollbar sx={{ height: { xs: 340, sm: "auto" } }}>
          <List
            disablePadding
            subheader={
              <ListSubheader
                disableSticky
                sx={{ py: 1, px: 2.5, typography: "overline" }}
              >
                New
              </ListSubheader>
            }
          >
            {notifications.slice(0, 2).map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))}
          </List>

          <List
            disablePadding
            subheader={
              <ListSubheader
                disableSticky
                sx={{ py: 1, px: 2.5, typography: "overline" }}
              >
                Before that
              </ListSubheader>
            }
          >
            {notifications.slice(2, 5).map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))}
          </List>
        </Scrollbar>

        <Divider />

        <Box sx={{ p: 1 }}>
          <Button
            fullWidth
            disableRipple
            component={RouterLink}
            to="#"
            disabled
          >
            View All
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}

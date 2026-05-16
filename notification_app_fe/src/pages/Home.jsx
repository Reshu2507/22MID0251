import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

import NotiCard from "../components/NotiCard";

import { getNoti } from "../api/notificationApi";

import { sendLog } from "../utils/logger";

const Home = () => {
  const [notifications, setNotifications] =
    useState([]);

  const [selectedType, setSelectedType] =
    useState("All");

  const fetchData = async () => {
    try {
      sendLog(
        "info",
        "api",
        "Loading campus updates"
      );

      const data = await getNoti();

      const priority = {
        Placement: 3,
        Result: 2,
        Event: 1,
      };

      const sorted = data.sort((a, b) => {
        const priorityDiff =
          priority[b.Type] -
          priority[a.Type];

        if (priorityDiff !== 0) {
          return priorityDiff;
        }

        return (
          new Date(b.Timestamp) -
          new Date(a.Timestamp)
        );
      });

      setNotifications(sorted);

      sendLog(
        "info",
        "component",
        "Campus alerts displayed"
      );
    } catch (error) {
      sendLog(
        "error",
        "api",
        "Notification fetch failed"
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredNotifications =
    selectedType === "All"
      ? notifications
      : notifications.filter(
          (item) =>
            item.Type === selectedType
        );

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        Student Alert Center
      </Typography>

      <Select
        value={selectedType}
        onChange={(e) =>
          setSelectedType(e.target.value)
        }
        sx={{ marginBottom: 3 }}
      >
        <MenuItem value="All">
          All
        </MenuItem>

        <MenuItem value="Placement">
          Placement
        </MenuItem>

        <MenuItem value="Result">
          Result
        </MenuItem>

        <MenuItem value="Event">
          Event
        </MenuItem>
      </Select>

      {filteredNotifications.map(
        (item, index) => (
          <NotiCard
            key={index}
            item={item}
          />
        )
      )}
    </Container>
  );
};

export default Home;
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const NotiCard = ({ item }) => {
  return (
    <Card
      sx={{
        marginBottom: 2,
        borderTop: "5px solid #1976d2",
        backgroundColor: "#fafafa",
      }}
    >
      <CardContent>
        <Typography variant="h6">
          {item.Type}
        </Typography>

        <Typography>
          {item.Message}
        </Typography>

        <Typography
          variant="body2"
          sx={{ marginTop: 1 }}
        >
          {new Date(item.Timestamp).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NotiCard;
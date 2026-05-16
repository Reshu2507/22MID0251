import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyZXNobWEuYjIwMjJAdml0c3R1ZGVudC5hYy5pbiIsImV4cCI6MTc3ODkzMjkzMiwiaWF0IjoxNzc4OTMyMDMyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiY2E1ZGZmMmQtYTZlZC00NDVmLWFjODAtNmE4YTQ4MjkwYjRjIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicmVzaG1hIiwic3ViIjoiMWQ1ZmUzYjgtZTdhMy00YjU2LThhOWItMDhhN2E1MDRhN2Q3In0sImVtYWlsIjoicmVzaG1hLmIyMDIyQHZpdHN0dWRlbnQuYWMuaW4iLCJuYW1lIjoicmVzaG1hIiwicm9sbE5vIjoiMjJtaWQwMjUxIiwiYWNjZXNzQ29kZSI6IlNmRnVXZyIsImNsaWVudElEIjoiMWQ1ZmUzYjgtZTdhMy00YjU2LThhOWItMDhhN2E1MDRhN2Q3IiwiY2xpZW50U2VjcmV0IjoiTVZGdFVuZWJlUGt6ekRYVSJ9.gnW9B6MV8MW1xn_V4NVxdwvPZ35dVvalQrdJFUijXmE";

export const getNoti = async () => {
  const response = await axios.get(
    "/api/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );

  return response.data.notifications;
};
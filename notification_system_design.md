# Notification System Design

## Overview

The project is a frontend notification management application developed using React JS and Material UI. The application fetches campus notifications from the provided evaluation API and displays them in a responsive dashboard interface.

---

## Architecture

The application follows a component-based frontend architecture.

### Main Modules

- API Layer
  - Handles notification fetching using Axios

- Logging Middleware
  - Sends frontend logs to the evaluation logging API

- UI Components
  - Reusable notification card component

- Pages
  - Home page containing notification dashboard and filtering logic

---

## Tech Stack

- React JS
- Vite
- Material UI
- Axios
- JavaScript

---

## API Flow

1. User opens the application on localhost:3000

2. React application loads the Home component

3. Notification API is called using Axios with Bearer token authorization

4. Notifications are fetched from the evaluation server

5. Notifications are sorted and rendered using reusable card components

6. Logging middleware sends logs to the logging API during API operations

---

## Notification Sorting Logic

Notifications are prioritized based on notification type.

Priority Order:

1. Placement
2. Result
3. Event

If two notifications have the same priority, the latest notification based on timestamp is displayed first.

---

## Filtering Functionality

A dropdown filter is implemented to filter notifications by type.

Supported Filters:

- All
- Placement
- Result
- Event

Filtering is performed dynamically on the frontend using React state management.

---

## Logging Middleware

A reusable logging utility is implemented using Axios.

The middleware sends logs to the provided evaluation logging API with:
- stack
- level
- package
- message

This improves observability and debugging support.

---

## Responsive Design

Material UI components and flexible layouts are used to support responsive rendering across desktop and mobile devices.

---

## Future Improvements

- Pagination support
- Notification read/unread tracking
- Search functionality
- Dark mode support
- Real-time updates using WebSockets
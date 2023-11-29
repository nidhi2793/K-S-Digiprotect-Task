import CONSTANTS from "./constant";

const cellConfig = {
  5: {
    endIndex: 16,
    type: CONSTANTS.LADDER,
    title: "Access Control",
    detail: "Good Habit",
  },
  12: {
    endIndex: 30,
    type: CONSTANTS.LADDER,
    title: "Use VPN",
    detail: "Good Habit",
  },

  14: {
    endIndex: 8,
    type: CONSTANTS.SNAKE,
    title: "Phishing Attacks",
    detail: "Weak Point",
  },
  19: {
    endIndex: 22,
    type: CONSTANTS.LADDER,
    title: "Verify Links",
    detail: "Good Habit",
  },
  21: {
    endIndex: 41,
    type: CONSTANTS.LADDER,
    title: "Security Policy",
    detail: "Good Habit",
  },
  24: {
    endIndex: 18,
    type: CONSTANTS.SNAKE,
    title: "No Backups",
    detail: "Weak Point",
  },
  28: {
    endIndex: 34,
    type: CONSTANTS.LADDER,
    title: "Never Share Passwords",
    detail: "Good Habit",
  },
  44: {
    endIndex: 36,
    type: CONSTANTS.SNAKE,
    title: "Sharing Devices",
    detail: "Weak Point",
  },
  45: {
    endIndex: 55,
    type: CONSTANTS.LADDER,
    title: "Lock Your Devices",
    detail: "Good Habit",
  },

  59: {
    endIndex: 38,
    type: CONSTANTS.SNAKE,
    title: "Supply Chain Attack",
    detail: "Weak Point",
  },
  66: {
    endIndex: 84,
    type: CONSTANTS.LADDER,
    title: "Anti Virus",
    detail: "Good Habit",
  },
  69: {
    endIndex: 48,
    type: CONSTANTS.SNAKE,
    title: "Using Public Wi-Fi",
    detail: "Weak Point",
  },
  77: {
    endIndex: 88,
    type: CONSTANTS.LADDER,
    title: "Verify Links",
    detail: "Good Habit",
  },
  99: {
    endIndex: 48,
    type: CONSTANTS.SNAKE,
    title: "Human Error",
    detail: "Weak Point",
  },
};

export default cellConfig;

const API_TO_DOMAIN = {
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
  URGENT: "urgent",
};

const DOMAIN_TO_API = {
  high: "HIGH",
  medium: "MEDIUM",
  low: "LOW",
  urgent: "URGENT",
};

export function fromApiPriority(priority) {
  return API_TO_DOMAIN[priority];
}

export function toApiPriority(priority) {
  return DOMAIN_TO_API[priority];
}
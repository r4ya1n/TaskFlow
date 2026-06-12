const API_TO_DOMAIN = {
  TODO: "todo",
  IN_PROGRESS: "in_progress",
  REVIEW: "review",
  DONE: "done",
};

const DOMAIN_TO_API = {
  todo: "TODO",
  in_progress: "IN_PROGRESS",
  review: "REVIEW",
  done: "DONE",
};

export function fromApiStatus(status) {
  return API_TO_DOMAIN[status];
}

export function toApiStatus(status) {
  return DOMAIN_TO_API[status];
}
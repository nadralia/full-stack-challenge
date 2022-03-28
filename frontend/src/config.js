export const apiRoot =
  import.meta.env.VITE_API_ROOT || "http://localhost:3000/api";
export const ROUTE_HOME = "/";
export const ROUTE_MESSAGE_CREATE = "/message/send";
export const ROUTE_MESSAGE_PREFIX = "/messages";
export const ROUTE_MESSAGE_EDIT = "/messages/:messageId";

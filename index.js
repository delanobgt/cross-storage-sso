const { CrossStorageHub } = require("cross-storage");

CrossStorageHub.init([
  { origin: /\.depatu.com$/, allow: ["get", "set", "del", "clear"] },
]);

require("dotenv").config();
let socketConnection = require("./services/webSocketService");
function _subscribe(url) {
  socketConnection.init(url, { query: {} });
  socketConnection.getSocket().on("disconnect", (reason) => {
    console.log("Socket disconnected", reason);
  });
  socketConnection.getSocket().on("connect", () => {
    console.log("Socket connected to", url);
    socketConnection
      .getSocket()
      .emit("logger-subscription", { logKey: "Some key" });
    socketConnection.getSocket().on("logger-subscription-response", (_data) => {
      console.log("Subscription details", _data);
    });
    if (!socketConnection?.getSocket()?._callbacks["$" + "log-stream"])
      socketConnection.getSocket().on("log-stream", (_data) => {
        _data && console.log(..._data);
      });
  });
}
module.exports = _subscribe;

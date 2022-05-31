import WebSocket, { WebSocketServer } from "ws";

const perMessageDeflate = {
    zlibDeflateOptions: {
      // See zlib defaults.
      chunkSize: 1024,
      memLevel: 7,
      level: 3,
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024,
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.
    serverMaxWindowBits: 10, // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10, // Limits zlib concurrency for perf.
    threshold: 1024, // Size (in bytes) below which messages
    // should not be compressed if context takeover is disabled.
  };

class Netcode{
    wss: WebSocketServer;
    constructor(port: number = 8081){
        this.wss = new WebSocketServer({
            port,
            perMessageDeflate,
          });
          this.wss.on("connection", this.onConnection.bind(this));
          //this.wss.on("close", this.onClose.bind(this));
    }
    onConnection(ws, req) {
        const ip =
          (req.headers["x-forwarded-for"] as String)?.split(",")[0].trim() ??
          req.socket.remoteAddress;
        ws.on("message", (message: any) => {
          const parsedMessage = JSON.parse(message.toString());
        });
      }
}
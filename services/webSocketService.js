let openSocket = require('socket.io-client')
let socket = null
let socketConnection = {
    init: () => socket = openSocket(process.env.BASE_URL, { query: {} }),
    getSocket: () => {
        if (!socket) throw Error("Socket not initialized in client...")
        return socket
    }
}
module.exports = socketConnection
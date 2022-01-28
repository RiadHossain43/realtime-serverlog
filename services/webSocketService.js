let openSocket = require('socket.io-client')
let socket = null
let socketConnection = {
    init: (...args) => socket = openSocket(...args),
    getSocket: () => {
        if (!socket) throw Error("Socket not initialized in client...")
        return socket
    }
}
module.exports = socketConnection
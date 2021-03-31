import io from "socket.io-client";

const SOCKET_URL = "http://localhost:3001";

export const clientSocket = io(SOCKET_URL);
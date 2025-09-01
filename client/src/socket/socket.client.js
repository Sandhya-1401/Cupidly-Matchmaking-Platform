// import io from "socket.io-client";

// const SOCKET_URL = import.meta.env.MODE === "development" ? "http://localhost:4000" : "/"; //  frontend — React/Vite
// let socket = null;

// export const initializeSocket = (userId) => {
// 	if (socket) {
// 		socket.disconnect();
// 	}

// 	socket = io(SOCKET_URL, {
// 		auth: { userId },
// 	});
// };

// export const getSocket = () => {
// 	if (!socket) {
// 		throw new Error("Socket not initialized");
// 	}
// 	return socket;
// };

// export const disconnectSocket = () => {
// 	if (socket) {
// 		socket.disconnect();
// 		socket = null;
// 	}
// };



import io from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;
console.log("👉 Socket URL:", SOCKET_URL);

let socket = null;

export const initializeSocket = (userId) => {
  if (socket) {
    socket.disconnect();
  }

  socket = io(SOCKET_URL, {
    auth: { userId },
  });
};

export const getSocket = () => {
  if (!socket) {
    throw new Error("Socket not initialized");
  }
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

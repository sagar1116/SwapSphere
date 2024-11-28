let ws;

export const connectWebSocket = (url, onMessage, onError, onClose) => {
  ws = new WebSocket(url);

  ws.onopen = () => {
    console.log("WebSocket connected:", url);
  };

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onMessage(data);
  };

  ws.onerror = (error) => {
    console.error("WebSocket error:", error);
    if (onError) onError(error);
  };

  ws.onclose = () => {
    console.log("WebSocket closed:", url);
    if (onClose) onClose();
  };

  return ws;
};

export const closeWebSocket = () => {
  if (ws) {
    ws.close();
  }
};

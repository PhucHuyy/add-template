import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { useEffect } from 'react';

const useNotificationSocket = (userId: string) => {
  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/ws');
    const stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        stompClient.subscribe(`/user/${userId}/queue/notifications`, (message) => {
          const notification = JSON.parse(message.body);
          console.log("📢 New Notification:", notification);
          // Gọi Redux dispatch hoặc toast tại đây
        });
      },
    });

    stompClient.activate();

    return () => {
      stompClient.deactivate();
    };
  }, [userId]);
};

export default useNotificationSocket;

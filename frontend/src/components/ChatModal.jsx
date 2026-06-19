import { useState, useEffect, useRef } from "react";
import "./ChatModal.css";
import { getMessages, sendMessage } from "../services/apiService";

const ChatModal = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);
  const currentUser = `User${Math.floor(Math.random() * 1000)}`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return "now";
    const now = new Date();
    const messageTime = timestamp.toDate
      ? timestamp.toDate()
      : new Date(timestamp);
    const diffInMinutes = Math.floor((now - messageTime) / (1000 * 60));

    if (diffInMinutes < 1) return "now";
    if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
    return messageTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const fetchedMessages = await getMessages();
      setMessages(
        fetchedMessages.map((m) => ({
          id: m._id,
          user: m.sender,
          message: m.text,
          createdAt: new Date(m.createdAt),
          isSupport: m.sender === "SupportBot",
        }))
      );
    } catch (error) {
      console.error("Error fetching messages:", error);
      setMessages([
        {
          id: "sample1",
          user: "SupportBot",
          message: "Welcome to our support chat! How can we help you today?",
          createdAt: new Date(Date.now() - 5 * 60 * 1000),
          isSupport: true,
        },
        {
          id: "sample2",
          user: "User123",
          message: "Hi, I've been feeling overwhelmed lately.",
          createdAt: new Date(Date.now() - 3 * 60 * 1000),
          isSupport: false,
        },
        {
          id: "sample3",
          user: "Peer456",
          message: "I understand that feeling. You're not alone in this.",
          createdAt: new Date(Date.now() - 1 * 60 * 1000),
          isSupport: false,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || sending) return;

    setSending(true);
    const messageText = newMessage.trim();
    setNewMessage("");

    try {
      const sent = await sendMessage(messageText, currentUser);
      setMessages((prev) => [
        ...prev,
        {
          id: sent._id,
          user: sent.sender,
          message: sent.text,
          createdAt: new Date(sent.createdAt),
          isSupport: false,
        },
      ]);

      // Simulate a support response after a delay
      setTimeout(() => {
        const supportResponse = {
          id: `support_${Date.now()}`,
          user: "SupportBot",
          message: getSupportResponse(messageText),
          createdAt: new Date(),
          isSupport: true,
        };
        setMessages((prev) => [...prev, supportResponse]);
      }, 2000);
    } catch (error) {
      console.error("Error sending message:", error);
      const localMessage = {
        id: `local_${Date.now()}`,
        user: currentUser,
        message: messageText,
        createdAt: new Date(),
        isSupport: false,
      };
      setMessages((prev) => [...prev, localMessage]);
    } finally {
      setSending(false);
    }
  };

  const getSupportResponse = (message) => {
    const responses = [
      "Thank you for sharing. Your feelings are valid and important.",
      "I hear you. It takes courage to reach out for support.",
      "You're taking a positive step by talking about this.",
      "Remember, it's okay to not be okay sometimes. We're here for you.",
      "That sounds challenging. How are you taking care of yourself?",
      "Your mental health matters. Have you considered speaking with a counselor?",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal chat-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="chat-header">
          <h2>Chat</h2>
          <button className="more-options">⋯</button>
        </div>

        <div className="chat-messages">
          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading chat...</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={`message ${msg.isSupport ? "support" : "user"} ${
                  msg.user === currentUser ? "own-message" : ""
                }`}
              >
                <div className="message-header">
                  <span className="message-user">
                    {msg.isSupport
                      ? "🤖"
                      : msg.user === currentUser
                      ? "😊"
                      : "👤"}{" "}
                    {msg.user === currentUser ? "You" : msg.user}
                  </span>
                  <span className="message-time">
                    {formatTime(msg.createdAt)}
                  </span>
                </div>
                <div className="message-content">{msg.message}</div>
                {msg.user !== currentUser && (
                  <div className="message-actions">
                    <button className="action-btn">💜 Support</button>
                    <button className="action-btn">💬 Reply</button>
                  </div>
                )}
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="chat-input-form">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="chat-input"
            disabled={sending}
            maxLength={500}
          />
          <button
            type="submit"
            className="send-btn"
            disabled={!newMessage.trim() || sending}
          >
            {sending ? <span className="spinner"></span> : "📤"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatModal;

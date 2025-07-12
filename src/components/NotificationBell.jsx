// src/components/NotificationBell.jsx
import React, { useState, useEffect, useRef } from 'react';
import './NotificationBell.css';
import { FaBell } from 'react-icons/fa';
import "./NotificationBell.css"

const sampleNotifications = [
  { id: 1, message: "👤 Alice answered your question", read: false },
  { id: 2, message: "💬 Bob commented on your answer", read: false },
  { id: 3, message: "📣 You were mentioned by @charlie", read: false },
];

function NotificationBell() {
  const [notifications, setNotifications] = useState(sampleNotifications);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const unreadCount = notifications.filter((n) => !n.read).length;

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="notification-bell" ref={dropdownRef}>
      <div className="bell-icon" onClick={toggleDropdown}>
        <FaBell />
        {unreadCount > 0 && <span className="unread-count">{unreadCount}</span>}
      </div>

      {dropdownOpen && (
        <div className="notification-dropdown">
          <div className="dropdown-header">
            <span>Notifications</span>
            <button onClick={markAllAsRead}>Mark all as read</button>
          </div>
          <ul>
            {notifications.length === 0 ? (
              <li className="empty">No notifications</li>
            ) : (
              notifications.map((note) => (
                <li
                  key={note.id}
                  className={note.read ? 'notification read' : 'notification unread'}
                >
                  {note.message}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NotificationBell;

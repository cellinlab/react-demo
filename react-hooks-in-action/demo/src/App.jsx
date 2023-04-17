import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from "react-router-dom";
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import BookablesPage from "./components/Bookables/BookablesPage";
import BookingsPage from "./components/Bookings/BookingsPage";
import UsersPage from "./components/Users/UsersPage";
import UserPicker from "./components/Users/UserPicker";

import { UserProvider } from "./components/Users/UserContext";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Router>
          <div className="App">
            <header>
              <nav>
                <ul>
                  <li>
                    <NavLink to="/bookings" className="btn btn-header">
                      <FaCalendarAlt />
                      <span>Bookings</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bookables" className="btn btn-header">
                      <FaDoorOpen />
                      <span>Bookables</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/users" className="btn btn-header">
                      <FaUsers />
                      <span>Users</span>
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <UserPicker />
            </header>
          </div>
          <Routes>
            <Route path="/" element={<Navigate to="/bookings" />} />
            <Route path="/bookings" element={<BookingsPage />} />
            <Route path="/bookables/*" element={<BookablesPage />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </Router>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;

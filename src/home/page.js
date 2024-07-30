import React, { useState } from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import TODOHero from "../components/TODOHero";
import TODOList from "../components/TODOList";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box"; // Import Box for spacing

function Home() {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: darkMode,
    },
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="wrapper">
        <Header />
        <Box mb={2}> {/* Add margin-bottom to the Box component */}
          <Button onClick={toggleDarkMode} variant="contained">
            {darkMode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </Button>
        </Box>
        <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
        <Form todos={todos} setTodos={setTodos} />
        <TODOList todos={todos} setTodos={setTodos} />
      </div>
    </ThemeProvider>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";

import Form from "../components/Form";
import Header from "../components/Header";
import TODOHero from "../components/TODOHero";
import TODOList from "../components/TODOList";

function Home() {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;

  const handleThemeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="wrapper">
        <Header />
        <Button 
          variant="contained" 
          onClick={handleThemeToggle} 
          style={{ margin: "20px" }}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </Button>
        <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
        <Form todos={todos} setTodos={setTodos} />
        <TODOList todos={todos} setTodos={setTodos} />
      </div>
    </ThemeProvider>
  );
}

export default Home;

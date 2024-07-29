
import React from "react";

import Form from "../components/Form";
import Header from "../components/Header";
import TODOHero from "../components/TODOHero";
import TODOList from "../components/TODOList";

import { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";





function Home() {
  const [todos, setTodos] = React.useState([]);
  const [darkMode, setDarkMode] = useState("light");
   const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  

  const todos_completed = todos.filter(
    (todo) => todo.is_completed == true
  ).length;
  const total_todos = todos.length;
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form todos={todos} setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
    </ThemeProvider>
  );
}

export default Home;

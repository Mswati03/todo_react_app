function TODOHero({ todos_completed, total_todos }) {
  return (
    <section className="todohero_section">
      <div>
        <p className="text_large">{todos_completed ? "Task Done" :"Start"}</p>
        <p className="text_small">{todos_completed ? "Keep it up" :"Enter Task"}</p>
      </div>
      <div>
        {todos_completed}/{total_todos}
      </div>
    </section>
  );
}

export default TODOHero;

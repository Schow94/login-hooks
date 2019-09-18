import React from 'react';

export default function TodoApp() {
  return (
    <div style={styles.container}>
      <form>
        <input
          style={styles.input}
          type="text"
          placeholder="Add a new Todo Item"
        />
        <button>Add Todo</button>
      </form>
      <ul style={styles.items}>
        <li>Eat Dinner</li>
        <li>Workout</li>
        <li>Study</li>
        <li>Code for a bit</li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1em'
  },
  input: {
    width: '200px',
    height: '30px'
  },
  items: {
    fontSize: '2em'
  }
};

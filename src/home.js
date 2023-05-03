import React from 'react';

const Home = () => {
    return (
        <div>
                  
        <div  style={{fontWeight:"bold"}}>Introduction</div>
        <section className="text-secondary"> A to-do list is a simple application
        that allows users to create a list of tasks that they need
        to complete. The app allows users to add new tasks, mark
        tasks as complete, and remove tasks from the list.</section>
        <div  style={{fontWeight:"bold"}}>Features</div>
        <ul className="text-secondary">
          <li> Add a new task to the list</li>
          <li> Mark a task as complete</li>
          <li>Remove a task from the list </li>
          <li>
            View a list of all tasks, including their completion
            status
          </li>
        </ul>
        <div  style={{fontWeight:"bold"}}>Technical Details</div>
        <section className="text-secondary">The to-do list app is built using HTML, CSS, and Reactjs.
        It stores the list of tasks in the browser's local storage,
        so the tasks will be available even if the user closes the
        browser or turns off their device.</section>
      
      <div style={{fontWeight:"bold"}} >
      Conclusion</div>
      <section className="text-secondary">The to-do list app is a simple and effective tool for managing tasks and staying organized. Try it out today and see how it can help you get more done!</section>
    </div>
    );
}

export default Home;

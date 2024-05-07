/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  return (
    <div className="App text-center">
     <Counter/>
     <LoadComments/>
    </div>
  );
}

function LoadComments(){
  const [comments, setComments] = useState([]);

  useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => setComments(data))
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold">{comments.length}</h2>
      {comments.map((comment) => (
        <div className="border border-red-500 mb-2">
          <Comment key={comment.id} email={comment.email} body={comment.body} />
        </div>
      ))}
    </div>
  );
}

function Comment(props){
  return (
    <div>
      <h4>Email: {props.email}</h4>
      <p>Comment: {props.body}</p>
    </div>
  )
}

function Counter() {

  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1 className="text-xl">Counter: {count}</h1>
      <div className="mt-5 flex justify-center gap-3">
        <button
          onClick={handleIncrease}
          className="bg-slate-900 text-white px-3 py-1 cursor-pointer"
        >
          Increase
        </button>
        <button
        onClick={handleDecrease}
         className="bg-slate-900 text-white px-3 py-1 cursor-pointer">
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App;

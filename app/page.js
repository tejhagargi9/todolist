"use client";
import React, { useState } from "react";
import { render } from "react-dom";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    var copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  let renderTask = <h2>No tasks Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="items-center flex justify-between">
          <div className="flex justify-between p-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h5 className="text-xl">{t.desc}</h5>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className=" text-xl mr-3 bg-red-600 rounded text-white px-4 py-2"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="text-black text-center text-3xl py-2">My TodoList</h1>

      <form onSubmit={submitHandler}>
        <input
          className="rounded textInput p-2"
          type="text"
          placeholder="Enter the task..."
          value={title}
          onChange={(e) => {
            settitle(e.target.value); 
          }}
        />

        <input
          type="text"
          placeholder="Enter description here..."
          className=" textInput rounded border-2 border-zinc-950 p-2 mx"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button className="bg-black text-white px-4 py-2 font-bold rounded text-1xl mx-5 my-2">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-3">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;

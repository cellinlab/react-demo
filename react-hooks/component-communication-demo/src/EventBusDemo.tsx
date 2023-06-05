import React, { useState } from "react";

class EventBus {
  events: Record<string, Function[]> = {};

  on(eventName: string, callback: Function) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }

  emit(eventName: string, data: any) {
    const event = this.events[eventName];
    if (event) {
      event.forEach((callback) => {
        callback(data);
      });
    }
  }
}

const eventBus = new EventBus();

const FirstChild = () => {
  const [msg, setMsg] = useState("");
  const [from, setFrom] = useState("");
  const [time, setTime] = useState("");

  eventBus.on("toFirstChild", (data: any) => {
    setMsg(data.msg);
    setFrom(data.from);
    setTime(data.time);
  });

  return (
    <div>
      <h2>FirstChild</h2>
      <div>
        {msg && (
          <div>
            msg from {from}-{time}: {msg}
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            eventBus.emit("toParent", {
              msg: "Hello from FirstChild",
              from: "FirstChild",
              time: new Date().toTimeString(),
            });
          }}
        >
          send msg to parent
        </button>
        <br />
        <button
          onClick={() => {
            eventBus.emit("toSecondChild", {
              msg: "Hello from FirstChild",
              from: "FirstChild",
              time: new Date().toTimeString(),
            });
          }}
        >
          send msg to SecondChild
        </button>
      </div>
    </div>
  );
};

const SecondChild = () => {
  const [msg, setMsg] = useState("");
  const [from, setFrom] = useState("");
  const [time, setTime] = useState("");

  eventBus.on("toSecondChild", (data: any) => {
    setMsg(data.msg);
    setFrom(data.from);
    setTime(data.time);
  });

  return (
    <div>
      <h2>SecondChild</h2>
      <div>
        {msg && (
          <div>
            msg from {from}-{time}: {msg}
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            eventBus.emit("toParent", {
              msg: "Hello from SecondChild",
              from: "SecondChild",
              time: new Date().toTimeString(),
            });
          }}
        >
          send msg to parent
        </button>
        <br />
        <button
          onClick={() => {
            eventBus.emit("toFirstChild", {
              msg: "Hello from SecondChild",
              from: "SecondChild",
              time: new Date().toTimeString(),
            });
          }}
        >
          send msg to FirstChild
        </button>
      </div>
    </div>
  );
};

const Parent = () => {
  const [msg, setMsg] = useState("");
  const [from, setFrom] = useState("");
  const [time, setTime] = useState("");

  eventBus.on("toParent", (data: any) => {
    setMsg(data.msg);
    setFrom(data.from);
    setTime(data.time);
  });
  return (
    <div>
      <h2>Parent</h2>
      <div>
        {msg && (
          <div>
            msg from {from}-{time}: {msg}
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => {
            eventBus.emit("toFirstChild", {
              msg: "Hello from Parent",
              from: "Parent",
              time: new Date().toTimeString(),
            });
          }}
        >
          send msg to FirstChild
        </button>
        <br />
        <button
          onClick={() => {
            eventBus.emit("toSecondChild", {
              msg: "Hello from Parent",
              from: "Parent",
              time: new Date().toTimeString(),
            });
          }}
        >
          send msg to SecondChild
        </button>
      </div>
      <hr />
      <FirstChild />
      <SecondChild />
    </div>
  );
};

const EventBusDemo = () => {
  return (
    <div>
      <h2>EventBusDemo</h2>
      <Parent />
    </div>
  );
};

export default EventBusDemo;

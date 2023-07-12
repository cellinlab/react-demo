import React from "react";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

class Timer {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }

  resetTimer() {
    this.secondsPassed = 0;
  }
}

const myTimer = new Timer();

const TimerView = observer(({ timer }) => {
  return (
    <div>
      <h1>Quick Example</h1>
      <h2>Seconds passed: {timer.secondsPassed}</h2>
      <button onClick={() => timer.increaseTimer()}>Increase Timer</button>
      <button onClick={() => timer.resetTimer()}>Reset Timer</button>
    </div>
  );
});

const Quick = () => {
  return <TimerView timer={myTimer} />;
};

export default Quick;

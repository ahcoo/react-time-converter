import React, { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [active, setActive] = useState(true);

  //onChange=(event)의 event자리는 변수임(변경 가능).
  const onChange = (event) => {
    //setMinutes자리에 console.log(event);로 실행하면 웹 F12 → target의 값이 입력값에 따라 변경 됨.
    setAmount(event.target.value);
  };

  const reset = () => {
    setAmount(0);
  };

  const changeActive = () => {
    reset();
    setActive((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      <div>Time Converter</div>
      <div>
        amount{" "}
        <input
          placeholder="amount"
          value={active ? amount : amount * 60}
          type="number"
          /*
          //setMinutes와 같은 것이 500개 넘어가면 매번 설정해야하니 깔끔하게 정리하기 위해 위에서 const로 정의함.
          onChange={(event) => {
            setMinutes(event.target.value);
          }*/
          onChange={onChange}
          disabled={!active} // 같음 → active !== true }
        />
        <div>
          Hours{" "}
          <input
            type="number"
            placeholder="Hours"
            //Math.floor 나눈 값 버림 함수
            value={active ? Math.floor(amount / 60) : amount}
            //disabled = 비활성화되어 건드릴 수 없게 되지만 값은 자동으로 입력됨
            disabled={active} //active === true}
            onChange={onChange}
          />
        </div>
        <button onClick={reset}>reset</button>
        <button onClick={changeActive}>Active toggle</button>
      </div>
    </div>
  );
}

export default App;

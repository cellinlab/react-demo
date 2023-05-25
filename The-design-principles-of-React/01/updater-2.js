const effectStack = [];

function subscribe(subs, effect) {
  subs.add(effect);
  effect.deps.add(subs);
}

function cleanup(effect) {
  // 从该 effct 订阅的所有 state 对应的 subs 中删除该 effect
  for (const subs of effect.deps) {
    subs.delete(effect);
  }
  // 将该 effect 依赖的所有 state 对应的 subs 清空
  effect.deps.clear();
}

function useState(value) {
  const subs = new Set();

  const getter = () => {
    const effect = effectStack[effectStack.length - 1];
    if (effect) {
      subscribe(subs, effect);
    }
    return value;
  };
  const setter = (newValue) => {
    value = newValue;
    for (const effect of [...subs]) {
      effect.excute();
    }
  };

  return [getter, setter];
}

function useEffect(callback) {
  const excute = () => {
    cleanup(effect);
    effectStack.push(effect);
    try {
      callback();
    } catch (error) {
      console.log(error);
    } finally {
      effectStack.pop();
    }
  };
  const effect = {
    excute,
    deps: new Set(),
  };
  excute();
}

function useMemo(callback) {
  const [s, set] = useState();

  useEffect(() => {
    set(callback());
  });

  return s;
}

const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`count: ${count()}`);
});

useEffect(() => {
  console.log('no dependency');
});

setCount(1);
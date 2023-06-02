import useQueryParam from "./useQueryParam";

interface Pizza {
  toppings: string[];
  crust: string;
  extraSauce: boolean;
}

const Home = () => {
  let [pizza, setPizza] = useQueryParam<Pizza>("pizza");

  if (!pizza) {
    pizza = {
      toppings: [],
      crust: "regular",
      extraSauce: false,
    };
  }

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const formData = new FormData(form);

    const newPizza: Pizza = {
      toppings: formData.getAll("toppings") as string[],
      crust: formData.get("crust") as string,
      extraSauce: formData.get("extraSauce") === "on",
    };

    setPizza(newPizza, {
      replace: true,
    });
  };
  return (
    <div>
      <form onChange={handleChange}>
        <p>What would you like on your pizza?</p>

        <p>
          <label>
            <input
              defaultChecked={pizza.toppings.includes("pepperoni")}
              type="checkbox"
              name="toppings"
              value="pepperoni"
            />{" "}
            Pepperoni
          </label>
          <br />
          <label>
            <input
              defaultChecked={pizza.toppings.includes("bell-peppers")}
              type="checkbox"
              name="toppings"
              value="bell-peppers"
            />{" "}
            Bell Peppers
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="toppings"
              value="olives"
              defaultChecked={pizza.toppings.includes("olives")}
            />{" "}
            Olives
          </label>
        </p>

        <p>
          <label>
            <input
              type="radio"
              name="crust"
              value="regular"
              defaultChecked={pizza.crust === "regular"}
            />{" "}
            Regular Crust
          </label>
          <br />
          <label>
            <input type="radio" name="crust" value="thin" defaultChecked={pizza.crust === "thin"} />{" "}
            Thin Crust
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="crust"
              value="deep-dish"
              defaultChecked={pizza.crust === "deep-dish"}
            />{" "}
            Deep Dish
          </label>
        </p>

        <p>
          <label>
            <input type="checkbox" name="extraSauce" defaultChecked={pizza.extraSauce} /> Extra
            Sauce
          </label>
        </p>
      </form>

      <hr />

      <p>The current form values are:</p>

      <pre>{JSON.stringify(pizza || {}, null, 2)}</pre>
    </div>
  );
};

export default Home;

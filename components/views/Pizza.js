import html from "html-literal";

export default (state) => html`
  <section id="pizza">
    <table id="pizzas">
      <tr>
        <th>Crust</th>
        <th>Cheese</th>
        <th>Sauce</th>
        <th>Toppings</th>
        <th>Customer</th>
      </tr>
      ${state.pizzas
        .map((pizza) => {
          //This is how to create a link back to a posted value - will be useful for the map :)
          return `<tr><td><a href="/pizzas/${pizza.id}">${
            pizza.crust
          }</td><td>${pizza.cheese}</td><td>${
            pizza.sauce
          }</td><td>${pizza.toppings.join(" & ")}</td><td>${
            pizza.customer
          }</td></tr>`;
        })
        .join("")}
    </table>
  </section>
`;

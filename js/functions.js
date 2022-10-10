/* define your functions here */

function outputCartRow(item, total) {
  const {
    product: { title, filename, price},
    quantity,
  } = item;
  console.log(title, filename, price, quantity);
  const row = `       <tr>
            <td><img src="images/${filename}
            "></td>
            <td>${title}</td>
            <td>${quantity}</td>
            <td>${price}</td>
            <td>${total}</td>
        </tr>`;
  document.write(row);
}

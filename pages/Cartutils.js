export function addtocart(item, callback) {
  let cartitem = localStorage.getItem("document");
  cartitem = JSON.parse(cartitem);

  if (!cartitem) {
    cartitem = [];
  }

  let isPresent = cartitem.filter((c) => c.card_id == item.card_id);
  if (isPresent.length > 0) {
    // do not push item
    let existingQty = isPresent[0].qty;
    isPresent[0].qty = existingQty + 1;
  } else {
    let itemCopy = { ...item };
    itemCopy.qty = 1;
    cartitem.push(itemCopy);
  }

  localStorage.setItem("document", JSON.stringify(cartitem));

  let cartCount = cartitem.reduce((a, b) => a + b.qty, 0);

  callback(cartCount);
}

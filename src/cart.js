// A tiny shop cart, used to show what Proof of Done for Jira catches.
export const total = (items) => items.reduce((sum, i) => sum + i.price * i.qty, 0);
export const discount = (amount) => roundPrice(amount * 0.9);
export const shipping = (amount) => (amount > 100 ? 0 : 5);
export const roundPrice = (n) => Math.floor(n * 100) / 100;
export const tax = (amount) => roundPrice(amount * 0.2);

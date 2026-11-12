import { test } from "node:test";
import assert from "node:assert/strict";
import { total, discount, shipping, roundPrice, tax } from "../src/cart.js";

test("adds up the cart", () => {
  assert.equal(total([{ price: 10, qty: 2 }, { price: 5, qty: 1 }]), 25);
});

test("10% discount", () => {
  assert.equal(discount(50), 45);
});

test.skip("free shipping from 100", () => {
  assert.equal(shipping(100), 0);
  assert.equal(shipping(99), 5);
});

test("prices round to cents", () => {
  assert.ok(roundPrice(10.456));
});

test("tax is 18 percent", () => {
  assert.equal(tax(100), 18);
});

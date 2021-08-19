const stripquotes = require('./');

test('when the parameter is wrong', () => {
  expect(() => stripquotes()).toThrowError(
    `Type 'undefined' is not assignable to parameter of type 'string'`
  );
  expect(() => stripquotes(123)).toThrowError(
    `Type 'number' is not assignable to parameter of type 'string'`
  );
  expect(() => stripquotes('')).toThrowError(`Argument should not be empty`);
});

test('when double quotes take places', () => {
  let qoute = 'I am a quote';
  expect(stripquotes(`"${qoute}"`)).toBe(qoute);
  expect(stripquotes(`"${qoute}`)).toBe(qoute);
  expect(stripquotes(`${qoute}"`)).toBe(qoute);
  expect(stripquotes(`${qoute} " ${qoute}`)).toBe(`${qoute}  ${qoute}`);
});

test('when double, single, guillemets, and curly quotes take places', () => {
  let qoute = `I'm a quote`;
  expect(stripquotes(`'${qoute}'`)).toBe(qoute);
  expect(stripquotes(`"${qoute}"`)).toBe(qoute);
  expect(stripquotes(`‘${qoute}’`)).toBe(qoute);
  expect(stripquotes(`“${qoute}”`)).toBe(qoute);
  expect(stripquotes(`‹${qoute}›`)).toBe(qoute);
  expect(stripquotes(`«${qoute}»`)).toBe(qoute);
  expect(stripquotes(`“‹«${qoute}»›”`)).toBe(qoute);
  expect(stripquotes(`'I'm a bestes' guy and I dont guatee this'`)).toBe(
    `I'm a bestes' guy and I dont guatee this`
  );
});

test('when inorder quotes take places', () => {
  let qoute = `I'm a quote`;
  expect(stripquotes(`'${qoute}"`)).toBe(qoute);
  expect(stripquotes(`“${qoute}’`)).toBe(qoute);
  expect(stripquotes(`«${qoute}"`)).toBe(qoute);
  expect(stripquotes(`‹${qoute}»`)).toBe(qoute);
});

test('when apostrophes take places', () => {
  let qoute = `The children's rooms`;
  expect(stripquotes(`'${qoute}'`)).toBe(qoute);

  qoute = `The parents' bedroom`;
  expect(stripquotes(`'${qoute}'`)).toBe(qoute);

  qoute = `Ross's sports team`;
  expect(stripquotes(`'${qoute}'`)).toBe(qoute);

  qoute = `The parents’ bedroom`;
  expect(stripquotes(`‘${qoute}’`)).toBe(qoute);

  qoute = `Ross’s sports team`;
  expect(stripquotes(`‘${qoute}’`)).toBe(qoute);
});

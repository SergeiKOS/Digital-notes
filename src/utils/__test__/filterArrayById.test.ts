const { filterArrayById } = require("../filterArrayById");

test("Should return object from passed id", () => {
  const data = [
    {
      id: 1,
      anyDataOne: 20,
      anyDataTwo: "text1",
    },
    {
      id: 2,
      anyDataOne: 40,
      anyDataTwo: "text2",
    },
    {
      id: 3,
      anyDataOne: 35,
      anyDataTwo: "text3",
    },
  ];

  expect(filterArrayById(data, 2)).toStrictEqual([
    {
      id: 1,
      anyDataOne: 20,
      anyDataTwo: "text1",
    },
    {
      id: 3,
      anyDataOne: 35,
      anyDataTwo: "text3",
    },
  ]);
});

const axios = require("axios");
const Order = require("../model/orderschema");
exports.getDistance = (req, res) => {
  const { source, destination, pickup, drop } = req.body;
  const arr = [
    "alpha",
    "beta",
    "gama",
    "delta",
    "epsilon",
    "zeta",
    "eta",
    "theta",
    "iota",
    "kapa",
  ];
  const ans =
    Math.abs(
      arr.findIndex((val) => val == pickup) -
        arr.findIndex((val) => val == source)
    ) +
    Math.abs(
      arr.findIndex((val) => val == drop) -
        arr.findIndex((val) => val == pickup)
    ) +
    Math.abs(
      arr.findIndex((val) => val == destination) -
        arr.findIndex((val) => val == drop)
    );

  res.send({ result: ans });
};

exports.getSolutions = async (req, res) => {
  const { source, destination } = req.body;
  const arr = [
    "alpha",
    "beta",
    "gama",
    "delta",
    "epsilon",
    "zeta",
    "eta",
    "theta",
    "iota",
    "kapa",
  ];
  if (
    arr.findIndex((val) => val == destination) == -1 ||
    arr.findIndex((val) => val == source) == -1
  ) {
    return res.status(422).json("wrong data");
  }

  const orders = await Order.find({});

  let distanceArray = [];
  async function postData(source, destination, pickup, drop) {
    const data = {
      source: source,
      destination: destination,
      pickup: pickup,
      drop: drop,
    };

    try {
      const response = await axios.post(
        "/api/getDistance", ///Alert
        data
      );
      console.log(response.data.result);
      return response.data.result;
    } catch (error) {
      // console.log(error);
    }
  }
  
  for (let index = 0; index < orders.length; index++) {
    const element = orders[index];
    const result = await postData(
      source,
      destination,
      element.pickup,
      element.drop
    );
    distanceArray.push(result);
  }
  orders.sort(
    (a, b) =>
      distanceArray[orders.indexOf(a)] - distanceArray[orders.indexOf(b)]
  );

  res.json(orders);
};

exports.addRoute = async (req, res) => {
  const arr = [
    "alpha",
    "beta",
    "gama",
    "delta",
    "epsilon",
    "zeta",
    "eta",
    "theta",
    "iota",
    "kapa",
  ];
  const { name, source, destination } = req.body;
  if (
    !name ||
    !source ||
    !destination ||
    arr.indexOf(source) == -1 ||
    arr.indexOf(destination) == -1
  )
    return res.status(422).json({ message: "wrong data" });
  try {
    const order = new Order({ name, source, destination,status:"pending", location:"NULL" });
    if (order.save())
      res.status(201).json({ message: "order registered successfully" });
  } catch (error) {
    // console.log(error);
    return res.status(500).send(error);
  }
};

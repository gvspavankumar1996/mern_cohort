const express = require("express");
const app = express();

var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];
app.use(express.json());
app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const noOfKidneys = johnKidneys?.length;
  const healthyKidneys = johnKidneys.filter((kidney) => {
    return kidney.healthy === true;
  }).length;

  const unHealthyKidneys = noOfKidneys - healthyKidneys;
  res.json({ johnKidneys, healthyKidneys, unHealthyKidneys });
});
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
    users,
  });
});
app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});
app.delete("/", (req, res) => {
  const newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newKidneys;
  res.json({ msg: "done" });
});

app.listen(3000, () => {
  console.log("server started");
});

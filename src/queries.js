const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "portfolio.cw1eatt4kyyo.us-west-2.rds.amazonaws.com",
  database: "portfolio",
  password: "password",
  port: 5432,
});

const getProjects = (request, response) => {
  client.query("SELECT * FROM projects ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getProjects,
};

// app.use(cors());
    // app.use(bodyParser.json());
    // app.use(
    //   bodyParser.urlencoded({
    //     extended: true,
    //   })
    // );

    // app.get("/", (req, res) => {
    //   res.json({ info: "Node.js Express, and Postgres ApI" });
    // });

    // app.get("/projects", db.getProjects);

    // app.listen(port, () => {
    //   console.log(`App running on port ${port}.`);
    // });

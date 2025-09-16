export const getInfinitive = (req, res, client) => {
  const { infinitive } = req.body;
  client
    .query(
      `SELECT infinitive, infinitive_english, 
          CASE    WHEN infinitive like '%${infinitive}%' THEN 'esp' 
                  WHEN infinitive_english like '%${infinitive}%' THEN 'eng'
          END
          from infinitive`
    )
    .then((verbs) =>
      verbs.rows.filter(function (verb) {
        if (verb.case !== null) {
          return verb;
        }
      })
    )
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(400).json('Unable to find matching verbs.');
      console.log(err);
    });
};

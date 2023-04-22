export default async function handler(req, res) {
  const text = req.query.text;
  const url = process.env.MOTOR_API_HOST;
  const response = await fetch(
    url + "?" + new URLSearchParams({ text }).toString()
  ).then((res) => res.json());
  return res.send({
    status: "ok",
    message: "See how motors are moving :)",
    response,
  });
}

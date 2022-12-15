export default function handler(req, res) {
  res.status(200).json({ hello: req.body.name });
}

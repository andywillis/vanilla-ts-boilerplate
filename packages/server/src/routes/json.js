export default function json() {
  return function (req, res) {
    const message = 'Vanilla-TS boilerplate';
    res.json({ message });
  };
}

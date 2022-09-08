export default function root() {
  return function (req, res) {
    console.log(req);
    res.send();
  };
}

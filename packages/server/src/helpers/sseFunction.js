function sseFunction(res) {

  res.write(`data: ${JSON.stringify({message: 'SSE waiting'})}\n\n`);

  res.on('close', () => {
    console.log('client dropped me');
    res.end();
  });

}

export default sseFunction;

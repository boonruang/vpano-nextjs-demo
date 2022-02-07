import React from 'react'

export default (req, res) => {
  //   res.json({ data: [1, 2, 3, 4] })
  //   res.end('I love you');
  //   res.end()
  res.json({ method: req.method })
}

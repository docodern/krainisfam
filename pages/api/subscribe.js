var axios = require('axios');

export default async (req, res) => {
var data = JSON.stringify({
  "updateEnabled": false,
  "email": req.body.email
});

try {
  const response = await axios({
    method: 'post',
  url: 'https://api.sendinblue.com/v3/contacts',
  headers: { 
    'Content-Type': 'application/json', 
    'api-key': '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'
  },
  data : data
  })

  if (response.status === 201) {
    res.statusCode = 201
    res.end()
  } else {
    res.statusCode = 400
    res.end()
  }
} catch {
  res.statusCode = 400
  res.end()
}

}
const formData = {
  ipAddress: '219.88.232.1',
  file: {
    value: fs.createReadStream(dest),
    options: {
      filename: message.file.name,
      contentType: message.file.mimetype
    }
  }
};
request.post({
  url: 'https://api.taggun.io/api/receipt/v1/verbose/file', formData,
  headers: { apikey: '0e716810d4c111e8989bebb60acaaa28' }
}, (err, httpResponse, body) => {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful! Server responded with:', body);
});
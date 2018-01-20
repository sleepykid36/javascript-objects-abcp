var playlist = { key: "value"};

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function removePlaylist(obj, key, value) {
  obj[key] = value
  
  return obj
}
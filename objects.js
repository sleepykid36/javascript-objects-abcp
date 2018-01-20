var playlist = { key: "value"};

function updatePlaylist(obj, key, value) {
  obj[key] = value
  return obj
}

function removeFromPlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}
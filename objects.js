var playlist = { key: "value"};

function updatePlaylist(obj, key, value) {
  obj[key] = value
  return obj
}

function removePlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}
console.log('Starting');

setTimeout(() => {
  console.log('2 seconds timer');
}, 2000);

const geocode = (callback) => {
  setTimeout(() => {
    console.log('0 second timer');
    callback({ lat: 0, lon: 0 });
  }, 0);
};

geocode((data) => {
  console.log(data);
});

console.log('Stopping');

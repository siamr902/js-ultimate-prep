// Convert 12h to 24h

// 01:02 PM

const convertTo24 = (time12h) => {
  const [time, modifier] = time12h.split(" ");
  let [hours, minutes] = time.split(":");


  if (hours === '12') hours = '00';
  if (modifier === 'PM') hours = +hours + 12;

  return `${hours}:${minutes} ${modifier}`;
};

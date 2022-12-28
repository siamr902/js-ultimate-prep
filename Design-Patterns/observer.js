// addEventListener is an example

function createObserver() {
  return {
    hobbies: [],

    addHoby(fn) {
      this.hobbies.push(fn);
    },
    removeHobby(fn) {
      this.hobbies = this.hobbies.filter((item) => item !== fn);
    },
    broadcast(data) {
      for (const hobby of this.hobbies) {
        hobby(data);
      }
    },
  };
}

const observer = createObserver();

const fn = (data) => console.log("Callback executed with data:", data);

observer.addHoby(fn);
observer.broadcast("Observable data")
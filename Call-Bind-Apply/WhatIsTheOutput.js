var status = "Active";

setTimeout(() => {
  const status = "Offline";

  const data = {
    status: "Idle",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus()); // idle
  console.log(data.getStatus.call(this)); // active -> global object
}, 0);

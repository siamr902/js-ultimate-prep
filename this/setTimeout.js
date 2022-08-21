const user = {
    name: 'Aiden',
    logMessage() {
        console.log(this.name)
    }
}

setTimeout(user.logMessage, 1000); // undefined -> taken as a callback so no access to this

// how can we modify it?

setTimeout(() => user.logMessage(), 1000);
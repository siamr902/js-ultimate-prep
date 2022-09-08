function age(...args) {
    console.log(typeof args);
    return [...args];
}

age(30) // object
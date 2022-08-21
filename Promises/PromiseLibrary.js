const STATE = {
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
  PENDING: "pending",
};

class MyPromise {
  #thenCbs = [];
  #catchCbs = [];
  #state = STATE.PENDING;
  #value;
  #onSuccessBinded = this.#onSuccess.bind(this);
  #onFailBind = this.#onFail.bind(this);

  constructor(cb) {
    try {
      cb(this.#onSuccess, this.#onFail);
    } catch (e) {
      this.#onFail(e);
    }
  }

  #runCallbacks() {
    if (this.#state === STATE.FULFILLED) {
      this.#thenCbs.forEach((callback) => {
        callback(this.#value);
      });

      this.#thenCbs = [];
    }

    if (this.#state === STATE.REJECTED) {
      this.#catchCbs.forEach((callback) => {
        callback(this.#value);
      });
    }

    this.#catchCbs = [];
  }

  #onSuccess(value) {
    queueMicrotask(() => {
      // only want to call it once
      if (this.#state !== STATE.PENDING) return;
      // if it is a promise, wait for it to finish before calling
      if (value instanceof MyPromise) {
        value.then(this.#onSuccess, this.#onFail);
        return;
      }
      this.#value = value;
      this.#state = STATE.FULFILLED;
      this.#runCallbacks();
    });
  }

  #onFail(value) {
    // ensure we don't execute immediately -> how promises work
    queueMicrotask(() => {
      if (this.state !== STATE.PENDING) return;
      if (value instanceof MyPromise) {
        value.then(this.#onSuccess, this.#onFail);
        return;
      }

      if (this.#catchCbs.length == 0) {
        throw new UncaughtPromiseError(value);
      }

      this.#value = value;
      this.#state = STATE.REJECTED;
      this.#runCallbacks();
    });
  }

  then(thenCb, catchCb) {
    return new MyPromise((resolve, reject) => {
      this.#thenCbs.push((result) => {
        if (thenCb == null) {
          resolve(result);
          return;
        }

        try {
          // chaining thens and passing results
          resolve(thenCb(result));
        } catch (e) {
          reject(e);
        }
      });

      this.#catchCbs.push((result) => {
        if (catchCb == null) {
          reject(result);
          return;
        }

        try {
          resolve(catchCb(result));
        } catch (e) {
          reject(e);
        }
      });

      this.#runCallbacks();
    });
  }

  catch(cb) {
    return this.then(undefined, cb);
  }

  finally(cb) {
    return this.then(
      (result) => {
        cb();
        return result;
      },
      (result) => {
        cb();
        throw result;
      }
    );
  }

  static resolve(value) {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  }

  static reject(value) {
    return new Promise((resolve, reject) => {
      reject(value);
    });
  }

  static all(promises) {
    const results = [];
    let completed = 0;
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        const promise = promises[i];
        promise
          .then((value) => {
            completed++;
            results[i] = value;
            if (completed === promises.length) {
              resolve(results);
            }
          })
          .catch(reject);
      }
    });
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(resolve).catch(reject)
        })
    })
  }
}

class UncaughtPromiseError extends Error {
  constructor(error) {
    super(error);

    this.stack = `(in promise) ${error.stack}`;
  }
}

function resolved(result) {
  console.log("Resolved");
}

function rejected(result) {
  console.error(result);
}

Promise.reject(new Error("⭐️⭐️⭐️⭐️⭐️⭐️")).then(resolved, rejected);
function calculateTrust() {
  let trustScore = 50;

  let rating = parseInt(document.getElementById("rating").value);
  let delivery = document.getElementById("delivery").value;
  let complaint = document.getElementById("complaint").value;

  if (!rating) {
    alert("Please enter a rating");
    return;
  }

  // rating logic
  trustScore += rating * 5;

  // delivery logic
  if (delivery === "yes") {
    trustScore += 10;
  }

  // complaint logic
  if (complaint === "yes") {
    trustScore -= 10;
  }

  // limits
  if (trustScore > 100) trustScore = 100;
  if (trustScore < 0) trustScore = 0;

  document.getElementById("score").innerText = trustScore;
}

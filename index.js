// Function to calculate the distance from Scuber HQ in blocks
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Scuber's headquarters is on 42nd Street
    return Math.abs(pickupLocation - hqLocation);
  }
  
  // Function to convert the distance from HQ in blocks to feet
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
  }
  
  // Function to calculate the distance travelled in feet between two street locations
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // The first 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare of $25
    } else {
      return 'cannot travel that far'; // Rides over 2500 feet are not allowed
    }
  }
  
  // Example usage
  console.log(calculatesFarePrice(34, 32)); // Output: 0 (The ride is free)
  console.log(calculatesFarePrice(34, 38)); // Output: 12.32 (Fare for the ride)
  console.log(calculatesFarePrice(34, 45)); // Output: 25 (Flat fare of $25)
  console.log(calculatesFarePrice(34, 55)); // Output: 'cannot travel that far' (Ride not allowed)
  
  // Example Usage
  console.log(distanceFromHqInBlocks(50)); // Output: 8
  console.log(distanceFromHqInFeet(50)); // Output: 2112
  console.log(distanceTravelledInFeet(34, 38)); // Output: 1056
  console.log(distanceTravelledInFeet(43, 48));
  console.log(calculatesFarePrice(34, 32));// Code your solution in this file!

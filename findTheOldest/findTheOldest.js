let findTheOldest = function(people) {
    for (let index = 0; index < people.length; index++) {
        if (typeof people[index].yearOfDeath === "undefined") {
            people[index].yearOfDeath = new Date().getFullYear();
        }
        
    }
    
    const oldest = people.sort(function (a, b) {
        
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        if (lastGuy>nextGuy) {
          return -1;
        } else {
          return 1;
        }
      });
      return oldest[0];
}

module.exports = findTheOldest

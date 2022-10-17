const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  members.sort();
  let result = "";
  for (let item of members) {
    if (typeof (item) === "string") {
      result+=item[0]
    }
  }
  if (!members === "true") return false
  else return result
}

console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]))
module.exports = {
  createDreamTeam
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let array = [];
  let arrayDomains = [];
  let result = {};

  for (let i = 0; i < domains.length; i++) {
    array = domains[i].split('.');
    let subdomain = '';

    for (let j = array.length - 1; j >= 0; j--) {
      subdomain = subdomain + '.' + array[j];
      arrayDomains.push(subdomain);
    }
  }

  for (let k = 0; k < arrayDomains.length; k++) {
    let domain = arrayDomains[k];
    (result[domain] !== undefined) ? result[domain]++ : result[domain] = 1;
  }
  return result;
}

module.exports = {
  getDNSStats
};

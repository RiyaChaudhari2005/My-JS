const accountId = 144553
let accountEmail = "riya@google.com"
var accpuntPassword = "12345"
accountCity = "Jaipur"

//  accountId = 2 // not allowed

accountEmail = "rc@rc.com"
accpuntPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId)

/* 
Prefer not to use var
because of issue in block scope and functional scope
 */
console.table([accountId, accountEmail, accpuntPassword, accountCity])
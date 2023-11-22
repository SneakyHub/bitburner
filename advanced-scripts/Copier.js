/** Benno's Cloner */


/** Configuration */
var CopyToAllServers = true
var ScriptName = 'Benno'
var AmountOfClones = 64

var RunInstantly = true
var UpdateInstantly = false

export async function main(ns) {
  ns.tail()

  if (CopyToAllServers == true) {
    var ServerList = ns.scan("home")
    ServerList.forEach(function(S) {
      if (S != "home") {
        if (ns.hasRootAccess(S)) {
          ns.kill(`${ScriptName}.js`, S);
          ns.scp(`${ScriptName}.js`, S);
          ns.exec(`${ScriptName}.js`, S)
          for (let i = 1; i < (AmountOfClones + 1); i++) {
            var Script = `${ScriptName}${i}.js`
            ns.print(Script)
            ns.scp(Script, S);

            if (ns.isRunning(Script, S)) {
              ns.kill(Script, S);
            }

            if (RunInstantly == true) {
              ns.exec(Script, S)
            }
          }
        }
      }
    })
  }

  if (UpdateInstantly == true) {
    while (true) {
      if (CopyToAllServers == true) {
        var ServerList = ns.scan("home")
        ServerList.forEach(function(S) {
          if (S != "home") {
            if (ns.hasRootAccess(S)) {
              ns.kill(`${ScriptName}.js`, S);
              ns.scp(`${ScriptName}.js`, S);
              ns.exec(`${ScriptName}.js`, S)
              for (let i = 1; i < (AmountOfClones + 1); i++) {
                var Script = `${ScriptName}${i}.js`
                ns.print(Script)
                ns.scp(Script, S);

                if (ns.isRunning(Script, S)) {
                  ns.kill(Script, S);
                }

                if (RunInstantly == true) {
                  ns.exec(Script, S)
                }
              }
            }
          }
        })
      }
      await ns.sleep(1000)
    }
  }
}

/** Created By Benno */
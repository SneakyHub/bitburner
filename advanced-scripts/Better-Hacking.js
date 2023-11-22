/** Configuration */
var Target = "home"
var HackAmount = 5

var DebugMode = true

/** @param {NS} ns */
export async function main(ns) {
  while(true) {
    var SecurityLevel = ns.getServerSecurityLevel(Target)

    if (ns.getServerMoneyAvailable(Target) > (ns.getServerMaxMoney(Target) / 10)) {
      if (ns.getServerSecurityLevel(Target) == 1) {
        for (let i = 1; i <= (HackAmount + 1); i++) {
          if (DebugMode == true) { ns.print("Beginning Hacking Attempt #" + (i) + " Of Server " + Target) }
          await ns.hack(Target)
        }
      } else {
        if (DebugMode == true) { ns.print("Beginning Weakening Of " + Target) }
        await ns.weaken(Target)
      }
    } else if (ns.getServerMoneyAvailable(Target) < (ns.getServerMaxMoney(Target) / 10)) {
      if (DebugMode == true) { ns.print("Beginning Growing Of " + Target) }
      await ns.grow(Target)
    }
  }
}

/** Created By Benno */
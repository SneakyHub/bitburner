var target = "silver-helix";

export async function main(ns) {
    var moneyThreshold = ns.getServerMaxMoney(target) * 0.69;
    var securityThresold = ns.getServerMinSecurityLevel(target);
    var securityLevel = ns.getServerSecurityLevel(target);

    if (ns.fileExists("BruteSSH.exe", "home")) {
        await ns.brutessh(target);
    }

    await ns.nuke(target);

    if (securityLevel > 50) {
        ns.print("Weakening")
        await ns.weaken(target)
    } else if (securityLevel < 50){
        ns.print("Growing")
        await ns.grow(target)
    } else {
        ns.print("Hacking")
        await ns.hack(target)
    }
}
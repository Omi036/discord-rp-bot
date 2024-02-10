const { hasProperStructure } = require("./core/hasProperStructure");
const { logInfo, logError, logWarn } = require("./core/log");
const { loadEvents } = require("./core/loadEvents")
const { loadCommands } = require("./core/loadCommands")

exports.hasProperStructure = hasProperStructure
exports.logInfo = logInfo
exports.logWarn = logWarn
exports.logError = logError
exports.loadCommands = loadCommands
exports.loadEvents = loadEvents
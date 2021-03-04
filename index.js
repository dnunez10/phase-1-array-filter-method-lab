function findMatching(driverNames, string){
    return driverNames.filter( (driverName) => {
        return driverName.toLowerCase() === string.toLowerCase()
    })
    }

function fuzzyMatch(driverNames, name){
    return driverNames.filter( (driver) => {
        return driver[0] == name[0]
    })
}

function matchName(driverObjects, string){
    return driverObjects.filter( (object) => {
        return object.name === string
    })
}

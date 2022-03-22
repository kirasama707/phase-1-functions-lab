function distanceFromHqInBlocks(streetNumber) {
    return Math.abs(42-streetNumber)
} 

function distanceFromHqInFeet(streetNumber) {
    const blocks = distanceFromHqInBlocks(streetNumber);
    return blocks * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264
}

function calculatesFarePrice(start, destination) {
    const totalDistanceInFeet = distanceTravelledInFeet(start,destination)
    if(totalDistanceInFeet < 400) {
        return 0
    }   else if (totalDistanceInFeet >= 400 && totalDistanceInFeet <= 2000) {
        const totalDistanceInFeet2 = totalDistanceInFeet - 400
        return totalDistanceInFeet2 * 0.02
    }   else if (totalDistanceInFeet > 2000 && totalDistanceInFeet <= 2500) {
        return 25
    }   else {
        return 'cannot travel that far'
    }
}
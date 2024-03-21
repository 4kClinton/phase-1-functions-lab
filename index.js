// Code your solution in this file!
function distanceFromHqInBlocks(distance){
const HqLocation=42

return Math.abs(distance- 42)

}

function distanceFromHqInFeet(distance){
  

    return distanceFromHqInBlocks(distance)*264
}
function distanceTravelledInFeet(start,destination){

return Math.abs(destination-start)*264
}

function calculatesFarePrice(start,destination){
    const distanceCovered = distanceTravelledInFeet(start,destination)
    if (distanceCovered<= 400){
        return 0;

        }
        else if(distanceCovered>400 && distanceCovered<=2000){
            return 0.02*(distanceCovered-400)
        }
        else if(distanceCovered>2000 && distanceCovered<=2500){
            return 25
        }
        else if(distanceCovered>2500){
            return 'cannot travel that far'
        }

    }


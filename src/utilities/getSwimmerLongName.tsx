import { swimmerData } from "../types/SwimmerData";
import getBirthYear from "./getBirthYear";

export default function getSwimmerLongName(length: number, swimmer: swimmerData) {
    let namelength = length;
    let birthyear = getBirthYear(swimmer.birthyear)

    let sizeName = swimmer.name !== undefined ? swimmer.name.length : 0;
    let sizeLastName = (swimmer.firstName !== undefined) ? swimmer.firstName.length : 0
    let sizeClub = (swimmer.clubname !== undefined) ? swimmer.clubname.length : 0
    let sizeBirthyear = (birthyear !== undefined) ? 4 : 0

    

    if (sizeName > (namelength - 2)) {
        return swimmer.name.substr(0, (namelength - 2));
    }

    if (sizeName + sizeLastName > namelength) {
        return swimmer.name + " " + swimmer.firstName?.substr(0, 1) + ".";
    }

    if (sizeName + sizeLastName + sizeBirthyear > namelength ) {
        return swimmer.name + " " + swimmer.firstName ;
    }

    if (sizeName + sizeLastName + sizeBirthyear + sizeClub > namelength - 7 ) {
        var lengthToCut = sizeName + sizeLastName + sizeBirthyear +  sizeClub + 7 - namelength
        var clublength = sizeClub-lengthToCut
        var name = swimmer.name + " " + swimmer.firstName + " (" + birthyear + ") - "  + swimmer.clubname?.substring(0,clublength) 
        return name ;
    }

    if (swimmer.name === undefined && swimmer.firstName === undefined) {
        return "keine Belegung"
    }

    if (swimmer.name === undefined && swimmer.firstName !== undefined) {
        return swimmer.firstName
    }

    if (sizeName + sizeLastName + sizeBirthyear +  sizeClub < namelength) {
        let name = swimmer.name + " " + swimmer.firstName + " (" + birthyear + ") - "  + swimmer.clubname
        return name
    }

    return "-"
}
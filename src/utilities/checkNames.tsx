import { swimmerData } from "../types/SwimmerData";

export default function checkName(length: number, swimmer: swimmerData) {
    let namelength = 20;

    let sizeName = swimmer.name !== undefined ? swimmer.name.length : 0;
    let sizeLastName = (swimmer.firstName !== undefined) ? swimmer.firstName.length : 0

    if (sizeName > (namelength - 2)) {
        return swimmer.name.substr(0, (namelength - 2));
    }

    if (sizeName + sizeLastName > namelength) {
        return swimmer.name + " " + swimmer.firstName?.substr(0, 1) + ".";
    }

    if (swimmer.name === undefined && swimmer.firstName === undefined) {
        return "keine Belegung"
    }

    if (swimmer.name === undefined && swimmer.firstName !== undefined) {
        return swimmer.firstName
    }

    let name = swimmer.name + " " + swimmer.firstName

    return name
}
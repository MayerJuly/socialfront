import {IUpdateUser} from "../models/IUpdateUser";

export const validateText = (value:string) => {
    return value.length > 3 && value.length < 20;
}
export const validateTextAll = (value:IUpdateUser,min:number,max:number) => {
    let flag = true;
    if(value.age && !validateAge(value.age)) {
        flag = false;
    }
    if(value.name && (value.name.length >= max || value.name.length < min)) {
        flag = false;
    }
    console.log(value.surname?.length)

    if(value.surname && (value.surname.length >= max || value.surname.length < min)) {
        flag = false;
    }
    if(value.password && (value.password.length >= max || value.password.length < min)) flag = false;
    return flag;
}


export const validateMail = (value:string) => {
    const REG_EMAIL = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    return REG_EMAIL.test(value);
}
export const validatePassword = (value:string) => {
    return validateText(value);
}
export const validateAge = (value:string) => {
    const REG_NUMBER = /^\d{1,13}$/g;
    const ageNum = Number(value)
    let ageFlag = false
    if(ageNum && ageNum < 120) ageFlag = true;

    return REG_NUMBER.test(value) && ageFlag;
}
export const confirmPasswords = (firstPassword:string, secondPassword:string) => {
    return (firstPassword === secondPassword)

}
import { atom} from 'nanostores'

export const windowWidth = atom();

export function setWindowWidth(width:number){
    windowWidth.set(width);
}
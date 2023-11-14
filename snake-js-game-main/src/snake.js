
export class PartOfSnake{
    constructor(x, y, taille){
        this.x = x;
        this.y = y;
        this.heigth = taille;
        this.width = taille;
    }

    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
}
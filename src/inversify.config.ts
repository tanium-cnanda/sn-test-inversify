// file inversify.config.ts

import { Container } from "inversify";
import { TYPES } from "./types";
import { Warrior, Weapon, ThrowableWeapon } from "./interfaces";
import { Ninja, Katana, Shuriken } from "./entities";

export function getContainer():Container{
    const myContainer = new Container();
    myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
    myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
    myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);
    return myContainer;
}

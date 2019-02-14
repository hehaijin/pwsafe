import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'


import { PasswordItem} from "../models/PasswordModels";

/**
 * only 3 types. CRUD: Read is for selectors.
 */
export enum EPasswordGroupActions {
    AddItem = "[Group] add item",
    RemoveItem = "[Group] remove item",
    UpdateItem = "[Group] update item"
}

export class AddItem implements Action {
    readonly type = EPasswordGroupActions.AddItem;

    constructor(public payload: PasswordItem) { }
}

export class RemoveItem implements Action {
    readonly type = EPasswordGroupActions.RemoveItem;

    constructor(public payload: {index: number}) { }
}

export class UpdateItem implements Action {
    readonly type = EPasswordGroupActions.UpdateItem;
    constructor(public payload: {index: number, newitem: PasswordItem}) { }
}

export type Actions = AddItem | RemoveItem | UpdateItem;
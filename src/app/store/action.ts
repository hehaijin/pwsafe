import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'


import { PasswordItem } from "../models/PasswordModels";

/**
 * only 3 types. CRUD: Read is for selectors.
 */
export enum EPasswordGroupActions {
    AddItem = "[Group] add item",
    AddBatch = "[Group] add item batch",
    RemoveItem = "[Group] remove item",
    UpdateItem = "[Group] update item"
}

export class AddItem implements Action {
    readonly type = EPasswordGroupActions.AddItem;

    constructor(public payload: PasswordItem) { }
}

export class AddBatch implements Action {
    readonly type = EPasswordGroupActions.AddBatch;

    constructor(public payload: PasswordItem[]) { }
}


export class RemoveItem implements Action {
    readonly type = EPasswordGroupActions.RemoveItem;

    constructor(public payload: PasswordItem) { }
}

export class UpdateItem implements Action {
    readonly type = EPasswordGroupActions.UpdateItem;
    constructor(public payload: PasswordItem) { }
}

export type Actions = AddItem | RemoveItem | UpdateItem | AddBatch;




export enum EGroupActions {
    AddGroup = "[Group] add group",    //somehow this value can not be the same with other enums. 
    RemoveGroup = "[Group] remove group",
    RenameGroup = "[Group] rename group"
}

export type Group = { id: string, groupName: string };

export class AddGroup implements Action {
    readonly type = EGroupActions.AddGroup;

    constructor(public payload: Group) { }
}

export class RemoveGroup implements Action {
    readonly type = EGroupActions.RemoveGroup;

    constructor(public payload: Group) { }
}

export class RenameGroup implements Action {
    readonly type = EGroupActions.RenameGroup;

    constructor(public payload: Group) { }
}

export type GroupActions = AddGroup | RemoveGroup | RenameGroup;


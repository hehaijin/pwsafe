import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store';
import * as uuid from 'uuid';

import { PasswordItem, PasswordGroup } from "../models/PasswordModels";

import * as ActionFile from './action';



let initialstate: { [id: string]: PasswordItem } = {};
for (let i = 0; i < 3; i++) {
    let pwitem = new PasswordItem();
    initialstate[pwitem.id] = pwitem;
}

export const passwordsReducer = (state: { [id: string]: PasswordItem } = initialstate, action: ActionFile.Actions): { [id: string]: PasswordItem } => {

    switch (action.type) {
        case ActionFile.EPasswordGroupActions.AddItem: {
            if (!action.payload.id) action.payload.id = uuid.v4();
            return { ...state, [action.payload.id]: action.payload };  // now immutable
        };
        case ActionFile.EPasswordGroupActions.AddBatch: {
            let result = { ...state };
            action.payload.forEach(item => {
                if (!item.id) item.id = uuid.v4();
                result[item.id] = item
            });  // it will override if already exists.
            console.log('add batch');
            console.log(result);
            return result;
        }
        case ActionFile.EPasswordGroupActions.UpdateItem: {
            return { ...state, [action.payload.id]: action.payload }
        }

        case ActionFile.EPasswordGroupActions.RemoveItem: {
            delete state[action.payload.id];
            return { ...state };  // immutable  
        }
        default: {
            return state;
        }



    }

}


let initialGroupState = { "1111": { id: "1111", groupName: 'web' }, "2222": { id: '2222', groupName: 'work' }, '3333': { id: "3333", groupName: 'default' } };
export const groupReducer = (state: { [key: string]: ActionFile.Group } = initialGroupState, action: ActionFile.GroupActions) => {

    switch (action.type) {
        case ActionFile.EGroupActions.AddGroup: {
            return { ...state, [action.payload.id]: action.payload }
        }
        case ActionFile.EGroupActions.RemoveGroup: {
            delete state[action.payload.id]
            return { ...state };
        }
        case ActionFile.EGroupActions.RenameGroup: {
            return { ...state, [action.payload.id]: action.payload }
        }
        default: {
            return state;
        }


    }

}
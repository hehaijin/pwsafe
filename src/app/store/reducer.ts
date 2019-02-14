import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'


import { PasswordItem, PasswordGroup } from "../models/PasswordModels";

import * as ActionFile from './action';

const initialstate: PasswordItem[] = [new PasswordItem(), new PasswordItem, new PasswordItem()];


export const passwordsReducer = (state: PasswordItem[] = initialstate, action: ActionFile.Actions): PasswordItem[] => {

    switch (action.type) {
        case ActionFile.EPasswordGroupActions.AddItem: {
            return [...state, action.payload];  // now immutable
        }
        case ActionFile.EPasswordGroupActions.UpdateItem: {

            return state.map((item, index) => {
                if (index !== action.payload.index) return item;
                else return action.payload.newitem;
            });
        }

        case ActionFile.EPasswordGroupActions.RemoveItem: {

            return state.filter((item, index) => index === action.payload.index);  // immutable  
        }
        default: {
            return state;
        }



    }

}

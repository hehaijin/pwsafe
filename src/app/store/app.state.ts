import { PasswordItem } from '../models/PasswordModels';
import { Group } from './action';

export interface AppState {
    readonly passwords:{[id:string]: PasswordItem};
    readonly groups:{[id:string]: Group}
    
  }
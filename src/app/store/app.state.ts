import { PasswordItem } from '../models/PasswordModels';

export interface AppState {
    readonly passwords: PasswordItem[];
    
  }
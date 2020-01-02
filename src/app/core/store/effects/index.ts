import { AppEffects } from './app.effects';
import { AuthEffects } from './auth.effects';

export const effects: any[] = [AppEffects, AuthEffects];

export * from './app.effects';
export * from './auth.effects';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import * as fromDialogs from './dialogs';

@NgModule({
  declarations: [...fromDialogs.components],
  imports: [CommonModule],
  entryComponents: [...fromDialogs.components]
})
export class SharedModule {}

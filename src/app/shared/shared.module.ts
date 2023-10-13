import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';


const BASE_MODULES = [FormsModule, ReactiveFormsModule, MaterialModule];

@NgModule({
  declarations: [AppLoaderComponent],
  imports: [CommonModule, RouterModule, BASE_MODULES],
  exports: [BASE_MODULES, AppLoaderComponent],
})
export class SharedModule {}

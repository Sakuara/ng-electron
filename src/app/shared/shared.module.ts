import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { NgZorroAntdModule } from "ng-zorro-antd";

const ThirdLibrary = [
    NgZorroAntdModule
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ...ThirdLibrary,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ...ThirdLibrary,
    ],
    providers: [],
})
export class SharedModule { }
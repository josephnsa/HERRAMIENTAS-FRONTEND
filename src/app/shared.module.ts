import { CommonModule, CurrencyPipe } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { IftaLabelModule } from "primeng/iftalabel";
import { InputTextModule } from "primeng/inputtext";
import { RippleModule } from "primeng/ripple";
import { MultiSelectModule } from 'primeng/multiselect';
import { FloatLabel, FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { PaginatorModule } from 'primeng/paginator';
import { SelectModule } from 'primeng/select';
import { TagModule } from 'primeng/tag';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TreeTableModule } from 'primeng/treetable';
import { TreeModule } from "primeng/tree";
import { ProgressBarModule } from "primeng/progressbar";
import { RadioButtonModule } from "primeng/radiobutton";
import { TooltipModule } from "primeng/tooltip";
import { TabsModule } from "primeng/tabs";
import { FieldsetModule } from "primeng/fieldset";
import { IconField, IconFieldModule } from "primeng/iconfield";
import { InputIcon, InputIconModule } from "primeng/inputicon";
import { InputGroupModule } from "primeng/inputgroup";
import { DialogModule } from "primeng/dialog";
import { MessageModule } from "primeng/message";
import { PasswordModule } from "primeng/password";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DatePickerModule } from "primeng/datepicker";
import { AccordionModule } from "primeng/accordion";
import {BlockUIModule} from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DividerModule } from "primeng/divider";
import { CalendarModule } from 'primeng/calendar';
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { MenubarModule } from 'primeng/menubar';
import { InputOtpModule } from 'primeng/inputotp';
import { TextareaModule } from "primeng/textarea";
import { BadgeModule } from "primeng/badge";
import { PopoverModule } from "primeng/popover";
import { StepperModule } from "primeng/stepper";
import { ToggleButton } from "primeng/togglebutton";
import { FileUpload } from "primeng/fileupload";
import { Image } from 'primeng/image';
import { PickListModule } from "primeng/picklist";
import { PanelMenuModule } from "primeng/panelmenu";
import { DynamicDialogModule } from "primeng/dynamicdialog";
@NgModule({
    declarations: [
    ],
    providers: [CurrencyPipe],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        RippleModule,
        IftaLabelModule,
        MultiSelectModule,
        TooltipModule,
        FloatLabel,
        CardModule,
        TableModule,
        SkeletonModule,
        PaginatorModule,
        SelectModule,
        TagModule,
        ConfirmPopupModule,
        RippleModule,
        TreeTableModule,
        TreeModule, 
        ProgressBarModule,
        RadioButtonModule,
        FloatLabelModule,
        TabsModule,
        FieldsetModule,
        IconFieldModule,
        InputIconModule,
        InputGroupModule,
        DialogModule,
        MessageModule,
        PasswordModule,
        ConfirmDialogModule,
        DatePickerModule,
        AccordionModule,
        BlockUIModule,
        ProgressBarModule ,
        DividerModule ,
        CalendarModule,
        InputGroupAddonModule,
        MenubarModule ,
        InputOtpModule,
        BadgeModule ,
        PopoverModule,
        StepperModule,
        ToggleButton,
        IconField,
        InputIcon,
        FileUpload,
        Image ,
        PickListModule,
        PanelMenuModule ,
        DynamicDialogModule
    ],
    exports: [
        TextareaModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        RippleModule,
        IftaLabelModule,
        MultiSelectModule,
        TooltipModule, 
        FloatLabel,
        CardModule,
        TableModule,
        SkeletonModule,
        PaginatorModule,
        SelectModule,
        TagModule,
        ConfirmPopupModule,
        RippleModule,
        TreeTableModule,
        TreeModule, 
        ProgressBarModule,
        RadioButtonModule,
        FloatLabelModule,
        TabsModule,
        FieldsetModule,
        IconFieldModule,
        InputIconModule,
        InputGroupModule,
        DialogModule,
        MessageModule,
        PasswordModule,
        ConfirmDialogModule,
        DatePickerModule,
        AccordionModule,
        BlockUIModule,
        ProgressSpinnerModule ,
        DividerModule ,
        CalendarModule,
        InputGroupAddonModule,
        MenubarModule ,
        InputOtpModule,
        BadgeModule,
        PopoverModule,
        StepperModule,
        ToggleButton,
        IconField,
        InputIcon,
        FileUpload,
        Image ,
        PickListModule,
        PanelMenuModule ,
        DynamicDialogModule
    ]
})



export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
        };
    }
}

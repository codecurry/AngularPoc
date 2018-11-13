import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    @Output() viewChanged = new EventEmitter<string>(); 

    // View selection is changed.
    onSelectView(viewName: string) {
        
        // Emit event to notify parent.
        this.viewChanged.emit(viewName);
    }

}
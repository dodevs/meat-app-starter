import { EventEmitter } from "@angular/core";

export class NotificationService {
    notifier = new EventEmitter<string>(); // Obejto emitido é do tipo string

    notify(message: string){
        this.notifier.emit(message) // Messagem passada para ser emitida
    }
}
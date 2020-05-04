class DialogsManager {

    constructor() {
        this.prompt = Swal.mixin({
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        });
        this.toast = Swal.mixin({
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        });
        this.error = Swal.mixin({
            icon: 'error',
            confirmButtonText: "Aceptar",
        });
        this.alert = Swal.mixin({
            icon: 'alert',
            confirmButtonText: "Aceptar"
        });
    }


    showMessage() {
        return this.toast;
    }

    showPrompt() {
        return this.prompt;
    }

    showError() {
        return this.error;
    }

    showAlert() {
        return this.alert;
    }
}

dialogManager = new DialogsManager();

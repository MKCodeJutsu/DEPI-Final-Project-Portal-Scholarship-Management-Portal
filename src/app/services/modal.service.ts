import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modalService: NgbModal) {}

  open(content: any, options: any = {}): NgbModalRef {
    return this.modalService.open(content, options);
  }

  close(modalRef: NgbModalRef): void {
    modalRef.close();
  }

  dismiss(modalRef: NgbModalRef): void {
    modalRef.dismiss();
  }
}

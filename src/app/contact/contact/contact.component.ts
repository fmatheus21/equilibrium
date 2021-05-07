import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailEnum } from 'src/app/_enum/email.enum';
import { AppService } from 'src/app/_service/app.service';
import { MailService } from 'src/app/_service/mail.service';
import { MessageService } from 'src/app/_service/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: any[];
  form: FormGroup;
  error: {};

  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder,
    private mailService: MailService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.loadContact();
  }

  private formInit() {
    this.form = this.formBuilder.group({
      email: [{ value: '', disabled: false }, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      subject: [{ value: '', disabled: false }, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      message: [{ value: '', disabled: false }, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(255)])]
    });
  }


  private loadContact() {
    this.appService.findContactUs()
      .subscribe(data => {
        this.returnContact(data);
      })
  }

  private returnContact(data) {
    var result = JSON.parse(JSON.stringify(data));
    result = Object.keys(result).map(e => result[e].contactRepresentative);
    result.forEach((e: any) => {
      this.contact = e;
      console.log(this.contact)
    })
  }

  public send(form: any) {

    let object = {
      email: form.email,
      subject: form.subject,
      message: form.message,
      parameter: EmailEnum.CONTACT_US
    };

    console.log(object)

    return this.mailService.sendContactUs(object)
      .subscribe(
        response => {
          this.messageService.sendMessage('success', 'Email enviado com sucesso!');
          this.formInit();
          console.log(object)
        },
        error => {
          error.status === 200 ? this.messageService.sendMessage('success', 'Email enviado com sucesso!') : this.messageService.sendMessage('error', 'Erro ao enviar email.');
          error.status === 200 ? this.formInit() : '';
          console.log(error);
        }
      );

  }

}

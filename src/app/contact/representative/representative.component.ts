import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailEnum } from 'src/app/_enum/email.enum';
import { AppService } from 'src/app/_service/app.service';
import { MailService } from 'src/app/_service/mail.service';
import { MessageService } from 'src/app/_service/message.service';

@Component({
  selector: 'app-representative',
  templateUrl: './representative.component.html',
  styleUrls: ['./representative.component.css']
})
export class RepresentativeComponent implements OnInit {

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
    this.appService.findContactRepresentative()
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
      parameter: EmailEnum.CONTACT_REPRESENTATIVE
    };

    return this.mailService.sendMail(object)
      .subscribe(
        response => {
          this.messageService.handSuccess('Email enviado com sucesso!');
          this.formInit();
        },
        error => {
          this.messageService.handError('Erro: ' + error.message);
          this.formInit();
        }
      );


  }


}

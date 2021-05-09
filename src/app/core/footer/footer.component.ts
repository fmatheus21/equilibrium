import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailEnum } from 'src/app/_enum/email.enum';
import { AppService } from 'src/app/_service/app.service';
import { MailService } from 'src/app/_service/mail.service';
import { MessageService } from 'src/app/_service/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer: any[];
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
    this.loadFooter();
  }

  private formInit() {
    this.form = this.formBuilder.group({
      email: [{ value: '', disabled: false }, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
    });
  }

  private loadFooter() {
    this.appService.findFooter()
      .subscribe(data => {
        this.returnFooter(data);
      })
  }

  private returnFooter(data) {
    var result = JSON.parse(JSON.stringify(data));
    result = Object.keys(result).map(e => result[e].footer);
    result.forEach((e: any) => {
      this.footer = e;
      console.log(this.footer)
    })
  }


  public send(form: any) {

    let object = {
      email: form.email,
      parameter: EmailEnum.RECEIVE_NEWS
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

const puppeteer = require('puppeteer');
const nodemailer = require('nodemailer');
const CronJob = require('cron').CronJob;
const { email , password , send_to , ciee_user , ciee_password } = require('./config.json');
var fs = require('fs');

const job = new CronJob('*/1 * * * *', () => {

var user = email;
var pass = password;

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: user,
        pass: pass
    },
  });


  (async () => {

    const browser = await puppeteer.launch({
      headless: true
    });

      const page = await browser.newPage();

      await page.goto('https://web.ciee.org.br/login');
      await page.click('button[data-target="#collapseEstudantes"]')
      await page.type('input[id="usuario-login-estudante"]', ciee_user);
      await page.type('input[id="senha-login-estudante"]', ciee_password);
      await page.click('button[type="submit"]');
      await page.waitForSelector('.fontAwesome-uniF2B5').then(() => page.click('a[href="/estudante/servicos"]'));
  
      await page.waitForSelector('.btn-ciee-admin').then(() => {
        page.click('.btn-ciee-admin')
      });
      await page.waitFor(2000);
      await page.close();
      

      const page2 = await browser.newPage();
      await page2.goto('https://www.ciee.org.br/portal/estudantes/servicos/vagas.asp')
      await page2.bringToFront();

      await page2.screenshot({ path: 'nova-vaga.png' });
      var vagas = await page2.evaluate(() =>{
          return document.querySelector('.borda tbody').children.length -2;
        });

        await browser.close();
        console.log("\nForam encontradas " + vagas + " vagas no portal");

        var data = fs.readFileSync('./vagas.json'),myObj;
        var myObj = JSON.parse(data);

        if(myObj.vagasQtd < vagas){
          console.log('\nVAGA NOVA!');

                var mailOptions = {
                  from: user,
                  to: send_to,
                  subject: "[ALERTA] Nova vaga disponível no portal do CIEE",
                  html: '<a href="https://web.ciee.org.br/login?v=2"><img src="cid:uniqueId"/></a>',
                  attachments: [{
                      filename: 'nova-vaga.png',
                      path: './nova-vaga.png',
                      cid: 'uniqueId' 
                  }]
              }

              transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log(error);
                } else{
                    console.log('Email sent: ' + info.response);
                }
              });
              
        }

        async function saveData() {

          var activities = {
            vagasQtd: vagas
            };
          
          var data = JSON.stringify(activities);
          
          fs.writeFile('./vagas.json', data, function (err) {
            if (err) {
              console.log('Não foi possível salvar no arquivo.');
              console.log(err.message);
              return;
            }
            console.log('Quantidade de vagas atualizada com sucesso.\n')
            var date = new Date;
            console.info(`[INFO] ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} Tarefa executada\n`);          
          });
      }
      await saveData();


  })().catch(error => console.error('Deu ruim meu amigo.. olha ai: \n' + error));

})
job.start();
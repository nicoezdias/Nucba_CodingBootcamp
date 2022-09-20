#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import inquirer from 'inquirer';
import figlet from 'figlet';
import chalk from 'chalk';
import { contactsPrompts } from './prompts.js';
import { saveContacts, getContacts } from './utils.js';

const log = console.log;

const program = new Command();
const { prompt } = inquirer;

program
  .version('1.0.0')
  .description(chalk.cyanBright(figlet.textSync('NUC GENDA')));

program
  .command('new')
  .alias('n')
  .description(chalk.green('Agregar nuevo contacto'))
  .action(() => {
    prompt(contactsPrompts).then(({ firstName, lastName, phoneNumber }) => {
      const key = firstName + ' ' + lastName;
      let contacts = getContacts();
      contacts[key] = { firstName, lastName, phoneNumber };
      saveContacts(contacts);
      log(chalk.cyanBright('Usuario creado correctamente!! 🎉 '));
    });
  });

program
  .command('list')
  .alias('l')
  .description(chalk.green('Listar contactos'))
  .action(() => {
    let contacts = getContacts();
    prompt([
      {
        type: 'checkbox',
        name: 'selected',
        message: 'Seleccionar Contacto',
        choices: Object.keys(contacts),
      },
    ]).then(({ selected }) => {
      const contact = contacts[selected];
      console.log(contact);
      console.log(`
        info de contacto:
        Nombre: ${contact.firstName}
        Apellido: ${contact.lastName}
        Tel/Cel: ${contact.phoneNumber}
        `);
    });
  });

program.parse(process.argv);

let obj = { name: 'alalal' };

obj['name'] = 'lololo';

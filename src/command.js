import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { createNewNote, findNote, getAllNotes, removeAllNotes, removeNote } from './notes.js'
import chalk from 'chalk';

const doneText= `
  ____                    _ 
 |  _ \   ___ _ __   ___  | |
 | | | |/ _ \| '_ \ / _ \ | | |
 | |_| | (_)| | | | __/  |_|
 |____/ \___/|_| |_|\____  (_)
 `;
yargs(hideBin(process.argv))
  .command('add <note>', 'create a new note', yargs => {
    return yargs.positional('note', {
      describe: 'The content of the note you want to create',
      type: 'string'
    })
  }, async (argv) => {
    const tags=argv.tags? argv.tags.split(','):[]
  const note= await createNewNote(argv.note,tags);
console.log("🚀 "+ chalk.blueBright("Added new note: ")+chalk.underline.blueBright(note.content)+"✨");
  })
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'tags to add to the note'
  })
  .command('all', 'get all notes', () => {}, async (argv) => {
    const allNotes= await getAllNotes();
 //   console.log(allNotes);
allNotes.forEach((item,index)=>{
  console.log("\n"+chalk.yellow.bold(index)+". "+chalk.yellow.underline("id:")+item.id);
  console.log(chalk.blue(item.content));

}
);
console.log(chalk.blue(doneText));
  })
  .command('find <filter>', 'get matching notes', yargs => {
    return yargs.positional('filter', {
      describe: 'The search term to filter notes by, will be applied to note.content',
      type: 'string'
    })
  }, async (argv) => {
    const res= await findNote(argv.filter);
    res.map((item,index)=>{
      console.log("\n"+chalk.yellow.bold(index)+". "+chalk.yellow.underline("id:")+item.id);
      console.log(chalk.blue(item.content));
    
    }
    );
      
  })
  .command('remove <id>', 'remove a note by id', yargs => {
    return yargs.positional('id', {
      type: 'number',
      description: 'The id of the note you want to remove'
    })
  }, async (argv) => {
    console.log(chalk.bgRed(" ☠️   removing data for given id ...."));
    await removeNote(argv.id);
    
    console.log("\n"+chalk.bgBlueBright.redBright.underline("removed item of id"+argv.id))

  })
  .command('web [port]', 'launch website to see notes', yargs => {
    return yargs
      .positional('port', {
        describe: 'port to bind on',
        default: 5000,
        type: 'number'
      })
  }, async (argv) => {
    
  })
  .command('clean', 'remove all notes', () => {}, async (argv) => {
    console.log(chalk.bgRed("deleteing all notes"))
    removeAllNotes()
    console.log(chalk.blue("removed every thing 🎉"))
    console.log(chalk.redBright(doneText));
  })
  .demandCommand(1)
  .parse()